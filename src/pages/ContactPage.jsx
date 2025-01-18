import React from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/material';
import { DesktopNavbar, MobileNavbar, Footer } from '../components/index';
import colors from '../utils/colors';
import { cat, contact } from '../utils/constants';
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
    alignItems: 'center',
    marginLeft: '3rem',
    //borderRadius: '12px',
}));

const Image1Container = styled(Box)(() => ({
    height: '330px',
    borderRadius: '12px',
    //boxShadow: '0px 3px 5px 1px rgba(0, 0, 0, 0.6), 0px 4px 5px 0px rgba(0, 0, 0, 0.28), 0px 1px 12px 1px rgba(0, 0, 0, 0.4)',
    transition: '0.25s',
    overflow: 'hidden'
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

                    {/* <ImageBox>
                        <Image1Container>
                            <Link to="/written-work">
                                <img className="portfolio-img" src={portfolio} />
                            </Link>
                        </Image1Container>
                    </ImageBox> */}

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


                        {/* <Box
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
                        </Box> */}
                    </TextStack>

                    <ImageBox>
                        <Image1Container>
                            <img className="contact-img" src={contact} />
                        </Image1Container>
                    </ImageBox>

                </BlackBox>
            </ContentContainer>

            <Footer darkModeEnabled={darkModeEnabled} />

        </PageContainer>
    );
}

export default ContactPage;