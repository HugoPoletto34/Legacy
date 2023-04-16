// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../db';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) { 
  const data = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLAs1mvxndrUhazJ-yCSYjthwePy4b8DzZ&maxResults=20&key=${process.env.YOUTUBE_API_KEY}`);
  const videos = data.data.items.map((item: any) => {
    const result = 'https://www.youtube.com/embed/' + item.snippet.resourceId.videoId
    return {url : result};
  })
  // inverter array
  videos.reverse();
  res.status(200).json(videos)
}
