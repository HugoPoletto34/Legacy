import styled from 'styled-components'
import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import { Button, Link } from '@mui/material'
import logoLegacy from '../../../public/legacy_logo.png'

const Cont = styled.div`
  position: fixed;
  z-index: 2;
  width: 100vw;
  
  

  .ativaCor {
    transition: all ease 0.3s;
    background-image: linear-gradient(0deg , transparent, rgba(0, 0, 0, 0.68) 20.83%, #000000 70%);
  }

  .inativaCor {
    background-color: transparent;
    transition: all ease 0.3s;
  }
`

const Wrapper = styled.header`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 30px 15px 30px;

`

const GroupNavBar = styled.div`
  a {
    margin-right: 50px;
    color: white;
    font-style: normal;
    font-weight: normal;
    font-size: 24pt;
    line-height: 57px;
    text-decoration: none;
    text-align: center;
  }
`

// preventDefault

export default function NavBar({ colorNav }) {

  return (
    <Cont>
      <Wrapper className={colorNav ? 'ativaCor' : 'inativaCor'}>
        <Link href="/" >
          <Image width={150} height={90} src={logoLegacy} alt="Picture of the author" />
        </Link>
        <GroupNavBar>
          <Link href="#about_page">
            Sobre
          </Link>
          <Link href="#photos_page">
            Fotos
          </Link>
          <Link href="#events_page">
            Eventos
          </Link>
          <Link href="#contacts_page">
            Contato
          </Link>
          <Link href="#donations_page">
            Doações
          </Link>
        </GroupNavBar>
      </Wrapper>
    </Cont>
  )
}
