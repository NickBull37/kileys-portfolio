import React from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Box, Stack, Paper, Typography } from '@mui/material';
import { DesktopNavbar, MobileNavbar, Footer } from '../components/index';
import { portfolio } from '../utils/constants';
import EastRoundedIcon from '@mui/icons-material/EastRounded';

const PageContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    margin: '0',
    padding: '0',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    },
}));

const ImageBox = styled(Box)(() => ({
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '3rem',
}));

const Image1Container = styled(Box)(() => ({
    height: '425px',
    borderRadius: '4px',
    boxShadow: '0px 3px 5px 1px rgba(0, 0, 0, 0.6), 0px 4px 5px 0px rgba(0, 0, 0, 0.28), 0px 1px 12px 1px rgba(0, 0, 0, 0.4)',
    transition: '0.25s',
    '&:hover': {
        cursor: 'pointer',
        transform: 'rotate(2deg)',
    },
}));

const ContentContainer = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    height: 'calc(100% - 60px)',
    width: '100%',
}));

const BlackBox = styled(Box)(() => ({
    display: 'flex',
    width: '100%',
    height: '52%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: '0 8% 0 8%',
}));

const TextStack = styled(Stack)(() => ({
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    borderLeft: '1px solid #fff',
}));

const AboutMePage = ({ darkModeEnabled, setDarkModeEnabled }) => {
    return (
        <PageContainer className='bg-img'>

            <DesktopNavbar darkModeEnabled={darkModeEnabled} setDarkModeEnabled={setDarkModeEnabled} />
            <MobileNavbar darkModeEnabled={darkModeEnabled} setDarkModeEnabled={setDarkModeEnabled} />

            <ContentContainer>
                <BlackBox>

                    <TextStack
                        sx={{
                            px: 4
                        }}
                    >
                        <Typography
                            className='feel-free'
                            sx={{
                                fontSize: '6rem',
                                lineHeight: '1',
                                color: darkModeEnabled ? '#fff' : '#fff',
                            }}
                        >
                            About Me
                        </Typography>

                        <Typography
                            variant='body1'
                            sx={{
                                fontSize: '1.25rem',
                                color: darkModeEnabled ? '#e6e6e6' : '#e6e6e6',
                                my: 1,
                                lineHeight: '1.55',
                            }}
                        >
                            Hi! I am a reporter at Inside Climate News, where I write the "Today's Climate" newsletter. I write about the most pressing climate-related news happening around the world—from biodiversity loss to extreme weather. My work has appeared in National Geographic, Grist, Time Magazine, Scientific American and more.
                        </Typography>

                        <Box
                            display="flex"
                            alignItems="flex-start"
                            gap={1}
                            sx={{
                                my: 1.75,
                            }}
                        >
                            <Typography
                                variant='body1'
                                sx={{
                                    fontSize: '1.125rem',
                                    color: darkModeEnabled ? '#e6e6e6' : '#e6e6e6',
                                }}
                            >
                                Click on my portfolio to see some of my work!
                            </Typography>
                            <EastRoundedIcon
                                sx={{
                                    color: '#e6e6e6',
                                }}
                            />
                        </Box>
                    </TextStack>

                    <ImageBox>
                        <Image1Container>
                            <Link to="/written-work">
                                <img className="portfolio-img" src={portfolio} />
                            </Link>
                        </Image1Container>
                    </ImageBox>

                </BlackBox>
            </ContentContainer>

            <Footer darkModeEnabled={darkModeEnabled} />

        </PageContainer>
    );
}

export default AboutMePage;