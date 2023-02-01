// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) { 
  const data = db.videosYT;
  res.status(200).json(data)
}
