import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Stack, Typography } from '@mui/material';
import { DesktopNavbar, MobileNavbar, DesktopFooter } from '../components/index';
import { contact } from '../utils/constants';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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

const Image1Container = styled(Box)(() => ({
    height: '300px',
}));

const ContentContainer = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    height: 'calc(100% - 60px)',
    width: '100%',
}));

const BlackBox = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
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

const ContactPage = ({ darkModeEnabled, setDarkModeEnabled }) => {
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
                                fontSize: '5rem',
                                lineHeight: '1',
                                color: darkModeEnabled ? '#fff' : '#fff',
                            }}
                        >
                            Contact
                        </Typography>

                        <Box
                            display="flex"
                            alignItems="center"
                            gap={1}
                        >
                            <MailOutlineRoundedIcon
                                fontSize='small'
                            />
                            <Typography
                                variant='body2'
                                sx={{
                                    fontSize: '1.125rem',
                                    color: darkModeEnabled ? '#e6e6e6' : '#e6e6e6',
                                    my: 1,
                                }}
                            >
                                kileyjprice@gmail.com
                            </Typography>
                        </Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            gap={1}
                        >
                            <PhoneRoundedIcon
                                fontSize='small'
                            />
                            <Typography
                                variant='body2'
                                sx={{
                                    fontSize: '1.125rem',
                                    color: darkModeEnabled ? '#e6e6e6' : '#e6e6e6',
                                    my: 1,
                                }}
                            >
                                (555) - 555 - 555
                            </Typography>
                        </Box>

                        <Box
                            display="flex"
                            alignItems="center"
                            gap={1}
                        >
                            <FacebookIcon
                                fontSize='small'
                            />
                            <Typography
                                variant='body2'
                                sx={{
                                    fontSize: '1.125rem',
                                    color: darkModeEnabled ? '#e6e6e6' : '#e6e6e6',
                                    my: 1,
                                }}
                            >
                                ...
                            </Typography>
                        </Box>

                        <Box
                            display="flex"
                            alignItems="center"
                            gap={1}
                        >
                            <XIcon
                                fontSize='small'
                            />
                            <Typography
                                variant='body2'
                                sx={{
                                    fontSize: '1.125rem',
                                    color: darkModeEnabled ? '#e6e6e6' : '#e6e6e6',
                                    my: 1,
                                }}
                            >
                                ...
                            </Typography>
                        </Box>

                        <Box
                            display="flex"
                            alignItems="center"
                            gap={1}
                        >
                            <LinkedInIcon
                                fontSize='small'
                            />
                            <Typography
                                variant='body2'
                                sx={{
                                    fontSize: '1.125rem',
                                    color: darkModeEnabled ? '#e6e6e6' : '#e6e6e6',
                                    my: 1,
                                }}
                            >
                                ...
                            </Typography>
                        </Box>
                        
                    </TextStack>

                    <ImageBox>
                        <Image1Container>
                            <img className="contact-img" src={contact} />
                        </Image1Container>
                    </ImageBox>

                </BlackBox>
            </ContentContainer>

            <DesktopFooter darkModeEnabled={darkModeEnabled} />

        </PageContainer>
    );
}

export default ContactPage;