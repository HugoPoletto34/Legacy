// import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from 'styled-components'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import WithStyles from "@mui/material/styles/withStyles";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

const Container = styled.div`

  .text-about {
    line-height: 38,43px;
    padding: 10px;
  }

  /* @media screen and (max-width: 900px) {
    padding-top: 0px;
  } */

`
function createData(
  local: string,
  data: string,
  horario: string,
) {
  return { local, data, horario };
}

const rows = [
  createData('IASD São Benedito ', '11/11', 'Manhã'),
  createData('IASD São José da Lapa', '09/12', 'Manhã'),  
];
// 15/10 sab tarde (16 horas) - Ensaio Cantata de Natal

// 05/11 sab tarde (16 horas) - Ensaio Cantata de Natal

// 26/11 sab tarde (16 horas) - Ensaio Cantata de Natal

// 03/12 sab tarde (16 horas)
// Ensaio Cantata de Natal

// 09/12 sex 19 horas - Ensaio final cantata de natal 
 
// 10/12 sab 19 horas. TEATRO FRANCISCO NUNES

// 17/12 sábado 19 horas Cantata de Natal - IASD Menezes
export default function CronogramaPage() {
  return (
    <Container id='cronograma_page'>
      <Typography fontFamily={"century-gothic"}  variant="h3" component="h3"  style={{margin: 10}}>
          Agenda 2022
      </Typography>

      <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table" style={{ marginTop: 5 }}>
        <TableHead>
          <TableRow>
            <TableCell>Local</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Horário</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.local}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.local}
              </TableCell>
              <TableCell>{row.data}</TableCell>
              <TableCell>{row.horario}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Typography fontFamily={"century-gothic"}  variant="subtitle1" component="h5"  style={{margin: 10, color: 'gray', textAlign: 'right', fontSize: '10pt'}}>
          última atualização: 05/08
      </Typography>
  </Container>
  )
}

