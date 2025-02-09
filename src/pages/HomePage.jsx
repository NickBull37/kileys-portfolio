import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Stack, Typography } from '@mui/material';
import { DesktopNavbar, MobileNavbar, DesktopFooter, MobileFooter } from '../components/index'
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
    transition: '0.25s',
    '&:hover': {
        transform: 'rotate(-12deg) translateY(-15px)',
    },
}));

const Image2Container = styled(Box)(() => ({
    display: 'flex',
    position: 'relative',
    borderRadius: '12px',
    boxShadow: '0px 3px 5px 1px rgba(0, 0, 0, 0.6), 0px 4px 5px 0px rgba(0, 0, 0, 0.28), 0px 1px 12px 1px rgba(0, 0, 0, 0.4)',
    transform: 'rotate(8deg) translateX(-10px)',
    zIndex: '2',
    transition: '0.25s',
    '&:hover': {
        transform: 'rotate(8deg) translateY(-15px)',
    },
}));

const TextStack = styled(Stack)(() => ({
    position: 'static',
    display: 'flex',
    justifyContent: 'center',
    width: '24%',
    height: '100%',
}));

const MobileTextStack = styled(Stack)(() => ({
    display: 'flex',
    justifyContent: 'center',
    width: '84%',
    height: '100%',
    paddingTop: '300px',
    paddingBottom: '40px',
}));

const HomePage = ({ darkModeEnabled, setDarkModeEnabled }) => {

    return (
        <PageContainer
            className='bg-img'
        >

            <DesktopNavbar darkModeEnabled={darkModeEnabled} setDarkModeEnabled={setDarkModeEnabled} />
            <MobileNavbar darkModeEnabled={darkModeEnabled} setDarkModeEnabled={setDarkModeEnabled} />

            <DesktopLandingContainer className="homepage-box">

                <ImagesContainer>
                    <Image1Container>
                        <img className="homepage-img" src={daenerys} />
                    </Image1Container>
                    <Image2Container>
                        <img className="homepage-img" src={daenerys2} />
                    </Image2Container>
                </ImagesContainer>

                <TextStack
                    sx={{
                        backgroundColor: darkModeEnabled ? 'rgba(0, 0, 0, 0.7)' : 'rgba(242, 242, 242, 0.65)',
                        // offset-x :: offset-y :: blur-radius :: spread-radius :: color
                        boxShadow: darkModeEnabled
                            ? '0px -4px 4px -1px rgba(0, 0, 0, 0.6), 0px -4px 5px 0px rgba(0, 0, 0, 0.35), 0px -4px 6px 0px rgba(0, 0, 0, 0.50)'
                            : '0px -4px 4px -1px rgba(102, 102, 102, 0.6), 0px -4px 5px 0px rgba(102, 102, 102, 0.35), 0px -4px 6px 0px rgba(102, 102, 102, 0.50)',
                    }}
                >
                    <Typography
                        textAlign="center"
                        className='homepage-header'
                        sx={{
                            color: darkModeEnabled ? colors.white : colors.black,
                        }}
                    >
                        Kiley Price
                    </Typography>
                    <Typography
                        className='homepage-subheader'
                        textAlign="center"
                        sx={{
                            color: darkModeEnabled ? colors.white : colors.black,
                            borderTop: '1px solid #808080',
                            borderBottom: '1px solid #808080',
                        }}
                    >
                        JOURNALIST / WRITER
                    </Typography>
                    <Typography
                        className='homepage-text'
                        sx={{
                            color: darkModeEnabled ? colors.white : colors.black,
                        }}
                    >
                        Welcome to my website! I'm a reporter at <i>Inside Climate News</i>, where I author the <i>Today's Climate</i> newsletter. I cover the most urgent climate stories shaping our world, from biodiversity loss to extreme weather events. My work has been featured in renowned publications like <i>National Geographic</i>, <i>Grist</i>, <i>TIME Magazine</i>, <i>Scientific American</i>, and more.
                    </Typography>
                </TextStack>
            </DesktopLandingContainer>

            <MobileLandingContainer>

                <MobileImagesContainer>
                    <Image1Container>
                        <img className="homepage-img" src={daenerys} />
                    </Image1Container>
                    <Image2Container>
                        <img className="homepage-img" src={daenerys2} />
                    </Image2Container>
                </MobileImagesContainer>

                <MobileTextStack
                    sx={{
                        backgroundColor: darkModeEnabled ? 'rgba(0, 0, 0, 0.7)' : 'rgba(242, 242, 242, 0.65)',
                        // offset-x :: offset-y :: blur-radius :: spread-radius :: color
                        boxShadow: darkModeEnabled
                            ? '0px -4px 4px -1px rgba(0, 0, 0, 0.6), 0px -4px 5px 0px rgba(0, 0, 0, 0.35), 0px -4px 6px 0px rgba(0, 0, 0, 0.50)'
                            : '0px -4px 4px -1px rgba(102, 102, 102, 0.6), 0px -4px 5px 0px rgba(102, 102, 102, 0.35), 0px -4px 6px 0px rgba(102, 102, 102, 0.50)',
                    }}
                >
                    <Typography
                        textAlign="center"
                        className='homepage-header'
                        sx={{
                            color: darkModeEnabled ? colors.white : colors.black,
                        }}
                    >
                        Kiley Price
                    </Typography>
                    <Typography
                        className='homepage-subheader'
                        textAlign="center"
                        sx={{
                            color: darkModeEnabled ? colors.white : colors.black,
                            borderTop: '1px solid #808080',
                            borderBottom: '1px solid #808080',
                        }}
                    >
                        JOURNALIST / WRITER
                    </Typography>
                    <Typography
                        className='homepage-text'
                        sx={{
                            color: darkModeEnabled ? colors.white : colors.black,
                        }}
                    >
                        Welcome to my website! I'm a reporter at <i>Inside Climate News</i>, where I author the <i>Today's Climate</i> newsletter. I cover the most urgent climate stories shaping our world, from biodiversity loss to extreme weather events. My work has been featured in renowned publications like <i>National Geographic</i>, <i>Grist</i>, <i>TIME Magazine</i>, <i>Scientific American</i>, and more.
                    </Typography>
                </MobileTextStack>
            </MobileLandingContainer>

            <DesktopFooter darkModeEnabled={darkModeEnabled} />
            <MobileFooter darkModeEnabled={darkModeEnabled} />
            
        </PageContainer>
    );
}

export default HomePage;