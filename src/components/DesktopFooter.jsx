import React from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Box, Button, Typography, Tooltip } from '@mui/material';
import { kpLogoDarkTrans, kpLogoLightTrans } from '../utils/constants';
import colors from '../utils/colors';
import PetsIcon from '@mui/icons-material/Pets';

const CopyrightText = styled(Typography)(() => ({
    fontSize: '0.875rem',
    lineHeight: '1.5',
    letterSpacing: '0px',
    fontFamily: '"IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
}));

const FooterLink = styled(Typography)(() => ({
    color: '',
    fontSize: '0.875rem',
    transition: '0.2s',
    '&:hover': {
        transform: 'translateY(-2px)',
    },
}));

const DesktopFooter = ({ darkModeEnabled }) => {
    return (
        <Box
            justifyContent="center"
            alignItems="center"
            gap={7.5}
            sx={{
                display: { xs: 'none', md: 'flex' },
                flexDirection: 'row',
                py: '1.375rem',
                bgcolor: darkModeEnabled ? colors.darkModeNav : colors.lightModeNav,
                borderTop: '1px solid #000',
            }}
        >
            <Box
                justifyContent="center"
                alignItems="center"
                sx={{
                    display: darkModeEnabled ? 'flex' : 'none',
                    mr: '10rem',
                }}
            >
                <img className="footer-logo" src={kpLogoDarkTrans} />
                <CopyrightText
                    sx={{
                        color: darkModeEnabled ? colors.gray70 : colors.gray10,
                    }}
                >
                    Copyright
                </CopyrightText>
                <Tooltip title={<PetsIcon sx={{ fontSize: 20 }} />}>
                    <CopyrightText
                        sx={{
                            color: darkModeEnabled ? colors.white : colors.black,
                            mx: '4px',
                            '&:hover': {
                                cursor: 'pointer',
                            },
                        }}
                    >
                        ©
                    </CopyrightText>
                </Tooltip>
                <CopyrightText
                    sx={{
                        color: darkModeEnabled ? colors.gray70 : colors.black,
                    }}
                >
                    KileyPrice.com
                </CopyrightText>
            </Box>
            <Box
                justifyContent="center"
                alignItems="center"
                sx={{
                    display: darkModeEnabled ? 'none' : 'flex',
                    mr: '6rem',
                }}
            >
                <img className="footer-logo" src={kpLogoLightTrans} />
                <CopyrightText
                    sx={{
                        color: darkModeEnabled ? colors.gray70 : colors.gray10,
                    }}
                >
                    Copyright
                </CopyrightText>
                <Tooltip title={<PetsIcon sx={{ fontSize: 20 }} />}>
                    <CopyrightText
                        sx={{
                            // fontSize: '1rem',
                            color: darkModeEnabled ? colors.white : colors.black,
                            mx: '4px',
                            '&:hover': {
                                cursor: 'pointer',
                            },
                        }}
                    >
                        ©
                    </CopyrightText>
                </Tooltip>
                <CopyrightText
                    sx={{
                        color: darkModeEnabled ? colors.gray70 : colors.gray10,
                    }}
                >
                    KileyPrice.com
                </CopyrightText>
            </Box>
            <Link to="/">
                <FooterLink
                    sx={{
                        color: darkModeEnabled ? colors.gray85 : colors.black,
                    }}
                >
                    Home
                </FooterLink>
            </Link>
            <Link to="/about-me">
                <FooterLink
                    sx={{
                        color: darkModeEnabled ? colors.gray85 : colors.black,
                    }}
                >
                    About Me
                </FooterLink>
            </Link>
            <Link to="/written-work">
                <FooterLink
                    sx={{
                        color: darkModeEnabled ? colors.gray85 : colors.black,
                    }}
                >
                    My Portfolio
                </FooterLink>
            </Link>
            <Link to="/contact">
                <FooterLink
                    sx={{
                        color: darkModeEnabled ? colors.gray85 : colors.black,
                    }}
                >
                    Contact
                </FooterLink>
            </Link>
        </Box>
    );
}

export default DesktopFooter;