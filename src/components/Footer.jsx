import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import colors from '../utils/colors';

const Footer = ({ darkModeEnabled }) => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            gap={{ xs: 3, md: 8 }}
            sx={{
                flexDirection: { xs: 'column', md: 'row' },
                py: { xs: '2rem', md: '0.75rem' },
                bgcolor: darkModeEnabled ? colors.darkModeNav : colors.lightModeNav,
                borderTop: '1px solid #000',
            }}
        >
            <Button>
                <Link to="/">
                    <Typography
                        variant='body2'
                        sx={{
                            color: darkModeEnabled ? colors.white : colors.black,
                            borderBottom: { xs: '1px solid #999999', md: 'none' }
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
                            borderBottom: { xs: '1px solid #999999', md: 'none' }
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
                            borderBottom: { xs: '1px solid #999999', md: 'none' }
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
                            borderBottom: { xs: '1px solid #999999', md: 'none' }
                        }}
                    >
                        Contact
                    </Typography>
                </Link>
            </Button>
        </Box>
    );
}

export default Footer;