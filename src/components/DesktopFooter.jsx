import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import colors from '../utils/colors';

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