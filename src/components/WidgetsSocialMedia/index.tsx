import Image from 'next/image'
import wpp from '../../../public/whh_whatsapp.png'
import youtube from '../../../public/youtube.png'
import spotify from '../../../public/spotify.png'
import insta from '../../../public/instagram.png'
import vakinha from '../../../public/vakinha.png'
import styled from 'styled-components'
import { Typography } from '@mui/material'


// group social media
const GroupSocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: 30px;
  img {
    width: 50px;
  }
  @media screen and (max-width: 900px) {
  img {
    width: 50px;
    margin-top: 80px;
  }

}
`

const Trigger = styled.div`
  display: flex; 
  flex-direction: row;
  align-items: center;
  p {
    opacity: 0; /* Inicia com opacidade 0 para ficar invisível */
    transition: opacity 0.5s; /* Define a duração da animação */
  }

  a:hover + p {
    opacity: 1; /* Quando o mouse passa em cima de .elemento1, .elemento2 recebe opacidade 1 e aparece com a animação */
  }

`

export default function WidgetsSocialMedia({ socialMedias }) {
  return (

    <GroupSocialMedia className='socialMedias'>


      <Trigger style={{ gap: 5 }}>
        <a href={socialMedias.ytUrl} >
          <Image src={youtube} alt="Picture of the author" />
        </a>
        <Typography fontFamily={"rubik,sans-serif"} fontSize="1.1rem" component="p" color="#ffffff"  >
          
          Youtube
        </Typography>
      </Trigger>
      <Trigger style={{ gap: 5 }}>
        <a href={socialMedias.instaUrl}>
          <Image src={insta} alt="Picture of the author" />
        </a>
        <Typography fontFamily={"rubik,sans-serif"} fontSize="1.1rem" component="p" color="#ffffff"  >
          
          Instagram
        </Typography>
      </Trigger>
      <Trigger style={{ gap: 5 }}>
        <a href={socialMedias.spotUrl}>
          <Image src={spotify} alt="Picture of the author" />
        </a>
        <Typography fontFamily={"rubik,sans-serif"} fontSize="1.1rem" component="p" color="#ffffff"  >
          
          Spotify
        </Typography>
      </Trigger>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',  gap: 5 }}>
        <a href={socialMedias.vkUrl}>
          <Image src={vakinha} alt="Picture of the author" />
        </a>
        <Typography fontFamily={"rubik,sans-serif"} fontSize="1.5rem" component="p" color="#ffffff" style={{ backgroundColor: "rgba(0, 0, 0, 0.418)", boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.637)" }}  >
          
          Contribua!
        </Typography>
      </div>
    </GroupSocialMedia>

  )
}
