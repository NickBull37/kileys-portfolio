import React from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Box, Stack, Button, Typography, Tooltip } from '@mui/material';
import { kpLogoDarkTrans, kpLogoLightTrans } from '../utils/constants';
import colors from '../utils/colors';
import PetsIcon from '@mui/icons-material/Pets';

const FooterLink = styled(Typography)(() => ({
    fontSize: '0.875rem',
    lineHeight: '1.5',
    letterSpacing: '0px',
    fontFamily: '"IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
}));

const CopyrightText = styled(Typography)(() => ({
    fontSize: '0.875rem',
    lineHeight: '1.5',
    letterSpacing: '0px',
    fontFamily: '"IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
}));

const FooterColumn = styled(Stack)(() => ({
    gap: '1rem',
    alignItems: 'flex-start'
}));

const LinkBtn = styled(Button)(() => ({
    padding: '0',
    margin: '0',
    justifyContent: 'flex-start'
}));

const MobileFooter = ({ darkModeEnabled }) => {
    return (
        <Stack
            sx={{
                display: { xs: 'flex', md: 'none' },
                position: 'relative',
                zIndex: 1000,
                bgcolor: darkModeEnabled ? colors.darkModeNav : colors.lightModeFooter,
                borderTop: '1px solid #000',
                py: '1.75rem',
            }}
        >
            <Box
                display="flex"
                justifyContent="space-evenly"
                gap={3}
            >
                <FooterColumn>
                    <LinkBtn>
                        <Link to="/">
                            <FooterLink
                                sx={{
                                    color: darkModeEnabled ? colors.gray70 : colors.black,
                                }}
                            >
                                Home
                            </FooterLink>
                        </Link>
                    </LinkBtn>
                    <LinkBtn>
                        <Link to="/about-me-mobile">
                            <FooterLink
                                variant='body2'
                                sx={{
                                    color: darkModeEnabled ? colors.gray70 : colors.black,
                                }}
                            >
                                About Me
                            </FooterLink>
                        </Link>
                    </LinkBtn>
                </FooterColumn>
                <FooterColumn>
                    <LinkBtn>
                        <Link to="/written-work">
                            <FooterLink
                                variant='body2'
                                sx={{
                                    color: darkModeEnabled ? colors.gray70 : colors.black,
                                }}
                            >
                                My Portfolio
                            </FooterLink>
                        </Link>
                    </LinkBtn>
                    <LinkBtn>
                        <Link to="/contact-mobile">
                            <FooterLink
                                variant='body2'
                                sx={{
                                    color: darkModeEnabled ? colors.gray70 : colors.black,
                                }}
                            >
                                Contact
                            </FooterLink>
                        </Link>
                    </LinkBtn>
                </FooterColumn>
            </Box>

            <Box
                justifyContent="center"
                alignItems="center"
                sx={{
                    display: darkModeEnabled ? 'flex' : 'none',
                    mt: '2rem',
                    mb: '0.5rem',
                    mx: '2rem',
                    pt: '1.5rem',
                    borderTop: '1px solid #666666'
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
                justifyContent="center"
                alignItems="center"
                sx={{
                    display: darkModeEnabled ? 'none' : 'flex',
                    mt: '2rem',
                    mb: '0.5rem',
                    mx: '2rem',
                    pt: '1.5rem',
                    borderTop: '1px solid #666666'
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
        </Stack>
    );
}

export default MobileFooter;