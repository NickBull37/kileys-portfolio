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

const DesktopFooter = ({ darkModeEnabled }) => {
    return (
        <Box
            justifyContent="center"
            gap={8}
            sx={{
                display: { xs: 'none', md: 'flex' },
                flexDirection: 'row',
                py: '0.75rem',
                bgcolor: darkModeEnabled ? colors.darkModeNav : colors.lightModeNav,
                borderTop: '1px solid #000',
            }}
        >
            <Box
                justifyContent="center"
                alignItems="center"
                sx={{
                    display: darkModeEnabled ? 'flex' : 'none',
                    mr: '6rem',
                }}
            >
                <img className="footer-logo" src={kpLogoDarkTrans} />
                <CopyrightText
                    sx={{
                        color: darkModeEnabled ? colors.gray70 : colors.black,
                    }}
                >
                    Copyright
                </CopyrightText>
                <Tooltip title={<PetsIcon sx={{ fontSize: 20 }} />}>
                    <CopyrightText
                        sx={{
                            color: darkModeEnabled ? colors.gray70 : colors.black,
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
                        color: darkModeEnabled ? colors.gray70 : colors.black,
                    }}
                >
                    Copyright
                </CopyrightText>
                <Tooltip title={<PetsIcon sx={{ fontSize: 20 }} />}>
                    <CopyrightText
                        sx={{
                            color: darkModeEnabled ? colors.gray70 : colors.black,
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
            <Button>
                <Link to="/">
                    <Typography
                        variant='body2'
                        sx={{
                            color: darkModeEnabled ? colors.white : colors.black,
                        }}
                    >
                        Home
                    </Typography>
                </Link>
            </Button>
            <Button>
                <Link to="/about-me">
                    <Typography
                        variant='body2'
                        sx={{
                            color: darkModeEnabled ? colors.white : colors.black,
                        }}
                    >
                        About Me
                    </Typography>
                </Link>
            </Button>
            <Button>
                <Link to="/written-work">
                    <Typography
                        variant='body2'
                        sx={{
                            color: darkModeEnabled ? colors.white : colors.black,
                        }}
                    >
                        Written Work
                    </Typography>
                </Link>
            </Button>
            <Button>
                <Link to="/contact">
                    <Typography
                        variant='body2'
                        sx={{
                            color: darkModeEnabled ? colors.white : colors.black,
                        }}
                    >
                        Contact
                    </Typography>
                </Link>
            </Button>
        </Box>
    );
}

export default DesktopFooter;