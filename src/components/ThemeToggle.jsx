import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Switch } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';

const ThemeSwitch = styled(Switch)(() => ({
    width: 62,
    height: 34,
    padding: 9,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(8px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(23px)',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: '#8d9aa5', // checked track color
            },
        },
    },
    '& .MuiSwitch-thumb': {
        width: 32,
        height: 32,
        '&::before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
        },
    },
    '& .MuiSwitch-track': { // checked
        opacity: 1,
        backgroundColor: '#8d9aa5',
        borderRadius: 20 / 2,
    },
}));

const ThemeToggle = ({ darkModeEnabled, setDarkModeEnabled }) => {

    const handleThemeToggleClick = () => {
        setDarkModeEnabled(!darkModeEnabled);
    };

    return (
        <Box
            sx={{
                mr: 1
            }}
        >
            <ThemeSwitch
                defaultChecked
                icon={
                    <LightModeIcon
                        sx={{
                            backgroundColor: '#595959',
                            borderRadius: '50px',
                            p: '5px',
                            fontSize: 30,
                            color: '#ffcc00'
                        }}
                    />
                }
                checkedIcon={
                    <ModeNightIcon
                        sx={{
                            backgroundColor: '#666666',
                            borderRadius: '50px',
                            p: '5px',
                            fontSize: 30,
                            color: '#fff'
                        }}
                    />
                }
                onClick={handleThemeToggleClick}
            />
        </Box>
    );
}

export default ThemeToggle;