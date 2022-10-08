// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

const allPosts = async (req: NextApiRequest, res: NextApiResponse) => {
  const posts = await prisma.post.findMany()
  res.status(200).json(posts);
};

export default allPosts;
