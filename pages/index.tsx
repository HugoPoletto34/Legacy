import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import logoLegacy from '../public/logo_legacy_2.png'
import styled from 'styled-components'
import Image from 'next/image'


const ContentImg = styled.div`
  width: 60%;
  margin: 0 auto;

`
const Filter = styled.div`
  background-image: linear-gradient(180deg, transparent, rgba(35, 35, 35, 0.68) 50.83%, #141414 100%);
  height: 100vh;
`

const Home: NextPage = () => {
  return (
    <Filter>
      <ContentImg>
        <Image src={logoLegacy} alt="Picture of the author" />
      </ContentImg>
    </Filter>
  )
}

export default Home
