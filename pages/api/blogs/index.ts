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
    if (method === "GET") {
      const blogs = await Blog.find(
        {},
        {
          title: 1,
          description: 1,
          image: 1,
          subtitle: 1,
          time_to_read: 1,
          tags: 1,
          createdAt: 1,
        }
      );
      return res.status(200).json({ success: true, data: blogs });
    }
  } catch (err: any) {
    res.status(400).json({ success: false, error: err.message });
  }
}
