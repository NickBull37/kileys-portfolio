import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Stack, Typography } from '@mui/material';
import { DesktopNavbar, MobileNavbar, DesktopFooter } from '../components/index';
import { contact, circuitBorderDark, circuitBorderLight } from '../utils/constants';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
    display: 'flex',
}));

const BorderImageContainer = styled(Box)(() => ({
    height: '100%',
}));

const Image1Container = styled(Box)(() => ({
    // height: '300px',
}));

const ContentContainer = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    height: 'calc(100% - 60px)',
    width: '100%',
}));

const TextStack = styled(Stack)(() => ({
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    marginRight: '5rem',
}));

const ContactPage = ({ darkModeEnabled, setDarkModeEnabled }) => {
    return (
        <PageContainer className='bg-img'>

            <DesktopNavbar darkModeEnabled={darkModeEnabled} setDarkModeEnabled={setDarkModeEnabled} />
            <MobileNavbar darkModeEnabled={darkModeEnabled} setDarkModeEnabled={setDarkModeEnabled} />

            <ContentContainer>
                <Box
                    className='contact-transparent-box'
                    sx={{
                        backgroundColor: darkModeEnabled ? 'rgba(0, 0, 0, 0.7)' : 'rgba(242, 242, 242, 0.7)',
                        boxShadow: darkModeEnabled
                            ? '0px 2px 3px -1px rgba(0, 0, 0, 0.4), 0px 4px 3px 0px rgba(0, 0, 0, 0.28), 0px 0px 6px 0px rgba(0, 0, 0, 0.24)'
                            : '0px 2px 3px -1px rgba(0, 0, 0, 0.4), 0px -2px 3px -1px rgba(0, 0, 0, 0.4), 0px 4px 3px 0px rgba(0, 0, 0, 0.28), 0px 0px 6px 0px rgba(0, 0, 0, 0.24)',
                    }}
                >

                    <Box display={"flex"}>

                        <ImageBox>
                            <BorderImageContainer
                                sx={{
                                    display: darkModeEnabled ? 'block' : 'none'
                                }}
                            >
                                <img className="custom-border-img" src={circuitBorderDark} />
                            </BorderImageContainer>
                            <BorderImageContainer
                                sx={{
                                    display: darkModeEnabled ? 'none' : 'block'
                                }}
                            >
                                <img className="custom-border-img" src={circuitBorderLight} />
                            </BorderImageContainer>
                        </ImageBox>

                        <TextStack
                            sx={{
                                px: 4
                            }}
                        >
                            <Typography
                                className='contact-header'
                                sx={{
                                    color: darkModeEnabled ? colors.white : colors.black,
                                }}
                            >
                                Contact Me
                            </Typography>

                            <Box
                                display="flex"
                                alignItems="center"
                                gap={1.5}
                            >
                                <MailOutlineRoundedIcon
                                    className='contact-icon'
                                    sx={{
                                        color: darkModeEnabled ? colors.gray90 : colors.black,
                                    }}
                                />
                                <Typography
                                    className='contact-text'
                                    sx={{
                                        color: darkModeEnabled ? colors.gray90 : colors.black,
                                    }}
                                >
                                    kileyjprice@gmail.com
                                </Typography>
                            </Box>
                            <Box
                                display="flex"
                                alignItems="center"
                                gap={1.5}
                            >
                                <PhoneRoundedIcon
                                    className='contact-icon'
                                    sx={{
                                        color: darkModeEnabled ? colors.gray90 : colors.black,
                                    }}
                                />
                                <Typography
                                    className='contact-text'
                                    sx={{
                                        color: darkModeEnabled ? colors.gray90 : colors.black,
                                    }}
                                >
                                    (555) - 555 - 555
                                </Typography>
                            </Box>

                            <Box
                                display="flex"
                                alignItems="center"
                                gap={1.5}
                            >
                                <FacebookIcon
                                    className='contact-icon'
                                    sx={{
                                        color: darkModeEnabled ? colors.gray90 : colors.black,
                                    }}
                                />
                                <Typography
                                    className='contact-text'
                                    sx={{
                                        color: darkModeEnabled ? colors.gray90 : colors.black,
                                    }}
                                >
                                    ...
                                </Typography>
                            </Box>

                            <Box
                                display="flex"
                                alignItems="center"
                                gap={1.5}
                            >
                                <XIcon
                                    className='contact-icon'
                                    sx={{
                                        color: darkModeEnabled ? colors.gray90 : colors.black,
                                    }}
                                />
                                <Typography
                                    className='contact-text'
                                    sx={{
                                        color: darkModeEnabled ? colors.gray90 : colors.black,
                                    }}
                                >
                                    ...
                                </Typography>
                            </Box>

                            <Box
                                display="flex"
                                alignItems="center"
                                gap={1.5}
                            >
                                <LinkedInIcon
                                    className='contact-icon'
                                    sx={{
                                        color: darkModeEnabled ? colors.gray90 : colors.black,
                                    }}
                                />
                                <Typography
                                    className='contact-text'
                                    sx={{
                                        color: darkModeEnabled ? colors.gray90 : colors.black,
                                    }}
                                >
                                    ...
                                </Typography>
                            </Box>
                            
                        </TextStack>
                    </Box>

                    <ImageBox>
                        <Image1Container className='contact-img-container'>
                            <img className="contact-img" src={contact} />
                        </Image1Container>
                    </ImageBox>

                </Box>
            </ContentContainer>

            <DesktopFooter darkModeEnabled={darkModeEnabled} />

        </PageContainer>
    );
}

export default ContactPage;