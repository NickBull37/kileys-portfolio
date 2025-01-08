import React from 'react';
import { Box, Typography } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';

const ThemeToggle = ({ darkModeEnabled, setDarkModeEnabled }) => {

    const handleThemeToggleClick = () => {
        setDarkModeEnabled(!darkModeEnabled);
    };

    return (
        <Box
            display="flex"
            justifyContent="flex-end"
            sx={{
                mx: { xs: 0, md: 2 },
            }}
        >
            <Box
                display="flex"
                alignItems="center"
                sx={{
                    pl: 0.5,
                    pr: 1.25,
                    py: 0.25,
                    bgcolor: darkModeEnabled ? '#ffeb99' : '#666666',
                    border: darkModeEnabled ? '1px solid #b34700' : '1px solid #000',
                    borderRadius: '16px',
                    '&:hover': {
                        cursor: 'pointer'
                    },
                }}
                onClick={handleThemeToggleClick}
            >
                {darkModeEnabled
                    ?
                        <>
                            <LightModeIcon
                                sx={{
                                    color: '#e6b800'
                                }}
                            />
                            <Typography
                                sx={{
                                    color: '#b34700',
                                    fontSize: '0.8125rem',
                                }}
                            >
                                &nbsp;Light Mode
                            </Typography>
                        </>
                    :
                        <>
                            <NightlightRoundIcon />
                            <Typography
                                sx={{
                                    fontSize: '0.8125rem'
                                }}
                            >
                                &nbsp;Dark Mode
                            </Typography>
                        </>
                }
            </Box>

        </Box>
    );
}

export default ThemeToggle;