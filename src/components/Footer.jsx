import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';
import colors from '../utils/colors';

const NavBtn = styled(Button)(() => ({
    color: '#fff',
}));

const Footer = ({ darkModeEnabled }) => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            gap={{ xs: 3, md: 8 }}
            sx={{
                flexDirection: { xs: 'column', md: 'row' },
                py: { xs: '2rem', md: '0.75rem' },
                bgcolor: darkModeEnabled ? colors.footerDarkBg : colors.lightModeBase,
                borderTop: '1px solid #000',
            }}
        >
            <NavBtn
                sx={{
                    color: darkModeEnabled ? colors.white : colors.black,
                }}
            >
                <Link to="/">
                    Home
                </Link>
            </NavBtn>
            <NavBtn
                sx={{
                    color: darkModeEnabled ? colors.white : colors.black,
                }}
            >
                <Link to="/about-me">
                    About Me
                </Link>
            </NavBtn>
            <NavBtn
                sx={{
                    color: darkModeEnabled ? colors.white : colors.black,
                }}
            >
                <Link to="/written-work">
                    Written Work
                </Link>
            </NavBtn>
            <NavBtn
                sx={{
                    color: darkModeEnabled ? colors.white : colors.black,
                }}
            >
                <Link to="/contact">
                    Contact
                </Link>
            </NavBtn>
        </Box>
    );
}

export default Footer;