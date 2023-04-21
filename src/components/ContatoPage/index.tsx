import { Typography } from '@mui/material'
import styled from 'styled-components'


const Container = styled.div`

  background-color: #1b1b1b;
  color: white;
  /* display: flex;
  margin-top: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; */
  padding: 10px;
  margin-top: 5px;

`

const Content = styled.div`
  background-color: #272727;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5px;
  border-radius: 10px;
  padding: 25px;
  /* width: 50%; */
  @media screen and (max-width: 900px)  {
    margin: 10px;
    /* width: 100vw; */
  }
  
`

const Grade = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap: 5px;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: 900px)  {
    div {
      width: 100vw;
    }
    justify-content: space-evenly;
  }

`

const Divider = styled.hr`
  border-top: 0.5px solid #000000;
  margin: 5px;
`

export default function ContatoPage() {
  return (

    <Container id='contato_page'>
      <Typography fontFamily={"century-gothic"}  variant="h4" component="h4" textAlign={"center"} style={{margin: 10}}>
        Contato
      <Divider/>
      </Typography>
      <Grade>
        <Content>
          {/* <Typography fontFamily={"century-gothic"}  variant="h5" component="h5"  style={{margin: 10}}>
              Contato
          </Typography> */}
          <Typography fontFamily={"century-gothic"}  variant="h6" component="h5" textAlign={"center"} style={{margin: 10}}>
              Agenda para eventos
          </Typography>
          <Divider/>
          <Typography fontFamily={"century-gothic"}  variant="body2" component="p" textAlign={"center"} style={{margin: 10}}>
              (31) 98884-6443 - Priscila
          </Typography>
        </Content>
        <Content>

          <Typography fontFamily={"century-gothic"}  variant="h6" component="h5" textAlign={"center"} style={{margin: 10}}>
            Contato geral
          </Typography>
          <Divider/>
          <Typography fontFamily={"century-gothic"}  variant="body2" component="p" textAlign={"center"} style={{margin: 10}}>
              legacyinstrumental@gmail.com
          </Typography>
        </Content>
      </Grade>
        <Typography fontFamily={"century-gothic"} textAlign={"center"} style={{margin: 10}}>
          © 2023 Legacy Instrumental | Todos os direitos reservados
        </Typography>

      
    </Container>

  )
}
