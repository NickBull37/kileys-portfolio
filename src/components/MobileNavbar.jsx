import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Typography, Button, AppBar, Toolbar, Container, IconButton, Menu, MenuItem } from '@mui/material';
import { ThemeToggle } from '../components/index';
import MenuIcon from '@mui/icons-material/Menu';
import colors from '../utils/colors';

const MobileNavbar = ({ darkModeEnabled, setDarkModeEnabled }) => {

    const [anchorElNav, setAnchorElNav] = useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
    
    return (
        <Box
            sx={{
                display: { xs: 'flex', md: 'none' },
                pb: '2.5rem'
            }}
        >
            <AppBar position="static" elevation={8}
                sx={{
                    backgroundColor: '#080808'
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/* <Typography
                            className='feel-free'
                            sx={{
                                color: darkModeEnabled ? colors.white : colors.black,
                                flexGrow: 1,
                                fontSize: '2.75rem',
                                ml: 4
                            }}
                        >
                            KileyPrice.com
                        </Typography> */}
                        <Box
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                justifyContent: 'flex-end',
                                flexGrow: 1
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="menu icon"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
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
                                <MenuItem key={'home'} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        <a href='/'>Home</a>
                                    </Typography>
                                </MenuItem>
                                <MenuItem key={'about'} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        <a href='/about-me'>About Me</a>
                                    </Typography>
                                </MenuItem>
                                <MenuItem key={'written-work'} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        <a href='/written-work'>Written Work</a>
                                    </Typography>
                                </MenuItem>
                                <MenuItem key={'contact'} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        <a href='/contact'>Contact</a>
                                    </Typography>
                                </MenuItem>
                                <MenuItem key={'theme-toggle'}>
                                    <ThemeToggle darkModeEnabled={darkModeEnabled} setDarkModeEnabled={setDarkModeEnabled} />
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}

export default MobileNavbar;