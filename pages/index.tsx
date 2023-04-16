import MainPage from "../src/components/MainPage";
import AboutPage from "../src/components/AboutPage";
import { NextPage } from "next";
import axios from "axios";
import api from "../src/utils/backend";
import PhotosPage from "../src/components/PhotosPage";
import fs from 'fs'
import path from 'path'
import CronogramaPage from "../src/components/CronogramaPage";
import VideosPage from "../src/components/VideosPage";

interface Items {
  items : {
    aboutText: string,
    socialMedias: {
      spotUrl: string,
      instaUrl: string,
      ytUrl: string
    },
    photos: {
      url: string,
    },
    videosYT: {
      url: string,
    },
    spotifyLegacy: string,
  }

}

const Home: NextPage<Items> = ({ items }) => {
  return (
      <>
        <MainPage socialMedias={items.socialMedias}/>
        <div style={{ margin: '0 auto', width: '94vw' }}>
          <AboutPage text={items.aboutText}/>
          <VideosPage videosYT={items.videosYT} spotifyLegacy={items.spotifyLegacy}/>
          
        </div>
        <CronogramaPage />
        <PhotosPage photos={items.photos} />
      </>

  )
}


Home.getInitialProps = async ({ req }) => {
  const res = await api.get('firstPage');
  const items = await res.data;


  return { items }
}

export default Home
