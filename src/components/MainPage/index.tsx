import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import logoLegacy from '../../../public/logo_legacy_2.png'
import fundo from '../../../public/larisa-birta-unsplash.png'
import styled from 'styled-components'
import Image from 'next/image'
import WidgetsSocialMedia from '../WidgetsSocialMedia'

const Container = styled.div`
  padding-top: 115px;
  background-image: linear-gradient(0deg , transparent, rgba(22, 22, 22, 0.68) 50.83%, #000000 100%),
  url(larisa-birta-unsplash.png);
  height: 100vh;
  background-position: center;
  background-size: cover;
  .socialMedias {
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    margin: 30px;
  }


`
const LegacyImage = styled.div`
  position: absolute;
  top: 50%;  /* position the top  edge of the element at the middle of the parent */
  left: 50%; /* position the left edge of the element at the middle of the parent */

  transform: translate(-50%, -50%);
`

export default function MainPage({ socialMedias }) {
  return (
    <Container id='main_page'>
      <LegacyImage>
        <Image src={logoLegacy} alt="Picture of the author" />
      </LegacyImage>
      <WidgetsSocialMedia socialMedias={socialMedias}/>
    </Container>
  )
}