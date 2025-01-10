import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Stack, Typography, Paper } from '@mui/material';
import { DesktopNavbar, MobileNavbar, Footer } from '../components/index';
import colors from '../utils/colors';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const PageContainer = styled(Box)(() => ({
    width: '100%',
    margin: '0',
    padding: '0',
}));

const StyledPaper = styled(Paper)(() => ({
    boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.4), 0px 4px 5px 0px rgba(0, 0, 0, 0.28), 0px 1px 10px 0px rgba(0, 0, 0, 0.24)',
    padding: "20px",
    color: "#fff",
}));

const ContactPage = ({ darkModeEnabled, setDarkModeEnabled }) => {
    return (
        <PageContainer className='bg-img'>

            <DesktopNavbar darkModeEnabled={darkModeEnabled} setDarkModeEnabled={setDarkModeEnabled} />
            <MobileNavbar darkModeEnabled={darkModeEnabled} setDarkModeEnabled={setDarkModeEnabled} />

            <Stack
                className='contact-stack'
                alignItems="center"
            >

                <StyledPaper
                    className='contact-styled-paper'
                    sx={{
                        backgroundColor: darkModeEnabled ? colors.darkModePage : colors.lightModePage,
                    }}
                >
                    <Stack>
                        <Typography
                            variant='h4'
                            sx={{
                                mb: 2.5,
                                borderBottom: darkModeEnabled ? '1px solid #fff' : '1px solid #000',
                                color: darkModeEnabled ? '#fff' : '#000',
                            }}
                        >
                            Kylie Price
                        </Typography>
                        <Box
                            display="flex"
                            gap={1}
                        >
                            <MailOutlineIcon
                                sx={{
                                    color: darkModeEnabled ? '#fff' : '#000',
                                }}
                            />
                            <Typography
                                sx={{
                                    color: darkModeEnabled ? '#fff' : '#000',
                                }}
                            >
                                kileyjprice@gmail.com
                            </Typography>
                        </Box>
                    </Stack>
                </StyledPaper>
                
            </Stack>

            <Footer darkModeEnabled={darkModeEnabled} />

        </PageContainer>
    );
}

export default ContactPage;