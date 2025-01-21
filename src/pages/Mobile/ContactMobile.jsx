import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Stack, Typography } from '@mui/material';
import { DesktopNavbar, MobileNavbar, MobileFooter } from '../../components/index';
import { contact } from '../../utils/constants';
import colors from '../../utils/colors';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const PageContainer = styled(Box)(() => ({
    width: '100%',
    margin: '0',
    padding: '0',
}));

const Image1Container = styled(Box)(() => ({
    display: 'flex',
    position: 'relative',
    borderRadius: '12px',
    zIndex: '1',
}));

const MobileContactContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}));

const MobileImagesContainer = styled(Box)(() => ({
    position: 'absolute',
    display: 'flex',
    maxHeight: '200px',
}));

const MobileTextStack = styled(Stack)(() => ({
    display: 'flex',
    justifyContent: 'center',
    width: '84%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingTop: '220px',
    paddingBottom: '40px',
}));

const ContactMobile = ({ darkModeEnabled, setDarkModeEnabled }) => {
    return (
        <PageContainer className='bg-img'>

            <DesktopNavbar darkModeEnabled={darkModeEnabled} setDarkModeEnabled={setDarkModeEnabled} />
            <MobileNavbar darkModeEnabled={darkModeEnabled} setDarkModeEnabled={setDarkModeEnabled} />

            <MobileContactContainer>

                <MobileImagesContainer>
                    <Image1Container>
                        <img className="contact-mobile-img" src={contact} />
                    </Image1Container>
                </MobileImagesContainer>

                <MobileTextStack>
                    <Typography
                        textAlign="center"
                        className='feel-free'
                        sx={{
                            fontSize: '5.5rem',
                            lineHeight: '1',
                            color: colors.white,
                            mb: 3,
                        }}
                    >
                        Contact Me
                    </Typography>
                    <Stack
                        sx={{
                            px: 4
                        }}
                    >
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
                    </Stack>
                </MobileTextStack>
            </MobileContactContainer>

            <MobileFooter darkModeEnabled={darkModeEnabled} />

        </PageContainer>
    );
}

export default ContactMobile;