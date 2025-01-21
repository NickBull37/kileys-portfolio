import React from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import colors from '../utils/colors';

const FooterLink = styled(Typography)(() => ({
    borderBottom: '1px solid #999999',
}));

const MobileFooter = ({ darkModeEnabled }) => {
    return (
        <Box
            justifyContent="center"
            gap={3}
            sx={{
                display: { xs: 'flex', md: 'none' },
                flexDirection: 'column',
                py: '2rem',
                bgcolor: darkModeEnabled ? colors.darkModeNav : colors.lightModeNav,
                borderTop: '1px solid #000',
            }}
        >
            <Button>
                <Link to="/">
                    <FooterLink
                        variant='body2'
                        sx={{
                            color: darkModeEnabled ? colors.white : colors.black,
                        }}
                    >
                        Home
                    </FooterLink>
                </Link>
            </Button>
            <Button>
                <Link to="/about-me-mobile">
                    <FooterLink
                        variant='body2'
                        sx={{
                            color: darkModeEnabled ? colors.white : colors.black,
                        }}
                    >
                        About Me
                    </FooterLink>
                </Link>
            </Button>
            <Button>
                <Link to="/written-work">
                    <FooterLink
                        variant='body2'
                        sx={{
                            color: darkModeEnabled ? colors.white : colors.black,
                        }}
                    >
                        Written Work
                    </FooterLink>
                </Link>
            </Button>
            <Button>
                <Link to="/contact-mobile">
                    <FooterLink
                        variant='body2'
                        sx={{
                            color: darkModeEnabled ? colors.white : colors.black,
                        }}
                    >
                        Contact
                    </FooterLink>
                </Link>
            </Button>
        </Box>
    );
}

export default MobileFooter;