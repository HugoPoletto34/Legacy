import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import imgAbout from '../../../public/SamuelPiano.jpg'
import Image from 'next/image'
import WidgetsSocialMedia from '../WidgetsSocialMedia'
import { Typography } from '@mui/material'
import style from './style.module.css'
import styled from 'styled-components'

const ContainerVideos = styled.div`
    width: 100%;
    display: flex;
    grid-gap: 5px;
    flex-direction: row; 
    flex-wrap: nowrap; 
    overflow-y: scroll;

`

const Container = styled.div`
  .text-about {

    padding: 10px;
  }



`

export default function VideosPage() {
  return (
    <Container id='videos_page'>
      <Typography fontFamily={"century-gothic"}  variant="h3" component="h3"  style={{margin: 10}}>
          Discografia
      </Typography>
      <ContainerVideos>
        <iframe   
        height="300" 
        src="https://www.youtube.com/embed/ZU3QU1umhMQ" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        ></iframe>
        <iframe   
        height="300"
        src="https://www.youtube.com/embed/EYUOWX1qNmA" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        ></iframe>
      </ContainerVideos>
      <iframe style={{ marginTop: 5 }} src="https://open.spotify.com/embed/artist/0c38dMhgH8v5w3e4PiiLOO?utm_source=generator" width="100%" height="250px" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
    </Container>

  )
}
