import type { NextApiRequest, NextApiResponse } from "next";
import {
  contactFormHtmlEmailTemplate,
  transporter,
} from "@/utils/mailTransport";

import { EMAIL_REGEX } from "@/constants";
import User from "@/models/user";
import connectToDB from "@/configs/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(400).json({ message: "Invalid request" });

  const { name, email, message } = req.body;

  if (!name || !email || !message || !EMAIL_REGEX.test(email)) {
    return res.status(400).json({ message: "Invalid form submission" });
  }

  // connecting to db
  await connectToDB();

  const doesAlreadyExists = await User.findOne({ email });

  if (!doesAlreadyExists) {
    const user = new User(req.body);
    await user.save();
  }

  // sending email
  return transporter
    .sendMail({
      from: process.env.NEXT_PUBLIC_GMAIL_ID,
      to: email,
      cc: process.env.NEXT_PUBLIC_GMAIL_ID,
      subject: "Contact Form Submission",
      html: contactFormHtmlEmailTemplate(req.body),
    })
    .then((info) => {
      return res.status(200).json({ message: "Email sent successfully" });
    })
    .catch((err) => {
      return res.status(500).json({ message: "Email failed to send" });
    });
}
