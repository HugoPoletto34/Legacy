import { Typography } from '@mui/material'
import Carousel from 'react-multi-carousel';
import React from 'react'
import styled from 'styled-components'
import HugoImage from '../../../public/Images/membros/Hugo.jpg'
import SamuelImage from '../../../public/Images/membros/Samuel.jpg'
import Cantor from '../../../public/Images/membros/Cantor.jpg'
import CintiaCanto from '../../../public/Images/membros/CintiaCanto.jpg'
import EscaletaM from '../../../public/Images/membros/EscaletaM.jpg'
import GabrielPiano from '../../../public/Images/membros/GabrielPiano.jpg'
import IrmaSamuel from '../../../public/Images/membros/IrmaSamuel.jpg'
import JosephCanto from '../../../public/Images/membros/JosephCanto.jpg'
import JulianeCanto from '../../../public/Images/membros/JulianeCanto.jpg'
import NathaliaFlauta from '../../../public/Images/membros/NathaliaFlauta.jpg'
import Paulo from '../../../public/Images/membros/Paulo.jpg'
import Saxofone from '../../../public/Images/membros/Saxofone.jpg'
import VanessaViolino from '../../../public/Images/membros/VanessaViolino.jpg'
import saxofone2 from '../../../public/Images/membros/saxofone2.jpg'
import Robson from '../../../public/Images/membros/robson.jpg'
import Image from 'next/dist/client/image'
import 'react-multi-carousel/lib/styles.css';


const Container = styled.div`

`

const StyledImage = styled(Image)`
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  transition: all 0.2s ease-in-out;
  object-fit: cover;
  object-position: center;
  /* margin: 10px; */
  &:hover {
    transform: scale(1.05);
  }
`
const Grade = styled.div`
  /* display: flex;
  flex-direction: row;
  grid-gap: 5px;
  flex-wrap: wrap;
  justify-content: space-evenly;

  @media screen and (max-width: 900px)  {
    div {
      width: 100vw;
    }
  } */
`

const Divider = styled.hr`
  border-top: 1px solid #d4d4d4;
  margin: 5px;
`

const Content = styled.div`
  /* display: flex;
  flex-direction: column;
  grid-gap: 5px; */
  margin: 6px;
  /* width: 200px; */
  /* border-radius: 10px; */
  padding: 10px;
  background-color: #ffffff;
  /* box-shadow: 0 0 10px rgba(0,0,0,0.5); */

`
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;

`

const membros = [
  {
    "imagePath": HugoImage,
    "name": "Hugo Poletto",
    "instrument": "Flauta Transversal",
    "frase": "Hugo é um talentoso flautista que tem uma paixão pela música e especialmente pela flauta transversal.",
  },
  {
    "imagePath": SamuelImage,
    "name": "Samuel Fillipe",
    "instrument": "Piano",
    "frase": "Samuel Filipe é um pianista excepcional e líder talentoso que traz uma grande energia e criatividade para o grupo.",
  },
  {
    "imagePath": Cantor,
    "name": "josé Maria",
    "instrument": "Cantor",
    "frase": "Música. Uma dádiva divina."

  },
  {
    "imagePath": VanessaViolino,
    "name": "Vanessa Barros",
    "instrument": "Violino",
    "frase": "Acredita no poder que a música tem de transformar  sentimentos e eternizar momentos."
  },
  {
    "imagePath": NathaliaFlauta,
    "name": "Nathalia Thais",
    "instrument": "Flauta transversal",
    "frase": "A Nathália cresceu participando de projetos de música e desenvolvendo seu talento para a obra do Senhor."
  },
  {
    "imagePath": CintiaCanto,
    "name": "Cintia Neves",
    "instrument": "Cantora",
    "frase": "Através da música posso me expressar e compartilhar o maior amor que o mundo já conheceu, Jesus"
  },
  {
    "imagePath": EscaletaM,
    "name": "Luiza Araújo",
    "instrument": "Cantora",
    "frase": "Ter sempre um cântico no coração!!"
  },
  {
    "imagePath": GabrielPiano,
    "name": "Gabriel Candido",
    "instrument": "Piano",
    "frase": "Gabriel é um jovem tecladista que a cada dia tem aprendido mais a desenvolver o seu talento e amor pela música."
  },
  {
    "imagePath": Paulo,
    "name": "Paulo Souza",
    "instrument": "Saxofone",
    "frase": "Aprendendo sempre, simples assim."
  },
  {
    "imagePath": IrmaSamuel,
    "name": "Tarcila Adelina",
    "instrument": "Cantora",
    "frase": "Entendo louvor a Deus como uma forma de nos aproximarem DEle, e isso não tem relação com quão belo soe para pessoas, mas, sim com a entrega que fazemos a ELE"
  },
  {
    "imagePath": JosephCanto,
    "name": "Joseph Patrick",
    "instrument": "Cantor",
    "frase": "Joseph é um rapaz que ama música, estar com amigos e adorar a Deus"
  },
  {
    "imagePath": JulianeCanto,
    "name": "Juliane Aline",
    "instrument": "Cantora",
    "frase": "Não importa a minha capacidade e sim a minha resposta a capacidade de Deus"
  },
  {
    "imagePath": saxofone2,
    "name": "Rossi Soares",
    "instrument": "Saxofone",
    "frase": "Não são apenas ruídos, são sopros que vibram almas."
  },
  {
    "imagePath": Saxofone,
    "name": "Dalton Ávila",
    "instrument": "Saxofone",
    "frase": "Dalton é um saxofonista que usa seus talentos pra Louvar ao Senhor."
  },
  {
    "imagePath": Robson,
    "name": "Robson Wagner",
    "instrument": "Saxofone",
    "frase": "Enquanto existir um fôlego em mim, sempre haverá um canto para Ti."
  },
]

export default function MembrosPage({}) {
  return (
    <Container id='membros_page'>
      <Typography fontFamily={"century-gothic"}  variant="h3" component="h3"  style={{margin: 10}}>
          Membros
      </Typography>
      <Grade>
      <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={7000}
      centerMode={false}
      infinite={true}
      
      className=""
      autoPlay={true}
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024
          },
          items: 3,
          partialVisibilityGutter: 40
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0
          },
          items: 1,
          partialVisibilityGutter: 30
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464
          },
          items: 2,
          partialVisibilityGutter: 30
        }
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      
      {membros.map((membro) => (
        <Content >
        <ImageContainer>
          <StyledImage src={membro.imagePath} width={200} height={200}/>
        </ImageContainer>
        <Typography fontFamily={"century-gothic"}  variant="h5" component="h5" textAlign={"center"}  style={{marginBottom: 0}}>
          {membro.name}
        </Typography>
        <Typography fontFamily={"century-gothic"}  variant="subtitle1" component="h6"  textAlign={"center"} style={{marginBottom: 2}}>
          {membro.instrument}
        </Typography>
        <Divider/>
        <Typography fontFamily={"century-gothic"}  variant="body1" component="p" textAlign={"center"}>
          {membro.frase}
        </Typography>
      </Content>
      ))}

    </Carousel>

        
      </Grade>
      

    </Container>

  )
}
