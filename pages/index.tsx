import MainPage from "../src/components/MainPage";
import AboutPage from "../src/components/AboutPage";
import { NextPage } from "next";
import axios from "axios";
import api from "../src/utils/backend";

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
  }


}

const Home: NextPage<Items> = ({ items }) => {
  return (
      <>
        <MainPage socialMedias={items.socialMedias}/>
        <AboutPage text={items.about.about_text}/>
      </>

  )
}


Home.getInitialProps = async ({ req }) => {
  const res = await api.get('firstPage');
  const items = await res.data;

  return { items }
}

export default Home
