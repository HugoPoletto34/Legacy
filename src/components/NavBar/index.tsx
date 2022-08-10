import styled from 'styled-components'
import React from 'react'
import Image from 'next/image'
import { Box, IconButton, Link, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import logoLegacy from '../../../public/legacy_logo.png'
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';

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



export default function NavBar({ colorNav }) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const pages = [
    {label: 'Discografia', href: '#videos_page'}, 
    {label: 'Agenda 2022', href: '#cronograma_page'}, 
    {label: 'Fotos', href: '#photos_page'}, 
  ];

  return (
      <Cont>
        <div className={colorNav ? 'ativaCor' : 'inativaCor'}>
          <Toolbar disableGutters>
            

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                
              >
                <MenuIcon color='primary'/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                    <Link href={page.href}>
                      {page.label}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Link href="/" sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }} >
              <Image width={150} height={90} src={logoLegacy} alt="Picture of the author" />
            </Link>
          

        </Toolbar>
        </div>
      </Cont>
  )
}
