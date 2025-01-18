import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Stack, Paper, Typography } from '@mui/material';
import { DesktopNavbar, MobileNavbar, Footer } from '../../components/index';
import { portfolio } from '../../utils/constants';
import colors from '../../utils/colors';

const PageContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    margin: '0',
    padding: '0',
}));

const MobileAboutContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}));

const MobileImagesContainer = styled(Box)(() => ({
    position: 'absolute',
    display: 'flex',
    maxHeight: '250px',
    marginTop: '2rem',
}));

const Image1Container = styled(Box)(() => ({
    display: 'flex',
    position: 'relative',
    borderRadius: '12px',
    boxShadow: '0px 3px 5px 1px rgba(0, 0, 0, 0.6), 0px 4px 5px 0px rgba(0, 0, 0, 0.28), 0px 1px 12px 1px rgba(0, 0, 0, 0.4)',
    zIndex: '1',
}));

const MobileTextStack = styled(Stack)(() => ({
    display: 'flex',
    justifyContent: 'center',
    width: '84%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingTop: '300px',
    paddingBottom: '40px',
}));

const AboutMeMobile = ({ darkModeEnabled, setDarkModeEnabled }) => {
    return (
        <PageContainer className='bg-img'>

            <DesktopNavbar darkModeEnabled={darkModeEnabled} setDarkModeEnabled={setDarkModeEnabled} />
            <MobileNavbar darkModeEnabled={darkModeEnabled} setDarkModeEnabled={setDarkModeEnabled} />

            <MobileAboutContainer>

                <MobileImagesContainer>
                    <Image1Container>
                        <img className="portfolio-mobile-img" src={portfolio} />
                    </Image1Container>
                </MobileImagesContainer>

                <MobileTextStack>
                    <Typography
                        textAlign="center"
                        className='feel-free'
                        sx={{
                            fontSize: '5rem',
                            lineHeight: '1',
                            color: colors.white,
                            mb: 3,
                        }}
                    >
                        About Me
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '1.125rem',
                            color: colors.white,
                            px: 4,
                            lineHeight: 1.7,
                        }}
                    >
                        Hi! I am a reporter at Inside Climate News, where I write the "Today's Climate" newsletter. I write about the most pressing climate-related news happening around the world—from biodiversity loss to extreme weather. My work has appeared in National Geographic, Grist, Time Magazine, Scientific American and more.
                    </Typography>
                </MobileTextStack>
            </MobileAboutContainer>

            <Footer darkModeEnabled={darkModeEnabled} />

        </PageContainer>
    );
}

export default AboutMeMobile;