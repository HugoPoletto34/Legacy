import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import imgAbout from '../../../public/image_about.png'
import styled from 'styled-components'
import Image from 'next/image'
import WidgetsSocialMedia from '../WidgetsSocialMedia'
import { Typography } from '@mui/material'

const ContainerImage = styled.div`
    margin: auto 0;

`

const Container = styled.div`
  padding-top: 115px;
  height: 100vh;
  display: flex;
  flex-direction: row;
  .container-image {
    width: 30%;
    
  }

  .text-about {
    width: 90%;
    margin: auto 76px;
    line-height: 38,43px;
  }

`

export default function AboutPage({text}) {
  return (
    <Container id='about_page'>
      <ContainerImage className='container-image'>
        <Image src={imgAbout} alt="Picture of the author" />
      </ContainerImage>
      <div className='text-about'>
        <Typography fontFamily={"century-gothic"}  variant="body1" component="h3" fontSize={48.77} style={{marginBottom: 62}}>
          Sobre
        </Typography>
        <Typography fontFamily={"century-gothic"} variant="body1" component="p" fontSize={24}>
          {text}
        </Typography>
      </div>

      
    </Container>
  )
}
