import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Stack, Typography, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import colors from '../utils/colors';
import { article1, article2, article3, article4, article5, article6, article7, article8, article9, article10, article11, article12, article13, article14, article15, article16, article17 } from '../utils/constants';
import { DesktopNavbar, MobileNavbar, Footer } from '../components/index';
import { insideClimateNewsDark, insideClimateNewsLight, liveScienceDark, liveScienceLight, mongabayDark, mongabayLight } from '../utils/constants';
import { natGeo, time, e360, slate } from '../utils/constants';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const PageContainer = styled(Box)(() => ({
    width: '100vw',
    height: '100vh',
    margin: '0',
    padding: '0',
}));

const ArticleCard = styled(Card)(() => ({
    display: 'flex',
    backgroundColor: colors.gray25,
    // offset-x offset-y blur-radius spread-radius color
    boxShadow: '0px 2px 3px -1px rgba(0, 0, 0, 0.4), 0px 4px 3px 0px rgba(0, 0, 0, 0.28), 0px 0px 6px 0px rgba(0, 0, 0, 0.24)',
    transition: 'transform 0.3s ease',
    '&:hover': {
        cursor: 'pointer',
        boxShadow: '0px 5px 5px -1px rgba(0, 0, 0, 0.5), 0px 7px 6px 0px rgba(0, 0, 0, 0.35), 0px 3px 12px 0px rgba(0, 0, 0, 0.5)',
        transform: 'translateY(-2px)',
    },
}));

const ArticleContentBox = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
}));

const ArticleContent = styled(CardContent)(() => ({
    flex: '1 0 auto',
    padding: 0,
    padding: '12px 20px 12px 16px',
    '&:last-child': {
        paddingBottom: '8px',
    },
}));

const TitleText = styled(Typography)(() => ({
    fontSize: '1.375rem',
    marginBottom: '12px'
}));

const PreviewText = styled(Typography)(() => ({
    marginBottom: '2px',
    display: '-webkit-box', // Enables a multi-line flexbox container for text
    WebkitBoxOrient: 'vertical', // Vertical orientation for the text
    overflow: 'hidden', // Hides overflowing text
    textOverflow: 'ellipsis', // Ensures text doesn’t break layout
    WebkitLineClamp: 3, // Limits the text to 3 lines
    position: 'relative',
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '2.5em', // Height of the fade effect
        pointerEvents: 'none', // Prevent interaction with the gradient
    },
}));

const SubText = styled(Typography)(() => ({
    marginBottom: '8px',
}));

const WrittenWorkPage = ({ darkModeEnabled, setDarkModeEnabled }) => {    

    const shareUrl = 'https://nickbull37.github.io/kileys-portfolio/#/written-work';

    const handleFaceBookShare = () => {
        const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        window.open(facebookShareUrl, '_blank', 'noopener,noreferrer');
    };

    const handleLinkedInShare = () => {
        const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        window.open(linkedInShareUrl, '_blank', 'noopener,noreferrer');
    };

    let text = null;
    let hashtags = null;
    const handleTwitterShare = () => {
        const twitterShareUrl = `https://twitter.com/intent/tweet?${new URLSearchParams({
            text: text || '',
            url: shareUrl,
            hashtags: hashtags || '',
        }).toString()}`;
        window.open(twitterShareUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <Box
            sx={{
                bgcolor: darkModeEnabled ? colors.darkModeBg : colors.lightModeBg,
            }}
        >
            <DesktopNavbar darkModeEnabled={darkModeEnabled} setDarkModeEnabled={setDarkModeEnabled} />
            <MobileNavbar darkModeEnabled={darkModeEnabled} setDarkModeEnabled={setDarkModeEnabled} />

            {/* ----------------------------- SELECTED ----------------------------- */}
            <Box
                sx={{
                    px: { xs: 3, md: 38 },
                    mt: { xs: 0, md: 6 },
                    mb: 3,
                    mx: 0,
                }}
            >
                <Typography
                    sx={{
                        color: darkModeEnabled ? colors.white : colors.black,
                        fontSize: { xs: '2.25rem', md: '3rem' },
                        fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
                        lineHeight: '1.167',
                        letterSpacing: '0em',
                        mb: 0.75
                    }}
                >
                    Inside Climate News
                </Typography>
                <Typography
                    sx={{
                        color: darkModeEnabled ? colors.white : colors.black,
                    }}
                >
                    <i>To read more, subscribe to ICN's "Today's Climate" newsletter <u><a href="https://insideclimatenews.org/newsletter/" target="_blank" rel="noopener noreferrer">here</a></u>.</i>
                </Typography>
            </Box>
            <Stack
                gap={5}
                sx={{
                    margin: 0,
                    px: { xs: 3, md: 38 },

                }}
            >
                <a
                    href="https://insideclimatenews.org/news/20102024/lobster-traps-harm-right-whales/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ArticleCard
                        sx={{
                            flexDirection: { xs: 'column', md: 'row' },
                            backgroundColor: darkModeEnabled ? colors.darkModePage : colors.lightModePage,
                        }}
                    >
                        <CardMedia
                            component="img"
                            sx={{
                                width: { xs: 'auto', md: 200 },
                            }}
                            image={article1}
                            alt="Live from space album cover"
                        />
                        <ArticleContentBox>
                            <ArticleContent>
                                <TitleText
                                    component="div"
                                    variant="h5"
                                    sx={{
                                        color: darkModeEnabled ? colors.white : colors.black,
                                    }}
                                >
                                    The Futures of Right Whales and Lobstermen Are Entangled. Could High-Tech Gear Help Save Them Both?
                                </TitleText>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    gap={1}
                                    sx={{
                                        mb: 1.5
                                    }}
                                >
                                    <img className="climate-news-vector" src={darkModeEnabled ? insideClimateNewsDark : insideClimateNewsLight}></img>
                                </Box>
                                <SubText
                                    variant="subtitle1"
                                    component="div"
                                    sx={{
                                        color: darkModeEnabled ? '#e6e6e6' : '#000',
                                    }}
                                >
                                    October 20, 2024&nbsp;&nbsp;-&nbsp;&nbsp;<i>9 min read</i>
                                </SubText>
                                <PreviewText
                                    variant='body2'
                                    sx={{
                                        color: darkModeEnabled ? colors.gray80 : colors.gray20,
                                        backgroundColor: darkModeEnabled ? colors.darkModePage : colors.lightModePage,
                                        '&::after': {
                                            background: darkModeEnabled 
                                                ? `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${colors.darkModePage} 100%)` 
                                                : `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${colors.lightModePage} 100%)`,
                                        },
                                    }}
                                >
                                    It was a blessedly calm day as Scott Landry's team set out in their inflatable boat to scan the glistening waters of Great South Channel between Rhode Island and Massachusetts for an endangered whale affectionately known as Wart. They were on a mission to save her life. The group, from the nonprofit Center for Coastal Studies located in nearby Provincetown, had spent the better part of three years monitoring Wart after an aerial team spotted the North Atlantic right whale with a large piece of rope lodged in her mouth.
                                </PreviewText>
                            </ArticleContent>
                        </ArticleContentBox>
                    </ArticleCard>
                </a>

                <a
                    href="https://insideclimatenews.org/news/20092024/todays-climate-electric-vehicle-charging-outpost/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ArticleCard
                        sx={{
                            flexDirection: { xs: 'column', md: 'row' },
                            backgroundColor: darkModeEnabled ? colors.darkModePage : colors.lightModePage,
                        }}
                    >
                        <CardMedia
                            component="img"
                            sx={{
                                width: { xs: 'auto', md: 200 },
                            }}
                            image={article2}
                            alt="Live from space album cover"
                        />
                        <ArticleContentBox>
                            <ArticleContent>
                                <TitleText
                                    component="div"
                                    variant="h5"
                                    sx={{
                                        color: darkModeEnabled ? '#fff' : '#000',
                                    }}
                                >
                                    What Could EV Charging Look Like as More Options Emerge? Here's One Answer
                                </TitleText>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    gap={1}
                                    sx={{
                                        mb: 1.5
                                    }}
                                >
                                    <img className="climate-news-vector" src={darkModeEnabled ? insideClimateNewsDark : insideClimateNewsLight}></img>
                                </Box>
                                <SubText
                                    variant="subtitle1"
                                    component="div"
                                    sx={{
                                        color: darkModeEnabled ? '#e6e6e6' : '#000',
                                    }}
                                >
                                    September 20, 2024&nbsp;&nbsp;-&nbsp;&nbsp;<i>8 min read</i>
                                </SubText>
                                <PreviewText
                                    variant='body2'
                                    sx={{
                                        color: darkModeEnabled ? colors.gray80 : colors.gray20,
                                        backgroundColor: darkModeEnabled ? colors.darkModePage : colors.lightModePage,
                                        '&::after': {
                                            background: darkModeEnabled 
                                                ? `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${colors.darkModePage} 100%)` 
                                                : `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${colors.lightModePage} 100%)`,
                                        },
                                    }}
                                >
                                    For Brian Stewart, the typical trip to charge his electric vehicle brings him to the back of a gas station. He waits out the clock by stretching his legs, catching up on emails or running into the convenience store to grab a snack. But this time, on the way to a balmy August hike, Stewart found his way to EV manufacturer Rivian’s new “Charging Outpost,” located in Groveland, California—about 25 miles outside Yosemite National Park. As the car sat at one of the five fast chargers on site, he worked on his laptop on a couch inside the space, which has local coffee on tap, a build-your-own trail mix station, free Wi-Fi and air conditioning. 
                                </PreviewText>
                            </ArticleContent>
                        </ArticleContentBox>
                    </ArticleCard>
                </a>

                <a
                    href="https://insideclimatenews.org/news/09022024/tijuana-river-spewing-wastewater-into-san-diego-amid-historic-storms/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ArticleCard
                        sx={{
                            flexDirection: { xs: 'column', md: 'row' },
                            backgroundColor: darkModeEnabled ? colors.darkModePage : colors.lightModePage,
                        }}
                    >
                        <CardMedia
                            component="img"
                            sx={{
                                width: { xs: 'auto', md: 200 },
                            }}
                            image={article3}
                            alt="Live from space album cover"
                        />
                        <ArticleContentBox>
                            <ArticleContent>
                                <TitleText
                                    component="div"
                                    variant="h5"
                                    sx={{
                                        color: darkModeEnabled ? '#fff' : '#000',
                                    }}
                                >
                                    Sewage Across Borders: The Tijuana River Is Spewing Wastewater Into San Diego Amid Historic Storms, Which Could Threaten Public Health
                                </TitleText>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    gap={1}
                                    sx={{
                                        mb: 1.5
                                    }}
                                >
                                    <img className="climate-news-vector" src={darkModeEnabled ? insideClimateNewsDark : insideClimateNewsLight}></img>
                                </Box>
                                <SubText
                                    variant="subtitle1"
                                    component="div"
                                    sx={{
                                        color: darkModeEnabled ? '#e6e6e6' : '#000',
                                    }}
                                >
                                    February 9, 2024&nbsp;&nbsp;-&nbsp;&nbsp;<i>9 min read</i>
                                </SubText>
                                <PreviewText
                                    variant='body2'
                                    sx={{
                                        color: darkModeEnabled ? colors.gray80 : colors.gray20,
                                        backgroundColor: darkModeEnabled ? colors.darkModePage : colors.lightModePage,
                                        '&::after': {
                                            background: darkModeEnabled 
                                                ? `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${colors.darkModePage} 100%)` 
                                                : `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${colors.lightModePage} 100%)`,
                                        },
                                    }}
                                >
                                    For Jose Cariman, the smell permeating his house is worst at night. A retired, stay-at-home dad, Cariman lives in a single-family home in the Coral Gate community of San Diego's San Ysidro District, about 2 miles from Tijuana—close enough that his wife's family can walk over the border from Mexico for dinner. "The only problem,'' he said on Tuesday, "is I didn't realize when I bought the house, the proximity to the Tijuana River and all the complications that come with it."
                                </PreviewText>
                            </ArticleContent>
                        </ArticleContentBox>
                    </ArticleCard>
                </a>

                <a
                    href="https://insideclimatenews.org/news/10102023/vessel-strikes-on-whales-are-worsening-with-warming/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ArticleCard
                        sx={{
                            flexDirection: { xs: 'column', md: 'row' },
                            backgroundColor: darkModeEnabled ? colors.darkModePage : colors.lightModePage,
                        }}
                    >
                        <CardMedia
                            component="img"
                            sx={{
                                width: { xs: 'auto', md: 200 },
                            }}
                            image={article4}
                            alt="Live from space album cover"
                        />
                        <ArticleContentBox>
                            <ArticleContent>
                                <TitleText
                                    component="div"
                                    variant="h5"
                                    sx={{
                                        color: darkModeEnabled ? '#fff' : '#000',
                                    }}
                                >
                                    Vessel Strikes on Whales Are Increasing With Warming. Can the Shipping Industry Slow Down to Spare Them?
                                </TitleText>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    gap={1}
                                    sx={{
                                        mb: 1.5
                                    }}
                                >
                                    <img className="climate-news-vector" src={darkModeEnabled ? insideClimateNewsDark : insideClimateNewsLight}></img>
                                </Box>
                                <SubText
                                    variant="subtitle1"
                                    component="div"
                                    sx={{
                                        color: darkModeEnabled ? '#e6e6e6' : '#000',
                                    }}
                                >
                                    October 10, 2023&nbsp;&nbsp;-&nbsp;&nbsp;<i>9 min read</i>
                                </SubText>
                                <PreviewText
                                    variant='body2'
                                    sx={{
                                        color: darkModeEnabled ? colors.gray80 : colors.gray20,
                                        backgroundColor: darkModeEnabled ? colors.darkModePage : colors.lightModePage,
                                        '&::after': {
                                            background: darkModeEnabled 
                                                ? `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${colors.darkModePage} 100%)` 
                                                : `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${colors.lightModePage} 100%)`,
                                        },
                                    }}
                                >
                                    Last March, a California giant perished. The 49-foot humpback nicknamed Fran washed up on a beach in the coastal city of Half Moon Bay. Fran had visited these waters for the entirety of her 17-year life, easily recognized by Californians due to the distinctive markings and shape of her tail. This massive marine mammal provided crucial data to help scientists understand the intricacies of humpback feeding and breeding behavior—information crucial to the long-term survival of this enigmatic species.
                                </PreviewText>
                            </ArticleContent>
                        </ArticleContentBox>
                    </ArticleCard>
                </a>

                <a
                    href="https://insideclimatenews.org/news/09072024/todays-climate-tourism-heat-health-risks/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ArticleCard
                        sx={{
                            flexDirection: { xs: 'column', md: 'row' },
                            backgroundColor: darkModeEnabled ? colors.darkModePage : colors.lightModePage,
                        }}
                    >
                        <CardMedia
                            component="img"
                            sx={{
                                width: { xs: 'auto', md: 200 },
                            }}
                            image={article5}
                            alt="Live from space album cover"
                        />
                        <ArticleContentBox>
                            <ArticleContent>
                                <TitleText
                                    component="div"
                                    variant="h5"
                                    sx={{
                                        color: darkModeEnabled ? '#fff' : '#000',
                                    }}
                                >
                                    Tourists Are Feeling the Heat—and Their Bodies May Not Be Able to Catch Up
                                </TitleText>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    gap={1}
                                    sx={{
                                        mb: 1.5
                                    }}
                                >
                                    <img className="climate-news-vector" src={darkModeEnabled ? insideClimateNewsDark : insideClimateNewsLight}></img>
                                </Box>
                                <SubText
                                    variant="subtitle1"
                                    component="div"
                                    sx={{
                                        color: darkModeEnabled ? '#e6e6e6' : '#000',
                                    }}
                                >
                                    July 9, 2024&nbsp;&nbsp;-&nbsp;&nbsp;<i>9 min read</i>
                                </SubText>
                                <PreviewText
                                    variant='body2'
                                    sx={{
                                        color: darkModeEnabled ? colors.gray80 : colors.gray20,
                                        backgroundColor: darkModeEnabled ? colors.darkModePage : colors.lightModePage,
                                        '&::after': {
                                            background: darkModeEnabled 
                                                ? `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${colors.darkModePage} 100%)` 
                                                : `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${colors.lightModePage} 100%)`,
                                        },
                                    }}
                                >
                                    Throughout June, six tourists died while visiting Greece during an unusually early summer heat wave. While these cases are still being investigated, authorities say that heat stress likely played a part in each of their deaths, as temperatures soared over 104 degrees Fahrenheit. Heat-related deaths are increasingly common with climate change, and high temperatures could pose a particular risk to tourists, who are often both mentally and physically unprepared for the heat they may encounter in a new place, experts say.
                                </PreviewText>
                            </ArticleContent>
                        </ArticleContentBox>
                    </ArticleCard>
                </a>

                <a
                    href="https://insideclimatenews.org/news/29102024/todays-climate-extreme-weather-car-insurance/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ArticleCard
                        sx={{
                            flexDirection: { xs: 'column', md: 'row' },
                            backgroundColor: darkModeEnabled ? colors.darkModePage : colors.lightModePage,
                        }}
                    >
                        <CardMedia
                            component="img"
                            sx={{
                                width: { xs: 'auto', md: 200 },
                            }}
                            image={article6}
                            alt="Live from space album cover"
                        />
                        <ArticleContentBox>
                            <ArticleContent>
                                <TitleText
                                    component="div"
                                    variant="h5"
                                    sx={{
                                        color: darkModeEnabled ? '#fff' : '#000',
                                    }}
                                >
                                    Climate-Fueled Extreme Weather Is Hiking up Car Insurance Rates
                                </TitleText>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    gap={1}
                                    sx={{
                                        mb: 1.5
                                    }}
                                >
                                    <img className="climate-news-vector" src={darkModeEnabled ? insideClimateNewsDark : insideClimateNewsLight}></img>
                                </Box>
                                <SubText
                                    variant="subtitle1"
                                    component="div"
                                    sx={{
                                        color: darkModeEnabled ? '#e6e6e6' : '#000',
                                    }}
                                >
                                    October 29, 2024&nbsp;&nbsp;-&nbsp;&nbsp;<i>9 min read</i>
                                </SubText>
                                <PreviewText
                                    variant='body2'
                                    sx={{
                                        color: darkModeEnabled ? colors.gray80 : colors.gray20,
                                        backgroundColor: darkModeEnabled ? colors.darkModePage : colors.lightModePage,
                                        '&::after': {
                                            background: darkModeEnabled 
                                                ? `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${colors.darkModePage} 100%)` 
                                                : `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${colors.lightModePage} 100%)`,
                                        },
                                    }}
                                >
                                    As climate change accelerates, hurricanes, wildfires and hail storms pound the U.S. with growing vigor—and the insurance market is struggling to foot the bill of the damages they leave behind for customers. In 2023 alone, extreme weather cost the U.S. more than $92 billion. And it’s not just home insurance providers that are hiking rates.
                                </PreviewText>
                            </ArticleContent>
                        </ArticleContentBox>
                    </ArticleCard>
                </a>

                <a
                    href="https://insideclimatenews.org/news/04102023/usfws-biobanking-to-help-endangered-species/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ArticleCard
                        sx={{
                            flexDirection: { xs: 'column', md: 'row' },
                            backgroundColor: darkModeEnabled ? colors.darkModePage : colors.lightModePage,
                        }}
                    >
                        <CardMedia
                            component="img"
                            sx={{
                                width: { xs: 'auto', md: 200 },
                            }}
                            image={article7}
                            alt="Live from space album cover"
                        />
                        <ArticleContentBox>
                            <ArticleContent>
                                <TitleText
                                    component="div"
                                    variant="h5"
                                    sx={{
                                        color: darkModeEnabled ? '#fff' : '#000',
                                    }}
                                >
                                    USFWS Is Creating a Frozen Library of Biodiversity to Help Endangered Species
                                </TitleText>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    gap={1}
                                    sx={{
                                        mb: 1.5
                                    }}
                                >
                                    <img className="climate-news-vector" src={darkModeEnabled ? insideClimateNewsDark : insideClimateNewsLight}></img>
                                </Box>
                                <SubText
                                    variant="subtitle1"
                                    component="div"
                                    sx={{
                                        color: darkModeEnabled ? '#e6e6e6' : '#000',
                                    }}
                                >
                                    October 4, 2023&nbsp;&nbsp;-&nbsp;&nbsp;<i>9 min read</i>
                                </SubText>
                                <PreviewText
                                    variant='body2'
                                    sx={{
                                        color: darkModeEnabled ? colors.gray80 : colors.gray20,
                                        backgroundColor: darkModeEnabled ? colors.darkModePage : colors.lightModePage,
                                        '&::after': {
                                            background: darkModeEnabled 
                                                ? `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${colors.darkModePage} 100%)` 
                                                : `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${colors.lightModePage} 100%)`,
                                        },
                                    }}
                                >
                                    The world's wildlife are facing a barrage of threats caused by climate change, from the loss of suitable habitat to dwindling food supplies. As a result, endangered species across the U.S. are edging closer to extinction at alarming rates—and if they disappear, critical genetic information could vanish with them. In a new initiative announced on Tuesday, the U.S. Fish & Wildlife Service is working with the nonprofit Revive & Restore and other partners to create a "genetic library" of the country's endangered species—before it's too late.
                                </PreviewText>
                            </ArticleContent>
                        </ArticleContentBox>
                    </ArticleCard>
                </a>

                <a
                    href="https://insideclimatenews.org/news/01102024/hurricane-helene-lays-bare-the-growing-threat-of-inland-flooding/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ArticleCard
                        sx={{
                            flexDirection: { xs: 'column', md: 'row' },
                            backgroundColor: darkModeEnabled ? colors.darkModePage : colors.lightModePage,
                        }}
                    >
                        <CardMedia
                            component="img"
                            sx={{
                                width: { xs: 'auto', md: 200 },
                            }}
                            image={article8}
                            alt="Live from space album cover"
                        />
                        <ArticleContentBox>
                            <ArticleContent>
                                <TitleText
                                    component="div"
                                    variant="h5"
                                    sx={{
                                        color: darkModeEnabled ? '#fff' : '#000',
                                    }}
                                >
                                    Hurricane Helene Lays Bare the Growing Threat of Inland Flooding
                                </TitleText>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    gap={1}
                                    sx={{
                                        mb: 1.5
                                    }}
                                >
                                    <img className="climate-news-vector" src={darkModeEnabled ? insideClimateNewsDark : insideClimateNewsLight}></img>
                                </Box>
                                <SubText
                                    variant="subtitle1"
                                    component="div"
                                    sx={{
                                        color: darkModeEnabled ? '#e6e6e6' : '#000',
                                    }}
                                >
                                    October 1, 2024&nbsp;&nbsp;-&nbsp;&nbsp;<i>9 min read</i>
                                </SubText>
                                <PreviewText
                                    variant='body2'
                                    sx={{
                                        color: darkModeEnabled ? colors.gray80 : colors.gray20,
                                        backgroundColor: darkModeEnabled ? colors.darkModePage : colors.lightModePage,
                                        '&::after': {
                                            background: darkModeEnabled 
                                                ? `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${colors.darkModePage} 100%)` 
                                                : `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${colors.lightModePage} 100%)`,
                                        },
                                    }}
                                >
                                    Six months ago, Craig Colten moved from Baton Rouge, Louisiana, to Asheville, North Carolina—a historic city tucked in the Blue Ridge Mountains. He'd fallen in love with the region over the summers while in college and was eager to evade the near-constant threat of hurricanes that loomed over his life in Louisiana. "I moved up here as a climate migrant," he told me, echoing the sentiment of many other recent Asheville transplants.
                                </PreviewText>
                            </ArticleContent>
                        </ArticleContentBox>
                    </ArticleCard>
                </a>

                <a
                    href="https://insideclimatenews.org/news/31052024/todays-climate-medical-school-health-students/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ArticleCard
                        sx={{
                            flexDirection: { xs: 'column', md: 'row' },
                            backgroundColor: darkModeEnabled ? colors.darkModePage : colors.lightModePage,
                        }}
                    >
                        <CardMedia
                            component="img"
                            sx={{
                                width: { xs: 'auto', md: 200 },
                            }}
                            image={article9}
                            alt="Live from space album cover"
                        />
                        <ArticleContentBox>
                            <ArticleContent>
                                <TitleText
                                    component="div"
                                    variant="h5"
                                    sx={{
                                        color: darkModeEnabled ? '#fff' : '#000',
                                    }}
                                >
                                    Medical Schools Around the World Are Expanding Their 'Climate Change Curriculums'
                                </TitleText>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    gap={1}
                                    sx={{
                                        mb: 1.5
                                    }}
                                >
                                    <img className="climate-news-vector" src={darkModeEnabled ? insideClimateNewsDark : insideClimateNewsLight}></img>
                                </Box>
                                <SubText
                                    variant="subtitle1"
                                    component="div"
                                    sx={{
                                        color: darkModeEnabled ? '#e6e6e6' : '#000',
                                    }}
                                >
                                    May 31, 2024&nbsp;&nbsp;-&nbsp;&nbsp;<i>9 min read</i>
                                </SubText>
                                <PreviewText
                                    variant='body2'
                                    sx={{
                                        color: darkModeEnabled ? colors.gray80 : colors.gray20,
                                        backgroundColor: darkModeEnabled ? colors.darkModePage : colors.lightModePage,
                                        '&::after': {
                                            background: darkModeEnabled 
                                                ? `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${colors.darkModePage} 100%)` 
                                                : `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${colors.lightModePage} 100%)`,
                                        },
                                    }}
                                >
                                    Three years ago, a group of eco-conscious students at Harvard Medical School conducted a poll with their fellow classmates and found that there was strong interest in ramping up climate health education in their courses. With support from faculty, the Students for Environmental Awareness in Medicine (SEAM) forged a path toward a full "climate change curriculum" for first year medical students at Harvard, which was implemented in 2022.
                                </PreviewText>
                            </ArticleContent>
                        </ArticleContentBox>
                    </ArticleCard>
                </a>
            </Stack>

            {/* ----------------------------- FREELANCE ----------------------------- */}
            <Box
                sx={{
                    margin: 0,
                    px: { xs: 3, md: 38 },
                    mt: 10,
                    mb: 3,
                }}
            >
                <Typography
                    sx={{
                        color: darkModeEnabled ? '#fff' : '#000',
                        fontSize: { xs: '2.25rem', md: '3rem' },
                        fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
                        lineHeight: '1.167',
                        letterSpacing: '0em',
                    }}
                >
                    Freelance
                </Typography>
            </Box>
            <Stack
                gap={5}
                sx={{
                    margin: 0,
                    px: { xs: 3, md: 38 },
                }}
            >
                <a
                    href="https://www.nationalgeographic.com/animals/article/deep-sea-animals-new-species-mining"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ArticleCard
                        sx={{
                            flexDirection: { xs: 'column', md: 'row' },
                            backgroundColor: darkModeEnabled ? colors.darkModePage : colors.lightModePage,
                        }}
                    >
                        <CardMedia
                            component="img"
                            sx={{
                                width: { xs: 'auto', md: 200 },
                            }}
                            image={article10}
                            alt="Live from space album cover"
                        />
                        <ArticleContentBox>
                            <ArticleContent>
                                <TitleText
                                    component="div"
                                    variant="h5"
                                    sx={{
                                        color: darkModeEnabled ? '#fff' : '#000',
                                    }}
                                >
                                    These deep-sea animals are new to science—and already at risk
                                </TitleText>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    gap={1}
                                    sx={{
                                        mb: 1.5
                                    }}
                                >
                                    <img className="natgeo-vector" src={natGeo}></img>
                                </Box>
                                <SubText
                                    variant="subtitle1"
                                    component="div"
                                    sx={{
                                        color: darkModeEnabled ? '#e6e6e6' : '#000',
                                    }}
                                >
                                    May 25, 2023&nbsp;&nbsp;-&nbsp;&nbsp;<i>9 min read</i>
                                </SubText>
                                <PreviewText
                                    variant='body2'
                                    sx={{
                                        color: darkModeEnabled ? colors.gray80 : colors.gray20,
                                        backgroundColor: darkModeEnabled ? colors.darkModePage : colors.lightModePage,
                                        '&::after': {
                                            background: darkModeEnabled 
                                                ? `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${colors.darkModePage} 100%)` 
                                                : `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${colors.lightModePage} 100%)`,
                                        },
                                    }}
                                >
                                    Spanning 1.7 million square miles of ocean from Hawaii to Mexico, a hidden underwater world teems with life. More than 5,500 deep-sea species reside in the area of the Pacific known as the Clarion Clipperton Zone, and roughly 90 percent of them have yet to be described by science, according to a new study.
                                </PreviewText>
                            </ArticleContent>
                        </ArticleContentBox>
                    </ArticleCard>
                </a>

                <a
                    href="https://time.com/6556464/parametric-insurance-climate-2/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ArticleCard
                        sx={{
                            flexDirection: { xs: 'column', md: 'row' },
                            backgroundColor: darkModeEnabled ? colors.darkModePage : colors.lightModePage,
                        }}
                    >
                        <CardMedia
                            component="img"
                            sx={{
                                width: { xs: 'auto', md: 200 },
                            }}
                            image={article11}
                            alt="Live from space album cover"
                        />
                        <ArticleContentBox>
                            <ArticleContent>
                                <TitleText
                                    component="div"
                                    variant="h5"
                                    sx={{
                                        color: darkModeEnabled ? '#fff' : '#000',
                                    }}
                                >
                                    The Company Working to Make Flood Insurance Climate-Proof
                                </TitleText>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    gap={1}
                                    sx={{
                                        mb: 1.5
                                    }}
                                >
                                    <img className="time-vector" src={time}></img>
                                </Box>
                                <SubText
                                    variant="subtitle1"
                                    component="div"
                                    sx={{
                                        color: darkModeEnabled ? '#e6e6e6' : '#000',
                                    }}
                                >
                                    January 17, 2024&nbsp;&nbsp;-&nbsp;&nbsp;<i>6 min read</i>
                                </SubText>
                                <PreviewText
                                    variant='body2'
                                    sx={{
                                        color: darkModeEnabled ? colors.gray80 : colors.gray20,
                                        backgroundColor: darkModeEnabled ? colors.darkModePage : colors.lightModePage,
                                        '&::after': {
                                            background: darkModeEnabled 
                                                ? `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${colors.darkModePage} 100%)` 
                                                : `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${colors.lightModePage} 100%)`,
                                        },
                                    }}
                                >
                                    When Storm Eva hit the United Kingdom in 2015, a surge of rain and river water inundated the streets of the small town of Tadcaster in northeastern England. Along with causing the town's main bridge to partially collapse, water poured into the Tadcaster Medical Centre, the only hospital in the area. The destruction from this flooding and recovery efforts at the hospital triggered an insurance claim of some £500,000 (over $750,000 at the time), says Tadcaster Medical practice manager Sarah Botherway.
                                </PreviewText>
                            </ArticleContent>
                        </ArticleContentBox>
                    </ArticleCard>
                </a>

                <a
                    href="https://time.com/6588094/wildfires-hidden-toxins-insurance/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ArticleCard
                        sx={{
                            flexDirection: { xs: 'column', md: 'row' },
                            backgroundColor: darkModeEnabled ? colors.darkModePage : colors.lightModePage,
                        }}
                    >
                        <CardMedia
                            component="img"
                            sx={{
                                width: { xs: 'auto', md: 200 },
                            }}
                            image={article12}
                            alt="Live from space album cover"
                        />
                        <ArticleContentBox>
                            <ArticleContent>
                                <TitleText
                                    component="div"
                                    variant="h5"
                                    sx={{
                                        color: darkModeEnabled ? '#fff' : '#000',
                                    }}
                                >
                                    Wildfires Leave Toxins in Homes. Insurance Companies Can Do More About It
                                </TitleText>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    gap={1}
                                    sx={{
                                        mb: 1.5
                                    }}
                                >
                                    <img className="time-vector" src={time}></img>
                                </Box>
                                <SubText
                                    variant="subtitle1"
                                    component="div"
                                    sx={{
                                        color: darkModeEnabled ? '#e6e6e6' : '#000',
                                    }}
                                >
                                    January 25, 2024&nbsp;&nbsp;-&nbsp;&nbsp;<i>7 min read</i>
                                </SubText>
                                <PreviewText
                                    variant='body2'
                                    sx={{
                                        color: darkModeEnabled ? colors.gray80 : colors.gray20,
                                        backgroundColor: darkModeEnabled ? colors.darkModePage : colors.lightModePage,
                                        '&::after': {
                                            background: darkModeEnabled 
                                                ? `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${colors.darkModePage} 100%)` 
                                                : `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${colors.lightModePage} 100%)`,
                                        },
                                    }}
                                >
                                    When Lanene and Peter Dente first saw the haze building outside of their home on Dec. 30, 2021, they thought it was a dust storm, which can be common during winters in Boulder, Colo. Then Peter stepped outside, and the smell of smoke slammed into his nostrils. The retired couple confirmed with the police that a fire was ripping through the area and they needed to evacuate. So they called their son, loaded up the car with a few belongings, and turned back one last time to see flames licking over their back fence.
                                </PreviewText>
                            </ArticleContent>
                        </ArticleContentBox>
                    </ArticleCard>
                </a>

                <a
                    href="https://e360.yale.edu/features/sea-cucumbers-fish-farms-excrement"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ArticleCard
                        sx={{
                            flexDirection: { xs: 'column', md: 'row' },
                            backgroundColor: darkModeEnabled ? colors.darkModePage : colors.lightModePage,
                        }}
                    >
                        <CardMedia
                            component="img"
                            sx={{
                                width: { xs: 'auto', md: 200 },
                            }}
                            image={article13}
                            alt="Live from space album cover"
                        />
                        <ArticleContentBox>
                            <ArticleContent>
                                <TitleText
                                    component="div"
                                    variant="h5"
                                    sx={{
                                        color: darkModeEnabled ? '#fff' : '#000',
                                    }}
                                >
                                    Are Sea Cucumbers a Cleanup Solution to Fish Farm Pollution?
                                </TitleText>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    gap={1}
                                    sx={{
                                        mb: 1.5
                                    }}
                                >
                                    <img className="natgeo-vector" src={e360}></img>
                                </Box>
                                <SubText
                                    variant="subtitle1"
                                    component="div"
                                    sx={{
                                        color: darkModeEnabled ? '#e6e6e6' : '#000',
                                    }}
                                >
                                    May 25, 2023&nbsp;&nbsp;-&nbsp;&nbsp;<i>5 min read</i>
                                </SubText>
                                <PreviewText
                                    variant='body2'
                                    sx={{
                                        color: darkModeEnabled ? colors.gray80 : colors.gray20,
                                        backgroundColor: darkModeEnabled ? colors.darkModePage : colors.lightModePage,
                                        '&::after': {
                                            background: darkModeEnabled 
                                                ? `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${colors.darkModePage} 100%)` 
                                                : `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${colors.lightModePage} 100%)`,
                                        },
                                    }}
                                >
                                    Off the coast of the Hawaiian Island of Kauai, an underwater metropolis bustles. Sea turtles glide lazily through the surf while schools of fluorescent yellow butterflyfish weave between basketball-size sea urchins and sharp corals. But Dave Anderson isn't distracted by the otherworldly charm of the coral reef — he's here on a mission. Around 70 feet below the surface, he finds his prize: a red sea cucumber.
                                </PreviewText>
                            </ArticleContent>
                        </ArticleContentBox>
                    </ArticleCard>
                </a>

                <a
                    href="https://www.livescience.com/planet-earth/climate-change/mining-crystals-locked-in-the-deep-sea-could-help-fight-climate-change-it-may-also-destroy-earths-last-untouched-ecosystem"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ArticleCard
                        sx={{
                            flexDirection: { xs: 'column', md: 'row' },
                            backgroundColor: darkModeEnabled ? colors.darkModePage : colors.lightModePage,
                        }}
                    >
                        <CardMedia
                            component="img"
                            sx={{
                                width: { xs: 'auto', md: 200 },
                            }}
                            image={article14}
                            alt="Live from space album cover"
                        />
                        <ArticleContentBox>
                            <ArticleContent>
                                <TitleText
                                    component="div"
                                    variant="h5"
                                    sx={{
                                        color: darkModeEnabled ? '#fff' : '#000',
                                    }}
                                >
                                    Will the drive for EVs destroy Earth's last untouched ecosystem?
                                </TitleText>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    gap={1}
                                    sx={{
                                        mb: 1.5
                                    }}
                                >
                                    <img className="livescience-vector" src={darkModeEnabled ? liveScienceDark : liveScienceLight}></img>
                                </Box>
                                <SubText
                                    variant="subtitle1"
                                    component="div"
                                    sx={{
                                        color: darkModeEnabled ? '#e6e6e6' : '#000',
                                    }}
                                >
                                    July 15, 2023&nbsp;&nbsp;-&nbsp;&nbsp;<i>7 min read</i>
                                </SubText>
                                <PreviewText
                                    variant='body2'
                                    sx={{
                                        color: darkModeEnabled ? colors.gray80 : colors.gray20,
                                        backgroundColor: darkModeEnabled ? colors.darkModePage : colors.lightModePage,
                                        '&::after': {
                                            background: darkModeEnabled 
                                                ? `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${colors.darkModePage} 100%)` 
                                                : `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${colors.lightModePage} 100%)`,
                                        },
                                    }}
                                >
                                    To prevent a climate catastrophe, the world must dramatically slash its carbon emissions. But creating enough batteries to power the electric vehicles (EVs) needed for a carbon-free future will require a massive scale-up in our supply of minerals such as copper, cobalt and manganese. Countries are scrambling to mine these precious materials from the earth, digging everywhere from the rainforests in the Democratic Republic of the Congo to Indonesia.
                                </PreviewText>
                            </ArticleContent>
                        </ArticleContentBox>
                    </ArticleCard>
                </a>

                <a
                    href="https://slate.com/technology/2024/01/the-dark-side-of-ocean-cleanup-technology.html"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ArticleCard
                        sx={{
                            flexDirection: { xs: 'column', md: 'row' },
                            backgroundColor: darkModeEnabled ? colors.darkModePage : colors.lightModePage,
                        }}
                    >
                        <CardMedia
                            component="img"
                            sx={{
                                width: { xs: 'auto', md: 200 },
                            }}
                            image={article15}
                            alt="Live from space album cover"
                        />
                        <ArticleContentBox>
                            <ArticleContent>
                                <TitleText
                                    component="div"
                                    variant="h5"
                                    sx={{
                                        color: darkModeEnabled ? '#fff' : '#000',
                                    }}
                                >
                                    The Dark Side of Ocean Cleanup Technology
                                </TitleText>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    gap={1}
                                    sx={{
                                        mb: 1
                                    }}
                                >
                                    <img className="slate-vector" src={slate}></img>
                                </Box>
                                <SubText
                                    variant="subtitle1"
                                    component="div"
                                    sx={{
                                        color: darkModeEnabled ? '#e6e6e6' : '#000',
                                    }}
                                >
                                    January 22, 2024&nbsp;&nbsp;-&nbsp;&nbsp;<i>6 min read</i>
                                </SubText>
                                <PreviewText
                                    variant='body2'
                                    sx={{
                                        color: darkModeEnabled ? colors.gray80 : colors.gray20,
                                        backgroundColor: darkModeEnabled ? colors.darkModePage : colors.lightModePage,
                                        '&::after': {
                                            background: darkModeEnabled 
                                                ? `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${colors.darkModePage} 100%)` 
                                                : `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${colors.lightModePage} 100%)`,
                                        },
                                    }}
                                >
                                    Rebecca Helm despises the phrase "Great Pacific Garbage Patch." This moniker is used to describe the vast stretch of ocean from the west coast of North America to Japan that is crammed with an estimated 1.8 trillion pieces of trash, most of which are plastic. "I think it's a really awful practice to name a part of the world after something bad that's happened to it," says Helm, a marine biologist at Georgetown University's Earth Commons Institute.
                                </PreviewText>
                            </ArticleContent>
                        </ArticleContentBox>
                    </ArticleCard>
                </a>

                <a
                    href="https://news.mongabay.com/2018/08/ecology-monks-in-thailand/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ArticleCard
                        sx={{
                            flexDirection: { xs: 'column', md: 'row' },
                            backgroundColor: darkModeEnabled ? colors.darkModePage : colors.lightModePage,
                        }}
                    >
                        <CardMedia
                            component="img"
                            sx={{
                                width: { xs: 'auto', md: 200 },
                            }}
                            image={article16}
                            alt="Live from space album cover"
                        />
                        <ArticleContentBox>
                            <ArticleContent>
                                <TitleText
                                    component="div"
                                    variant="h5"
                                    sx={{
                                        color: darkModeEnabled ? '#fff' : '#000',
                                    }}
                                >
                                    Ecology monks in Thailand seek to end environmental suffering
                                </TitleText>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    gap={1}
                                    sx={{
                                        mb: 1
                                    }}
                                >
                                    <img className="mongabay-vector" src={darkModeEnabled ? mongabayDark : mongabayDark}></img>
                                </Box>
                                <SubText
                                    variant="subtitle1"
                                    component="div"
                                    sx={{
                                        color: darkModeEnabled ? '#e6e6e6' : '#000',
                                    }}
                                >
                                    August 13, 2018&nbsp;&nbsp;-&nbsp;&nbsp;<i>7 min read</i>
                                </SubText>
                                <PreviewText
                                    variant='body2'
                                    sx={{
                                        color: darkModeEnabled ? colors.gray80 : colors.gray20,
                                        backgroundColor: darkModeEnabled ? colors.darkModePage : colors.lightModePage,
                                        '&::after': {
                                            background: darkModeEnabled 
                                                ? `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${colors.darkModePage} 100%)` 
                                                : `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${colors.lightModePage} 100%)`,
                                        },
                                    }}
                                >
                                    As development in Thailand is increasing, so is deforestation. Acres of forests are cleared for contract farming, habitats are torn down to make room for new factories, and soil is eroded, causing massive flooding during the rainy season. But amid the environmental wreckage, some trees remain untouched. These trees are wrapped in iconic bright orange robes and deemed sacred, protected from harm and destruction.
                                </PreviewText>
                            </ArticleContent>
                        </ArticleContentBox>
                    </ArticleCard>
                </a>

                <a
                    href="https://www.nationalgeographic.com/animals/article/periodical-cicadas-summer-emerging-united-states"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ArticleCard
                        sx={{
                            flexDirection: { xs: 'column', md: 'row' },
                            backgroundColor: darkModeEnabled ? colors.darkModePage : colors.lightModePage,
                        }}
                    >
                        <CardMedia
                            component="img"
                            sx={{
                                width: { xs: 'auto', md: 200 },
                            }}
                            image={article17}
                            alt="Live from space album cover"
                        />
                        <ArticleContentBox>
                            <ArticleContent>
                                <TitleText
                                    component="div"
                                    variant="h5"
                                    sx={{
                                        color: darkModeEnabled ? '#fff' : '#000',
                                    }}
                                >
                                    Noticing More Cicadas this Year in the U.S.? There May Be a Reason
                                </TitleText>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    gap={1}
                                    sx={{
                                        mb: 1,
                                        color: darkModeEnabled ? '#e6e6e6' : '#000',
                                    }}
                                >
                                    <img className="natgeo-vector" src={natGeo}></img>
                                </Box>
                                <SubText
                                    variant="subtitle1"
                                    component="div"
                                    sx={{
                                        color: darkModeEnabled ? '#e6e6e6' : '#000',
                                    }}
                                >
                                    March 2, 2021&nbsp;&nbsp;-&nbsp;&nbsp;<i>7 min read</i>
                                </SubText>
                                <PreviewText
                                    variant='body2'
                                    sx={{
                                        color: darkModeEnabled ? colors.gray80 : colors.gray20,
                                        backgroundColor: darkModeEnabled ? colors.darkModePage : colors.lightModePage,
                                        '&::after': {
                                            background: darkModeEnabled 
                                                ? `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${colors.darkModePage} 100%)` 
                                                : `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${colors.lightModePage} 100%)`,
                                        },
                                    }}
                                >
                                    Some Americans are getting a preview of summer 2024, when two periodical cicada broods will emerge simultaneously for the first time in 221 years—an event rarer than Halley's comet. In 2021, Brood X—the biggest of the 15 known periodical cicada broods—emerged throughout the eastern U.S. in the trillions. Now, some of those cicadas are back, four years ahead of schedule.
                                </PreviewText>
                            </ArticleContent>
                        </ArticleContentBox>
                    </ArticleCard>
                </a>
            </Stack>

            <Box
                display="flex"
                alignItems="center"
                gap={1}
                sx={{
                    my: 8,
                    px: { xs: 3, md: 38 },
                }}
            >
                <Typography variant='h6'
                    sx={{
                        color: darkModeEnabled ? colors.gray80 : '#000',
                    }}
                >
                    Share on:&nbsp;
                </Typography>
                <IconButton
                    aria-label="facebook"
                    onClick={handleFaceBookShare}
                >
                    <FacebookIcon
                        fontSize='large'
                        sx={{
                            color: '#1877F2'
                        }}
                    />
                </IconButton>
                <IconButton
                    aria-label="X"
                    onClick={handleTwitterShare}
                >
                    <XIcon
                        fontSize='large'
                        sx={{
                            color: darkModeEnabled ? '#fff' : '#000'
                        }}
                    />
                </IconButton>
                <IconButton
                    aria-label="linkedin"
                    onClick={handleLinkedInShare}
                >
                    <LinkedInIcon
                        fontSize='large'
                        sx={{
                            color: '#0A66C2'
                        }}
                    />
                </IconButton>
            </Box>

            <Footer darkModeEnabled={darkModeEnabled} />
        </Box>
    );
}

export default WrittenWorkPage;