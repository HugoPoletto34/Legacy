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
    about: {
      about_text: string,
      _id?: string
    }
    socialMedias: {
      wpp_link: string,
      insta_link: string,
      gmail_link: string
    }
    photos: {
      photo_url: string,
    }
  }

}

const Home: NextPage<Items> = ({ items }) => {
  // (items)
  return (
      <>
        <MainPage socialMedias={items.socialMedias}/>
        {/* <AboutPage text={items.about.about_text}/> */}
        <VideosPage />
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
