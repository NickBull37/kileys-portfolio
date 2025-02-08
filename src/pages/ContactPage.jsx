import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Stack, Typography } from '@mui/material';
import { DesktopNavbar, MobileNavbar, DesktopFooter } from '../components/index';
import { contact, borderImgDark, borderImgLight } from '../utils/constants';
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
    height: '300px',
}));

const ContentContainer = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    height: 'calc(100% - 60px)',
    width: '100%',
}));

const SemiTransparentBox = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    height: '52%',
    padding: '0 8% 0 7%',
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
                <SemiTransparentBox
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
                                <img className="custom-border-img" src={borderImgDark} />
                            </BorderImageContainer>
                            <BorderImageContainer
                                sx={{
                                    display: darkModeEnabled ? 'none' : 'block'
                                }}
                            >
                                <img className="custom-border-img" src={borderImgLight} />
                            </BorderImageContainer>
                        </ImageBox>

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
                                    color: darkModeEnabled ? colors.white : colors.black,
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
                                    sx={{
                                        color: darkModeEnabled ? colors.gray90 : colors.black,
                                    }}
                                />
                                <Typography
                                    variant='body2'
                                    sx={{
                                        fontSize: '1.125rem',
                                        color: darkModeEnabled ? colors.gray90 : colors.black,
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
                                    sx={{
                                        color: darkModeEnabled ? colors.gray90 : colors.black,
                                    }}
                                />
                                <Typography
                                    variant='body2'
                                    sx={{
                                        fontSize: '1.125rem',
                                        color: darkModeEnabled ? colors.gray90 : colors.black,
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
                                    sx={{
                                        color: darkModeEnabled ? colors.gray90 : colors.black,
                                    }}
                                />
                                <Typography
                                    variant='body2'
                                    sx={{
                                        fontSize: '1.125rem',
                                        color: darkModeEnabled ? colors.gray90 : colors.black,
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
                                    sx={{
                                        color: darkModeEnabled ? colors.gray90 : colors.black,
                                    }}
                                />
                                <Typography
                                    variant='body2'
                                    sx={{
                                        fontSize: '1.125rem',
                                        color: darkModeEnabled ? colors.gray90 : colors.black,
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
                                    sx={{
                                        color: darkModeEnabled ? colors.gray90 : colors.black,
                                    }}
                                />
                                <Typography
                                    variant='body2'
                                    sx={{
                                        fontSize: '1.125rem',
                                        color: darkModeEnabled ? colors.gray90 : colors.black,
                                        my: 1,
                                    }}
                                >
                                    ...
                                </Typography>
                            </Box>
                            
                        </TextStack>
                    </Box>

                    <ImageBox>
                        <Image1Container>
                            <img className="contact-img" src={contact} />
                        </Image1Container>
                    </ImageBox>

                </SemiTransparentBox>
            </ContentContainer>

            <DesktopFooter darkModeEnabled={darkModeEnabled} />

        </PageContainer>
    );
}

export default ContactPage;