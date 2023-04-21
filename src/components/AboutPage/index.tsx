import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import imgAbout from '../../../public/SamuelPiano.jpg'
import grupoAbout from '../../../public/GrupoSobre.png'
import styled from 'styled-components'
import Image from 'next/image'
import WidgetsSocialMedia from '../WidgetsSocialMedia'
import { Typography } from '@mui/material'


const Container = styled.div`
  .text-about {

    padding: 10px;
  }



`
const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const ImageContent = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 10px;


`

export default function AboutPage({text}) {

  return (
    <Container id='about_page'>
      
      <div className='text-about'>
        
        <Typography fontFamily={"century-gothic"}  variant="h3" component="h3"  style={{margin: 10}}>
          Sobre
        </Typography>
        <ImagesContainer>
          <ImageContent >

            <Image src={imgAbout} alt="Picture of the author" />
            <Typography fontFamily={"century-gothic"}  variant="body2" textAlign={"center"} component="h3"  style={{margin: 10}}>
              Samuel Filipe - Fundador e atual maestro do grupo Legacy Instrumental
            </Typography>
          </ImageContent>
          <ImageContent >
            <Image src={grupoAbout} alt="Picture of the author" />
            <Typography fontFamily={"century-gothic"}  variant="body2" textAlign={"center"} component="h3"  style={{margin: 10}}>
              Grupo Legacy Instrumental
            </Typography>
          </ImageContent>
        </ImagesContainer>

        <Typography fontFamily={"rubik,sans-serif"} fontSize="1.1rem" component="p" textAlign={"justify"} color="#384248" >
        
          <p dangerouslySetInnerHTML={{ __html: text }}></p>
        </Typography>
      </div>

      
    </Container>

  )
}
