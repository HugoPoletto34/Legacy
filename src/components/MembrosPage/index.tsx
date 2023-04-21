import { Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import HugoImage from '../../../public/Images/membros/Hugo.jpg'
import SamuelImage from '../../../public/Images/membros/Samuel.jpg'
import YngridImage from '../../../public/Images/membros/Yngrid.jpg'
import Image from 'next/dist/client/image'


const Container = styled.div`

`

const StyledImage = styled(Image)`
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  transition: all 0.2s ease-in-out;
  object-fit: cover;
  object-position: center;
  margin: 10px;
  &:hover {
    transform: scale(1.05);
  }
`
const Grade = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap: 5px;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const Divider = styled.hr`
  border-top: 1px solid #d4d4d4;
  margin: 5px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 5px;
  margin: 6px;
  width: 200px;
  border-radius: 10px;
  padding: 10px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`
export default function MembrosPage({}) {
  return (
    <Container id='membros_page'>
      <Typography fontFamily={"century-gothic"}  variant="h3" component="h3"  style={{margin: 10}}>
          Membros
      </Typography>
      <Grade>
        <Content >
          <div>
            <StyledImage src={SamuelImage}  width={200} height={200}/>
          </div>
          <Typography fontFamily={"century-gothic"}  variant="h5" component="h5" textAlign={"center"}  style={{marginBottom: 0}}>
            Samuel Fillipe
          </Typography>
          <Typography fontFamily={"century-gothic"}  variant="subtitle1" component="h6"  textAlign={"center"} style={{marginBottom: 2}}>
            Piano
          </Typography>
          <Divider/>
          <Typography fontFamily={"century-gothic"}  variant="body1" component="p" textAlign={"center"}>
            Samuel Fillipe é um pianista excepcional e líder talentoso que traz uma grande energia e criatividade para o grupo.
          </Typography>
        </Content>
        <Content>
          <div>
            <StyledImage src={HugoImage} width={200} height={200}/>
          </div>
          <Typography fontFamily={"century-gothic"}  variant="h5" component="h5" textAlign={"center"}  style={{marginBottom: 0}}>
            Hugo Poletto
          </Typography>
          <Typography fontFamily={"century-gothic"}  variant="subtitle1" component="h6"  textAlign={"center"} style={{marginBottom: 2}}>
            Flauta Transversal
          </Typography>
          <Divider/>
          <Typography fontFamily={"century-gothic"}  variant="body1" component="p" textAlign={"center"}>
          Hugo é um talentoso flautista que tem uma paixão pela música e especialmente pela flauta transversal.
          </Typography>
        </Content>
        <Content>
          <div>
            <StyledImage src={YngridImage}width={200} height={200}/>
          </div>
          <Typography fontFamily={"century-gothic"}  variant="h5" component="h5" textAlign={"center"}  style={{marginBottom: 0}}>
            Yngrid Rebeca
          </Typography>
          <Typography fontFamily={"century-gothic"}  variant="subtitle1" component="h6"  textAlign={"center"} style={{marginBottom: 2}}>
            Violoncelo
          </Typography>
          <Divider/>
          <Typography fontFamily={"century-gothic"}  variant="body1" component="p" textAlign={"center"}>
            Yngrid é uma violoncelista talentosa e apaixonada que traz uma qualidade única e distinta para o som da banda.
          </Typography>
        </Content>
        
      </Grade>
      

    </Container>

  )
}
