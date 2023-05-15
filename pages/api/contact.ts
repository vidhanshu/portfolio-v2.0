import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message } = req.body;
  console.log(req.body);
  res.status(200).json({ name, email, message });
}
