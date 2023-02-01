import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import imgAbout from '../../../public/SamuelPiano.jpg'
import styled from 'styled-components'
import Image from 'next/image'
import WidgetsSocialMedia from '../WidgetsSocialMedia'
import { Typography } from '@mui/material'


const ContainerImage = styled.div`
    

`

const Container = styled.div`
  .text-about {

    padding: 10px;
  }



`

export default function AboutPage({text}) {
  function data() {
    return {
        valor: 'minha string com <b>bold</b>'
    }
}
  return (
    <Container id='about_page'>
      
      <div className='text-about'>
        
        <Typography fontFamily={"century-gothic"}  variant="h3" component="h3"  style={{margin: 10}}>
          Sobre
        </Typography>
        <ContainerImage className='container-image'>
        <Image src={imgAbout} alt="Picture of the author" />
      </ContainerImage>
        <Typography fontFamily={"rubik,sans-serif"} fontSize="1.1rem" component="p" color="#384248" >
        
          <p dangerouslySetInnerHTML={{ __html: text }}></p>
        </Typography>
      </div>

      
    </Container>

  )
}
