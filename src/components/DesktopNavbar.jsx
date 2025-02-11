import React from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Box, Tooltip, Typography, Button } from '@mui/material';
import { ThemeToggle } from '../components/index';
import colors from '../utils/colors';
import { kpLogoDark, kpLogoLight } from '../utils/constants';

const LogoContainer = styled(Box)(() => ({
    display: 'flex',
    padding: '0',
    marginLeft: '1rem',
    marginTop: '0.125rem',
    flexGrow: 1
}));

const DesktopNavbar = ({ darkModeEnabled, setDarkModeEnabled }) => {
    return (
        <Box
            justifyContent="flex-end"
            alignItems="center"
            gap={4}
            sx={{
                position: 'relative',
                display: { xs: 'none', md: 'flex' },
                pr: 1,
                bgcolor: darkModeEnabled ? colors.darkModeNav : colors.lightModeNav,
                height: '60px',
                zIndex: 1000,
                // offset-x offset-y blur-radius spread-radius color
                boxShadow: darkModeEnabled
                    ? '0px 2px 4px -1px rgba(0, 0, 0, 0.6), 0px 4px 5px 0px rgba(0, 0, 0, 0.35), 0px 1px 10px 0px rgba(0, 0, 0, 0.50)'
                    : '0px 2px 4px -1px rgba(102, 102, 102, 0.6), 0px 4px 5px 0px rgba(102, 102, 102, 0.35), 0px 1px 10px 0px rgba(102, 102, 102, 0.50)',
            }}
        >
            <LogoContainer>
                <Link to="/">
                    <Tooltip
                        placement="right-end"
                        title={
                            <React.Fragment>
                                <Typography color="inherit">
                                    KileyPrice.com
                                </Typography>
                            </React.Fragment>
                        }
                    >
                        <img
                            src={darkModeEnabled ? kpLogoDark : kpLogoLight}
                            height={40}
                        />
                    </Tooltip>
                </Link>
            </LogoContainer>

            <Button
                sx={{
                    color: darkModeEnabled ? colors.white : colors.black,
                    fontSize: '0.875rem',
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
                    My Portfolio
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