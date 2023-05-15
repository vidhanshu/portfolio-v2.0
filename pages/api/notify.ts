import type { NextApiRequest, NextApiResponse } from "next";
import {
  newBlogPublishedHtmlEmailTemplate,
  transporter,
} from "@/utils/mailTransport";

import User from "@/models/user";
import connectToDB from "@/configs/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(400).json({ message: "Invalid request" });

  const { title, description, link } = req.body;
  if (!title || !description || !link) {
    return res.status(400).json({ message: "invalid request" });
  }

  await connectToDB();

  const users = await User.find({});

  const emails = users.map((user) => user.email);

  if (!emails.length) {
    return res.status(400).json({ message: "No users found" });
  }

  transporter
    .sendMail({
      from: process.env.NEXT_PUBLIC_GMAIL_ID,
      to: emails,
      cc: process.env.NEXT_PUBLIC_GMAIL_ID,
      subject: "New Blog Published",
      html: newBlogPublishedHtmlEmailTemplate(req.body),
    })
    .then((info) => {
      res.status(200).json({ message: "Email sent successfully" });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Email failed to send", err: err.message });
    });
}
