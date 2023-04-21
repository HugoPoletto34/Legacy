import styled from 'styled-components'
import React from 'react'
import Image from 'next/image'
import { Box, Button, IconButton, Link, Menu, MenuItem, Modal, Toolbar, Typography } from '@mui/material'
import logoLegacy from '../../../public/legacy_logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Cont = styled.div`
  position: fixed;
  z-index: 2;
  width: 100vw;
  
  

  .ativaCor {
    height: 80px;
    transition: all ease 0.6s;
    background-image: linear-gradient(0deg , transparent, rgba(0, 0, 0, 0.68) 20.83%, #000000 70%);
  }

  .inativaCor {
    height: 80px;
    background-color: transparent;
    transition: all ease 0.6s;
  }
`



export default function NavBar({ colorNav }) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const pages = [
    {label: 'SOBRE', href: '#about_page'}, 
    {label: 'DISCOGRAFIA', href: '#videos_page'}, 
    {label: 'AGENDA', href: '#cronograma_page'}, 
  ];

  return (
      <Cont>
        <div className={colorNav ? 'ativaCor' : 'inativaCor'}>
          <Toolbar disableGutters >
          
            
            <Modal
            
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: "#020202a4"
              }}
              
            >
              <Box style={{  }} >

                <Typography id="modal-modal-title">
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    sx={{ mr: 0, position: 'absolute', top: 20, right: 3 }}
                    onClick={handleCloseNavMenu}
                  >
                    <CloseIcon sx={{ color: 'white' }}/>
                </IconButton>
                </Typography>
                <div id='modal-modal-description' >
                  <div style={{ padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', listStyle: 'none', fontSize: 40, fontFamily:"brandon-grotesque,-apple-system,BlinkMacSystemFont,helvetica neue,Arial,noto sans,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol,noto color emoji" }}>
                    {pages.map((page) => (
                      <Link key={page.label} href={page.href} style={{ color: 'white', textDecoration: 'none', padding: '15px' }} onClick={handleCloseNavMenu}>
                        {page.label}
                      </Link>
                      ))}
                  </div>
                  
                </div>
                
              </Box>
            </Modal>
              <Link href="/" sx={{ m: '0 auto' }}>
                <Image height={90} width={130} src={logoLegacy} alt="Picture of the author" />
              </Link>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                sx={{ mr: 0, position: 'absolute', top: 20, left: 3}}
                onClick={handleOpenNavMenu}
              >
                <MenuIcon sx={{ color: 'white' }}/>
              </IconButton>

          

        </Toolbar>
        </div>
      </Cont>
  )
}
