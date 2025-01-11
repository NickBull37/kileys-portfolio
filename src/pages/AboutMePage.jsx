import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Stack, Paper, Typography } from '@mui/material';
import { DesktopNavbar, MobileNavbar, Footer } from '../components/index';
import colors from '../utils/colors';

const PageContainer = styled(Box)(() => ({
    width: '100%',
    margin: '0',
    padding: '0',
}));

const StyledPaper = styled(Paper)(() => ({
    boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.4), 0px 4px 5px 0px rgba(0, 0, 0, 0.28), 0px 1px 10px 0px rgba(0, 0, 0, 0.24)',
    padding: "20px",
    color: "#fff",
}));

const AboutMePage = ({ darkModeEnabled, setDarkModeEnabled }) => {
    return (
        <PageContainer className='bg-img'>

            <DesktopNavbar darkModeEnabled={darkModeEnabled} setDarkModeEnabled={setDarkModeEnabled} />
            <MobileNavbar darkModeEnabled={darkModeEnabled} setDarkModeEnabled={setDarkModeEnabled} />

            <Stack
                className='about-stack'
                alignItems="center"
            >
                <StyledPaper
                    className='about-styled-paper'
                    sx={{
                        backgroundColor: darkModeEnabled
                            ? colors.darkModePage
                            : colors.lightModePage,
                    }}
                >
                    <Stack>
                        <Typography
                            variant='h4'
                            sx={{
                                mb: 2.5,
                                borderBottom: darkModeEnabled ? '1px solid #fff' : '1px solid #000',
                                color: darkModeEnabled ? '#fff' : '#000',
                            }}
                        >
                            Kylie Price
                        </Typography>
                        <Typography
                            variant='body1'
                            sx={{
                                fontSize: '1.125rem',
                                color: darkModeEnabled ? '#fff' : '#000',
                            }}
                        >
                            Hi! I am a reporter at Inside Climate News, where I write the “Today’s Climate” newsletter. I write about the most pressing climate-related news happening around the world—from biodiversity loss to extreme weather. My work has appeared in National Geographic, Grist, Time Magazine, Scientific American and more.
                        </Typography>
                    </Stack>
                </StyledPaper>
                
            </Stack>

            <Footer darkModeEnabled={darkModeEnabled} />

        </PageContainer>
    );
}

export default AboutMePage;