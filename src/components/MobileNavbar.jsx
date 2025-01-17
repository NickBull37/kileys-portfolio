import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Box, Typography, AppBar, Toolbar, Container, IconButton, Menu, MenuItem } from '@mui/material';
import { ThemeToggle } from '../components/index';
import { kpLogoDark, kpLogoLight } from '../utils/constants';
import MenuIcon from '@mui/icons-material/Menu';
import colors from '../utils/colors';

const LogoContainer = styled(Box)(() => ({
    display: 'flex',
    padding: '0',
    marginLeft: '0.25rem',
    marginTop: '0.125rem',
    flexGrow: 1
}));

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
                // pb: '2.5rem'
            }}
        >
            <AppBar position="static" elevation={8}
                sx={{
                    backgroundColor: darkModeEnabled ? colors.darkModeNav : colors.lightModeNav,
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/* <Typography
                            className='feel-free'
                            sx={{
                                color: darkModeEnabled ? colors.white : colors.black,
                                flexGrow: 1,
                                fontSize: '1.875rem',
                                ml: 1
                            }}
                        >
                            KileyPrice.com
                        </Typography> */}
                        <LogoContainer>
                            <Link to="/">
                                <img
                                    src={darkModeEnabled ? kpLogoDark : kpLogoLight}
                                    height={40}
                                />
                            </Link>
                        </LogoContainer>
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
                                <MenuIcon
                                    sx={{
                                        color: darkModeEnabled ? colors.white : colors.black,
                                    }}
                                />
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
                                    <Link to="/">
                                        <Typography textAlign="center">
                                            Home
                                        </Typography>
                                    </Link>
                                </MenuItem>
                                <MenuItem key={'about'} onClick={handleCloseNavMenu}>
                                    <Link to="/about-me">
                                        <Typography textAlign="center">
                                            About Me
                                        </Typography>
                                    </Link>
                                </MenuItem>
                                <MenuItem key={'written-work'} onClick={handleCloseNavMenu}>
                                    <Link to="/written-work">
                                        <Typography textAlign="center">
                                            Written Work
                                        </Typography>
                                    </Link>
                                </MenuItem>
                                <MenuItem key={'contact'} onClick={handleCloseNavMenu}>
                                    <Link to="/contact">
                                        <Typography textAlign="center">
                                            Contact
                                        </Typography>
                                    </Link>
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