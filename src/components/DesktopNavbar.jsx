import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import { ThemeToggle } from '../components/index';
import colors from '../utils/colors';

const DesktopNavbar = ({ darkModeEnabled, setDarkModeEnabled }) => {
    return (
        <Box
            justifyContent="flex-end"
            alignItems="center"
            gap={2}
            sx={{
                display: { xs: 'none', md: 'flex' },
                pr: 1,
                bgcolor: darkModeEnabled ? colors.navBarDarkBg : colors.lightModeBase,
                height: '60px',
                // offset-x offset-y blur-radius spread-radius color
                boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.6), 0px 4px 5px 0px rgba(0, 0, 0, 0.35), 0px 1px 10px 0px rgba(0, 0, 0, 0.50)',
            }}
        >
            <Typography
                className='feel-free'
                sx={{
                    color: darkModeEnabled ? colors.white : colors.black,
                    flexGrow: 1,
                    fontSize: '2rem',
                    ml: 4
                }}
            >
                KileyPrice.com
            </Typography>
            <Button
                sx={{
                    color: darkModeEnabled ? colors.white : colors.black,
                }}
            >
                <Link to="/">
                    Home
                </Link>
            </Button>

            <Button
                sx={{
                    color: darkModeEnabled ? colors.white : colors.black,
                }}
            >
                <Link to="/about-me">
                    About Me
                </Link>
            </Button>

            <Button
                sx={{
                    color: darkModeEnabled ? colors.white : colors.black,
                }}
            >
                <Link to="/written-work">
                    Written Work
                </Link>
            </Button>

            <Button
                sx={{
                    color: darkModeEnabled ? colors.white : colors.black,
                }}
            >
                <Link to="/contact">
                    Contact
                </Link>
            </Button>

            <ThemeToggle darkModeEnabled={darkModeEnabled} setDarkModeEnabled={setDarkModeEnabled} />

        </Box>
    );
}

export default DesktopNavbar;