import styled from 'styled-components'
import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import { Button, Link } from '@mui/material'
import logoLegacy from '../../../public/legacy_logo.png'

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  background-image: linear-gradient(to bottom, black, black, transparent);
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 30px 0px 30px;
  img {
    height: 100px;
  }

`

const GroupNavBar = styled.div`
  /* width: 50%; */
  a {
    margin-right: 50px;
    color: white;
    font-family: Century Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 24pt;
    line-height: 57px;
    text-align: center;
  }
`
export default function NavBar() {

  return (
    <Wrapper>
      <Image src={logoLegacy} alt="Picture of the author" />
      <GroupNavBar>
        <a href={'/'}>
          Sobre
        </a>
        <a href={'/'}>
          Fotos
        </a>
        <a href={'/'}>
          Eventos
        </a>
        <a href={'/'}>
          Contato
        </a>
        <a href={'/'}>
          Doações
        </a>
      </GroupNavBar>

    </Wrapper>
  )
}
