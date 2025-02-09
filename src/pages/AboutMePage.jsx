import React from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/material';
import { DesktopNavbar, MobileNavbar, DesktopFooter } from '../components/index';
import { daenerys3, portfolio, leafBorderDark, leafBorderLight } from '../utils/constants';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import colors from '../utils/colors';

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

const BorderImageContainer = styled(Box)(() => ({
    height: '100%',
}));

const Image1Container = styled(Box)(() => ({
    borderRadius: '4px',
    boxShadow: '0px 3px 5px 1px rgba(0, 0, 0, 0.6), 0px 4px 5px 0px rgba(0, 0, 0, 0.28), 0px 1px 12px 1px rgba(0, 0, 0, 0.4)',
    // transition: '0.25s',
    // '&:hover': {
    //     cursor: 'pointer',
    //     transform: 'rotate(2deg)',
    // },
}));

const ContentContainer = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    height: 'calc(100% - 60px)',
    width: '100%',
}));

const SemiTransparentBox = styled(Box)(() => ({
    display: 'flex',
    width: '100%',
    height: '52%',
}));

const TextStack = styled(Stack)(() => ({
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    marginRight: '5rem',
}));

const AboutMePage = ({ darkModeEnabled, setDarkModeEnabled }) => {
    return (
        <PageContainer className='bg-img'>

            <DesktopNavbar darkModeEnabled={darkModeEnabled} setDarkModeEnabled={setDarkModeEnabled} />
            <MobileNavbar darkModeEnabled={darkModeEnabled} setDarkModeEnabled={setDarkModeEnabled} />

            <ContentContainer>
                <SemiTransparentBox
                    className='aboutme-transparent-box'
                    sx={{
                        backgroundColor: darkModeEnabled ? 'rgba(0, 0, 0, 0.7)' : 'rgba(242, 242, 242, 0.7)',
                        boxShadow: darkModeEnabled
                            ? '0px 2px 3px -1px rgba(0, 0, 0, 0.4), 0px 4px 3px 0px rgba(0, 0, 0, 0.28), 0px 0px 6px 0px rgba(0, 0, 0, 0.24)'
                            : '0px 2px 3px -1px rgba(0, 0, 0, 0.4), 0px -2px 3px -1px rgba(0, 0, 0, 0.4), 0px 4px 3px 0px rgba(0, 0, 0, 0.28), 0px 0px 6px 0px rgba(0, 0, 0, 0.24)',
                    }}
                >

                    <ImageBox>
                        <BorderImageContainer
                            sx={{
                                display: darkModeEnabled ? 'block' : 'none'
                            }}
                        >
                            <img className="custom-border-img" src={leafBorderDark} />
                        </BorderImageContainer>
                        <BorderImageContainer
                            sx={{
                                display: darkModeEnabled ? 'none' : 'block'
                            }}
                        >
                            <img className="custom-border-img" src={leafBorderLight} />
                        </BorderImageContainer>
                    </ImageBox>

                    <TextStack
                        sx={{
                            pl: 4,
                        }}
                    >
                        <Typography
                            className='page-header'
                            sx={{
                                color: darkModeEnabled ? colors.white : colors.black,
                            }}
                        >
                            About Me
                        </Typography>

                        <Typography
                            variant='body1'
                            sx={{
                                fontSize: '1.25rem',
                                color: darkModeEnabled ? colors.gray90 : colors.black,
                                mb: 1,
                                lineHeight: '1.55',
                            }}
                        >
                            Hi! I am a reporter at Inside Climate News, where I write the "Today's Climate" newsletter. I write about the most pressing climate-related news happening around the world—from biodiversity loss to extreme weather. My work has appeared in National Geographic, Grist, Time Magazine, Scientific American and more.
                        </Typography>

                        <Box
                            display="flex"
                            alignItems="center"
                            gap={1}
                            sx={{
                            }}
                        >
                            <Typography
                                variant='body1'
                                sx={{
                                    fontSize: '1rem',
                                    fontStyle: 'italic',
                                    color: darkModeEnabled ? colors.gray90 : colors.black,
                                }}
                            >
                                Check out my portfolio to see some of my work!
                            </Typography>
                            <Link to="/written-work">
                                <AutoStoriesOutlinedIcon
                                    sx={{
                                        fontSize: '2.75rem',
                                        color: darkModeEnabled ? '#e6e6e6' : '#1a1a1a',
                                        ml: 1,
                                        padding: '7px',
                                        borderRadius: '20px',
                                        transition: '0.25s',
                                        '&:hover': {
                                            cursor: 'pointer',
                                            padding: '7px',
                                            backgroundColor: darkModeEnabled ? '#333333' : '#999999',
                                            borderRadius: '20px'
                                        },
                                    }}
                                />
                            </Link>
                        </Box>
                    </TextStack>

                    <ImageBox>
                        <Image1Container className='about-img-container'>
                            <img className="about-img" src={daenerys3} />
                        </Image1Container>
                    </ImageBox>

                </SemiTransparentBox>
            </ContentContainer>

            <DesktopFooter darkModeEnabled={darkModeEnabled} />

        </PageContainer>
    );
}

export default AboutMePage;