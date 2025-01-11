import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Stack, Paper, Typography } from '@mui/material';
import { DesktopNavbar, MobileNavbar, Footer } from '../components/index'
import { daenerys } from '../utils/constants';
import colors from '../utils/colors';

const PageContainer = styled(Box)(() => ({
    width: '100%',
    margin: '0',
    padding: '0',
}));

const StyledPaper = styled(Paper)(() => ({
    boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.4), 0px 4px 5px 0px rgba(0, 0, 0, 0.28), 0px 1px 10px 0px rgba(0, 0, 0, 0.24)',
}));

const HomePage = ({ darkModeEnabled, setDarkModeEnabled }) => {

    return (
        <PageContainer className='bg-img'>

            <DesktopNavbar darkModeEnabled={darkModeEnabled} setDarkModeEnabled={setDarkModeEnabled} />
            <MobileNavbar darkModeEnabled={darkModeEnabled} setDarkModeEnabled={setDarkModeEnabled} />

            {/* Contains Box for title bar and StyledPaper for intro */}
            <Stack
                className='landing-stack'
                alignItems="center"
            >
                {/* Contains title bar */}
                <Box
                    className="landing-title-box"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{
                        width: '100%',
                        bgcolor: darkModeEnabled ? 'rgba(51, 51, 51, 0.75)' : 'rgba(230, 230, 230, 0.85)',
                        fontSize: '6rem',
                        lineHeight: '1',
                        borderTop: '1px solid #000',
                        borderBottom: '1px solid #000',
                    }}
                >
                    <Typography
                        className='feel-free'
                        sx={{
                            fontSize: { xs: '2.75rem', md: '5rem' },
                            lineHeight: '1',
                            color: darkModeEnabled ? '#fff' : '#000',
                        }}
                    >
                        Kiley Price
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: { xs: '0.875rem', md: '1rem' },
                            color: darkModeEnabled ? '#fff' : '#000',
                        }}
                    >
                        JOURNALIST / WRITER
                    </Typography>
                </Box>

                {/* Contains img and intro text */}
                <StyledPaper
                    className='landing-styled-paper'
                    sx={{
                        backgroundColor: darkModeEnabled
                            ? colors.darkModePage
                            : colors.lightModePage,
                    }}
                >
                    <Box
                        display="flex"
                        alignItems="center"
                        gap={4}
                        sx={{
                            flexDirection: { xs: 'column', md: 'row' },
                            py: { xs: 4, md: 2 },
                            px: { xs: 4, md: 2 },
                        }}
                    >
                        <Box>
                            <img className="landing-img" src={daenerys} />
                        </Box>
                        <Box>
                            <Typography
                                sx={{
                                    fontSize: '1.25rem',
                                    lineHeight: '1.5',
                                    color: darkModeEnabled ? '#fff' : '#000',
                                    borderRadius: '5px',
                                    pr: 1,
                                }}
                            >
                                Welcome to my website! I'm a reporter at <i>Inside Climate News</i>, where I author the <i>Today's Climate</i> newsletter. I cover the most urgent climate stories shaping our world, from biodiversity loss to extreme weather events. My work has been featured in renowned publications like <i>National Geographic</i>, <i>Grist</i>, <i>TIME Magazine</i>, <i>Scientific American</i>, and more.
                            </Typography>
                        </Box>
                    </Box>
                </StyledPaper>

            </Stack>

            <Footer darkModeEnabled={darkModeEnabled} />
            
        </PageContainer>
    );
}

export default HomePage;