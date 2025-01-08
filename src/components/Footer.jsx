import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Button, Typography } from '@mui/material';
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
                    <Typography
                        variant='body2'
                        sx={{
                            color: '#cccccc',
                            borderBottom: { xs: '1px solid #cccccc', md: 'none' }
                        }}
                    >
                        Home
                    </Typography>
                </Link>
            </NavBtn>
            <NavBtn
                sx={{
                    color: darkModeEnabled ? colors.white : colors.black,
                }}
            >
                <Link to="/about-me">
                    <Typography
                        variant='body2'
                        sx={{
                            color: '#cccccc',
                            borderBottom: { xs: '1px solid #cccccc', md: 'none' }
                        }}
                    >
                        About Me
                    </Typography>
                </Link>
            </NavBtn>
            <NavBtn
                sx={{
                    color: darkModeEnabled ? colors.white : colors.black,
                }}
            >
                <Link to="/written-work">
                    <Typography
                        variant='body2'
                        sx={{
                            color: '#cccccc',
                            borderBottom: { xs: '1px solid #cccccc', md: 'none' }
                        }}
                    >
                        Written Work
                    </Typography>
                </Link>
            </NavBtn>
            <NavBtn
                sx={{
                    color: darkModeEnabled ? colors.white : colors.black,
                }}
            >
                <Link to="/contact">
                    <Typography
                        variant='body2'
                        sx={{
                            color: '#cccccc',
                            borderBottom: { xs: '1px solid #cccccc', md: 'none' }
                        }}
                    >
                        Contact
                    </Typography>
                </Link>
            </NavBtn>
        </Box>
    );
}

export default Footer;