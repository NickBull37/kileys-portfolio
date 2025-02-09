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
                        className='contact-header'
                        sx={{
                            color: darkModeEnabled ? colors.white : colors.black,
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
                            gap={1.25}
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
                            gap={1.25}
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
                            gap={1.25}
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
                            gap={1.25}
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
                            gap={1.25}
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
                    </Stack>
                </MobileTextStack>
            </MobileContactContainer>

            <MobileFooter darkModeEnabled={darkModeEnabled} />

        </PageContainer>
    );
}

export default ContactMobile;