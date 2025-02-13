import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Box, Stack, Typography, Tooltip, Backdrop } from '@mui/material';
import { kpLogoDarkTrans, kpLogoLightTrans } from '../utils/constants';
import { boxcat } from '../utils/constants';
import colors from '../utils/colors';
import PetsIcon from '@mui/icons-material/Pets';
import Confetti from "react-confetti";

const CopyrightBox = styled(Box)(() => ({
    display: 'flex',
}));

const FooterLinkBox = styled(Box)(() => ({
    display: 'flex',
}));

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

    const [backdropOpen, setBackdropOpen] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    
    const handleOpenBackdrop = () => {
        setBackdropOpen(true);
        setShowConfetti(true);
    };

    const handleCloseBackdrop = () => {
        setBackdropOpen(false);
        setShowConfetti(false);
    };

    return (
        <Box
            justifyContent="space-between"
            alignItems="center"
            sx={{
                display: { xs: 'none', md: 'flex' },
                flexDirection: 'row',
                py: '1.375rem',
                px: '8rem',
                bgcolor: darkModeEnabled ? colors.darkModeNav : colors.lightModeFooter,
                borderTop: '1px solid #000',
            }}
        >
            <CopyrightBox>
                <Box
                    sx={{
                        display: darkModeEnabled ? 'flex' : 'none',
                        mr: '14rem',
                    }}
                >
                    <img className="footer-logo" src={kpLogoDarkTrans} />
                    <CopyrightText
                        sx={{
                            color: colors.gray70
                        }}
                    >
                        Copyright
                    </CopyrightText>
                    <Tooltip title={<PetsIcon sx={{ fontSize: 20 }} />}>
                        <CopyrightText
                            onClick={handleOpenBackdrop}
                            sx={{
                                color: colors.white,
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
                            color: colors.gray70
                        }}
                    >
                        KileyPrice.com
                    </CopyrightText>
                </Box>
                <Box
                    sx={{
                        display: darkModeEnabled ? 'none' : 'flex',
                        mr: '6rem',
                    }}
                >
                    <img className="footer-logo" src={kpLogoLightTrans} />
                    <CopyrightText
                        sx={{
                            color: colors.gray10,
                        }}
                    >
                        Copyright
                    </CopyrightText>
                    <Tooltip title={<PetsIcon sx={{ fontSize: 20 }} />}>
                        <CopyrightText
                            onClick={handleOpenBackdrop}
                            sx={{
                                color: colors.black,
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
                            color: colors.gray10,
                        }}
                    >
                        KileyPrice.com
                    </CopyrightText>
                </Box>
            </CopyrightBox>
            <FooterLinkBox
                gap={8}
            >
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
            </FooterLinkBox>

            <Backdrop
                sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                open={backdropOpen}
                onClick={handleCloseBackdrop}
            >
                <Stack
                    alignItems="center"
                    sx={{
                        bgcolor: '#fff',
                        borderRadius: '80px',
                        pt: '2rem'
                    }}
                >
                    {/* <Typography
                        className='feel-free'
                        sx={{
                            color: '#050E73',
                            fontSize: '5rem',
                        }}
                    >
                        Hooray! You found the cat!!!
                    </Typography> */}
                    <img className="boxcat-img" src={boxcat} />
                </Stack>

                <div>
                    {showConfetti && <Confetti />}
                </div>
            </Backdrop>
        </Box>
    );
}

export default DesktopFooter;