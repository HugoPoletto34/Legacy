import Image from 'next/image'
import wpp from '../../../public/whh_whatsapp.png'
import insta from '../../../public/bx_bxl-instagram-alt.png'
import email from '../../../public/eva_email-fill.png'
import styled from 'styled-components'



// group buttons with social media
const GroupButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`

// group social media
const GroupSocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  a {
    margin-right: 30px;
  }
`

export default function WidgetsSocialMedia({ socialMedias }) {
  return (

    <GroupSocialMedia className='socialMedias'>
      <a href={socialMedias.wpp_link}>
        <Image src={wpp} alt="Picture of the author" />
      </a>
      <a href={socialMedias.insta_link}>
        <Image src={insta} alt="Picture of the author" />
      </a>
      <a href={socialMedias.gmail_link}>
        <Image src={email} alt="Picture of the author" />
      </a>
    </GroupSocialMedia>

  )
}
