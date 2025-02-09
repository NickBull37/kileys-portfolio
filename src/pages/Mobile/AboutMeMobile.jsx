import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Stack, Typography } from '@mui/material';
import { DesktopNavbar, MobileNavbar, MobileFooter } from '../../components/index';
import { daenerys3 } from '../../utils/constants';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import colors from '../../utils/colors';

const PageContainer = styled(Box)(() => ({
    width: '100%',
    margin: '0',
    padding: '0',
}));

const MobileAboutContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}));

const MobileImagesContainer = styled(Box)(() => ({
    position: 'absolute',
    display: 'flex',
    maxHeight: '230px',
    marginTop: '2.5rem',
}));

const Image1Container = styled(Box)(() => ({
    display: 'flex',
    position: 'relative',
    borderRadius: '12px',
    boxShadow: '0px 3px 5px 1px rgba(0, 0, 0, 0.6), 0px 4px 5px 0px rgba(0, 0, 0, 0.28), 0px 1px 12px 1px rgba(0, 0, 0, 0.4)',
}));

const MobileTextStack = styled(Stack)(() => ({
    display: 'flex',
    justifyContent: 'center',
    width: '84%',
    height: '100%',
    paddingTop: '320px',
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
                        <img className="about-mobile-img" src={daenerys3} />
                    </Image1Container>
                </MobileImagesContainer>

                <MobileTextStack
                    sx={{
                        backgroundColor: darkModeEnabled ? 'rgba(0, 0, 0, 0.7)' : 'rgba(242, 242, 242, 0.7)',
                        boxShadow: darkModeEnabled
                            ? '0px -2px 3px -1px rgba(0, 0, 0, 0.4), 0px -2px 3px 0px rgba(0, 0, 0, 0.28), 0px -4px 6px 0px rgba(0, 0, 0, 0.24)'
                            : '0px -2px 3px -1px rgba(0, 0, 0, 0.4), 0px -2px 3px -1px rgba(0, 0, 0, 0.4), 0px -4px 3px 0px rgba(0, 0, 0, 0.28), 0px 0px 6px 0px rgba(0, 0, 0, 0.24)',
                    }}
                >
                    <Typography
                        textAlign="center"
                        className='aboutme-header'
                        sx={{
                            color: darkModeEnabled ? colors.white : colors.black,
                        }}
                    >
                        About Me
                    </Typography>
                    <Typography
                        className='aboutme-text'
                        sx={{
                            color: darkModeEnabled ? colors.white : colors.black,
                        }}
                    >
                        Hi! I am a reporter at Inside Climate News, where I write the "Today's Climate" newsletter. I write about the most pressing climate-related news happening around the world—from biodiversity loss to extreme weather. My work has appeared in National Geographic, Grist, Time Magazine, Scientific American and more.
                    </Typography>

                    <Box
                        display="flex"
                        alignItems="center"
                        gap={2}
                        sx={{
                            px: 4
                        }}
                    >
                        <Typography
                            className='aboutme-subtext'
                            sx={{
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
                </MobileTextStack>
            </MobileAboutContainer>

            <MobileFooter darkModeEnabled={darkModeEnabled} />

        </PageContainer>
    );
}

export default AboutMeMobile;