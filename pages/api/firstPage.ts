// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'
import api from '../../src/utils/backend';
import { connectToDatabase } from '../../src/utils/mongodb'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let endpoints = [
    'about',
    'socialMedias',
    'photos',
    'videos/youtube',
    'videos/spotify',
  ];
  axios.all(endpoints.map((endpoint) => api.get(endpoint))).then(
    axios.spread((
      {data: aboutText},
      {data:socialMedias},
      {data: photos},
      {data: videosYT},
      {data: spotifyLegacy},
      ) => {
      res.status(200).json({ aboutText, socialMedias, photos, videosYT, spotifyLegacy });
    })
  ).catch(error => {
    res.json(error);
    res.status(405).end();
  });

}

