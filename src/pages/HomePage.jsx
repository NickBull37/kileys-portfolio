import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Stack, Typography } from '@mui/material';
import { DesktopNavbar, MobileNavbar, Footer } from '../components/index'
import { daenerys, daenerys2 } from '../utils/constants';
import colors from '../utils/colors';

const PageContainer = styled(Box)(() => ({
    width: '100%',
    margin: '0',
    padding: '0',
}));

const DesktopLandingContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    },
}));

const MobileLandingContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
        display: 'none'
    },
}));

const ImagesContainer = styled(Box)(() => ({
    display: 'flex',
}));

const MobileImagesContainer = styled(Box)(() => ({
    position: 'absolute',
    display: 'flex',
    maxHeight: '250px',
    paddingLeft: '2.25rem',
    paddingRight: '2.25rem',
    paddingTop: '1rem',
    top: '80px'
}));

const Image1Container = styled(Box)(() => ({
    display: 'flex',
    position: 'relative',
    borderRadius: '12px',
    boxShadow: '0px 3px 5px 1px rgba(0, 0, 0, 0.6), 0px 4px 5px 0px rgba(0, 0, 0, 0.28), 0px 1px 12px 1px rgba(0, 0, 0, 0.4)',
    transform: 'rotate(-12deg)',
    zIndex: '1',
}));

const Image2Container = styled(Box)(() => ({
    display: 'flex',
    position: 'relative',
    borderRadius: '12px',
    boxShadow: '0px 3px 5px 1px rgba(0, 0, 0, 0.6), 0px 4px 5px 0px rgba(0, 0, 0, 0.28), 0px 1px 12px 1px rgba(0, 0, 0, 0.4)',
    transform: 'rotate(8deg) translateX(-10px)',
    zIndex: '2',
}));

const TextStack = styled(Stack)(() => ({
    position: 'static',
    display: 'flex',
    justifyContent: 'center',
    width: '25%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
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

const HomePage = ({ darkModeEnabled, setDarkModeEnabled }) => {

    return (
        <PageContainer className='bg-img'>

            <DesktopNavbar darkModeEnabled={darkModeEnabled} setDarkModeEnabled={setDarkModeEnabled} />
            <MobileNavbar darkModeEnabled={darkModeEnabled} setDarkModeEnabled={setDarkModeEnabled} />

            <DesktopLandingContainer className="homepage-box">

                <ImagesContainer>
                    <Image1Container>
                        <img className="landing-img-2" src={daenerys} />
                    </Image1Container>
                    <Image2Container>
                        <img className="landing-img-2" src={daenerys2} />
                    </Image2Container>
                </ImagesContainer>

                <TextStack>
                    <Typography
                        textAlign="center"
                        className='feel-free'
                        sx={{
                            fontSize: '6rem',
                            lineHeight: '1',
                            color: colors.white,
                            mb: 4,
                        }}
                    >
                        Kiley Price
                    </Typography>
                    <Typography
                        textAlign="center"
                        sx={{
                            fontSize: '1.25rem',
                            color: colors.white,
                            mb: 4.5,
                            borderTop: '1px solid #808080',
                            borderBottom: '1px solid #808080',
                        }}
                    >
                        JOURNALIST / WRITER
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '1.125rem',
                            color: colors.white,
                            px: 4,
                            lineHeight: 1.7,
                        }}
                    >
                        Welcome to my website! I'm a reporter at <i>Inside Climate News</i>, where I author the <i>Today's Climate</i> newsletter. I cover the most urgent climate stories shaping our world, from biodiversity loss to extreme weather events. My work has been featured in renowned publications like <i>National Geographic</i>, <i>Grist</i>, <i>TIME Magazine</i>, <i>Scientific American</i>, and more.
                    </Typography>
                </TextStack>
            </DesktopLandingContainer>

            <MobileLandingContainer>

                <MobileImagesContainer>
                    <Image1Container>
                        <img className="landing-img-2" src={daenerys} />
                    </Image1Container>
                    <Image2Container>
                        <img className="landing-img-2" src={daenerys2} />
                    </Image2Container>
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
                        Kiley Price
                    </Typography>
                    <Typography
                        textAlign="center"
                        sx={{
                            fontSize: '1.125rem',
                            color: colors.white,
                            mb: 4,
                            borderTop: '1px solid #808080',
                            borderBottom: '1px solid #808080',
                        }}
                    >
                        JOURNALIST / WRITER
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '1.125rem',
                            color: colors.white,
                            px: 4,
                            lineHeight: 1.7,
                        }}
                    >
                        Welcome to my website! I'm a reporter at <i>Inside Climate News</i>, where I author the <i>Today's Climate</i> newsletter. I cover the most urgent climate stories shaping our world, from biodiversity loss to extreme weather events. My work has been featured in renowned publications like <i>National Geographic</i>, <i>Grist</i>, <i>TIME Magazine</i>, <i>Scientific American</i>, and more.
                    </Typography>
                </MobileTextStack>
            </MobileLandingContainer>

            <Footer darkModeEnabled={darkModeEnabled} />
            
        </PageContainer>
    );
}

export default HomePage;