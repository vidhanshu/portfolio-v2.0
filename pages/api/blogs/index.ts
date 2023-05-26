import { NextApiRequest, NextApiResponse } from "next";

import Blog from "../../../models/blog";
import connectDB from "@/configs/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;
  try {
    await connectDB();

    if (method === "POST") {
      const blog = new Blog(body);
      await blog.save();
      return res.status(201).json({ success: true, data: blog });
    }

    return res.status(403).json({ success: false, error: "Forbidden" });
  } catch (err: any) {
    res.status(400).json({ success: false, error: err.message });
  }
}
