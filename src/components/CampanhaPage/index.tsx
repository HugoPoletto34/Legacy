import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import imgAbout from '../../../public/SamuelPiano.jpg'
import imgAjude from '../../../public/Images/ajude-legacy.png'
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

export default function CampanhaPage() {

  return (
    <Container id='campanha_page'>

      <div className='text-about'  >

        <Typography fontFamily={"century-gothic"} variant="h3" component="h3" style={{ margin: 10 }}>
          Ajude-nos a continuar!
        </Typography>


        <Typography fontFamily={"rubik,sans-serif"} fontSize="1.4rem" component="p" textAlign={"justify"} color="#384248" style={{ margin: 20 }} >

          Nosso objetivo é arrecadar fundos para a compra de
          materiais que contribuam para a melhoria
          das apresentações. Tem como prioridade
          uma <strong>mesa de som</strong> e a partir disso adquirir
          outros materiais que contribuam para
          nosso crescimento.
        </Typography>
        <Typography fontFamily={"century-gothic"} variant="h5" component="h5" style={{ margin: 10 }}>
          Como posso contribuir?

        </Typography>
        <Typography fontFamily={"rubik,sans-serif"} fontSize="1.4rem" component="p" textAlign={"justify"} color="#384248" style={{ margin: 20 }} >


          <ul>
            <li><b>CONTRIBUIÇÃO DIRETA - PIX</b></li>
            Chave PIX: <u>campanhalegacy@gmail.com</u><br />
            OBS: A doação constará no nome do tesoureiro responsável: <strong>Robson Wagner Silva</strong>
            <li><b>Vakinha</b></li>
            <a href="https://www.vakinha.com.br/3515444">https://www.vakinha.com.br/3515444</a><br />
            chave PIX: <u>3515444@vakinha.com.br</u>
            <li><b>Repasse para um membro do Legacy</b></li>
            Nossos membros estao autorizados a receber as contribuições.
          </ul>


        </Typography>
        <Typography fontFamily={"century-gothic"} variant="h5" component="h5" style={{ margin: 10 }}>
          Resultado da campanha
        </Typography>
        <Typography fontFamily={"rubik,sans-serif"} fontSize="1.4rem" component="p" textAlign={"justify"} color="#384248" style={{ margin: 20 }} >

          A partir do <u>dia 08 de dezembro</u>, divulgaremos em nosso site
          e redes sociais oficiais o resultado da campanha para fins de
          transparência e para agradecer aos doadores que tanto nos
          ajudaram. Como parte do nosso agradecimento os doadores
          receberão uma homenagem em forma de recital, onde
          também será lançado nosso primeiro álbum: <b>ECOS DE UM
          LEGADO</b> e receberão um <b>ingresso gratuito</b> para assistir
          este concerto incrível que está sendo preparado com muito
          carinho, dedicação e empenho por nós.
        </Typography>

        <div style={{ margin: "0 auto", width: "50%" }}>
          <Image src={imgAjude} alt="Picture of the author" />

        </div>

      </div>


    </Container>

  )
}
