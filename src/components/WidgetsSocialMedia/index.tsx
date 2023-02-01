import Image from 'next/image'
import wpp from '../../../public/whh_whatsapp.png'
import youtube from '../../../public/youtube.png'
import spotify from '../../../public/spotify.png'
import insta from '../../../public/instagram.png'
import styled from 'styled-components'


// group social media
const GroupSocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export default function WidgetsSocialMedia({ socialMedias }) {
  return (

    <GroupSocialMedia className='socialMedias'>
      <a href={socialMedias.ytUrl}>
        <Image src={youtube} alt="Picture of the author" />
      </a>
      <a href={socialMedias.instaUrl}>
        <Image src={insta} alt="Picture of the author" />
      </a>
      <a href={socialMedias.spotUrl}>
        <Image src={spotify} alt="Picture of the author" />
      </a>
    </GroupSocialMedia>

  )
}
