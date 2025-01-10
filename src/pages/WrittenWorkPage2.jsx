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

const ArticleCard = styled(Card)(() => ({
    display: 'flex',
    width: '350px',
    height: '503px',
    // offset-x offset-y blur-radius spread-radius color
    boxShadow: '0px 2px 3px -1px rgba(0, 0, 0, 0.4), 0px 4px 3px 0px rgba(0, 0, 0, 0.28), 0px 0px 6px 0px rgba(0, 0, 0, 0.24)',
    '&:hover': {
        cursor: 'pointer',
        boxShadow: '0px 5px 5px -1px rgba(0, 0, 0, 0.5), 0px 7px 6px 0px rgba(0, 0, 0, 0.35), 0px 3px 12px 0px rgba(0, 0, 0, 0.5)',
    },
}));

const ArticleContentBox = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
}));

const ArticleContent = styled(CardContent)(() => ({
    flex: '1 0 auto',
    padding: '12px 20px 12px 16px',
    '&:last-child': {
        paddingBottom: '8px',
    },
}));

const TitleText = styled(Typography)(() => ({
    height: '106px',
    fontSize: '1.25rem',
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

const WrittenWorkPage2 = ({ darkModeEnabled, setDarkModeEnabled }) => {

    const articles = [
        // Inside Climate News
        {
            title: 'The Futures of Right Whales and Lobstermen Are Entangled. Could High-Tech Gear Help Save Them Both?',
            url: 'https://insideclimatenews.org/news/20102024/lobster-traps-harm-right-whales/',
            image: article1,
            darkPublisherImg: insideClimateNewsDark,
            lightPublisherImg: insideClimateNewsLight,
            publisherImgClass: 'climate-news-vector',
            date: 'October 20, 2024',
            readTime: '9 min read',
            previewText: 'It was a blessedly calm day as Scott Landry\'s team set out in their inflatable boat to scan the glistening waters of Great South Channel between Rhode Island and Massachusetts for an endangered whale affectionately known as Wart. They were on a mission to save her life. The group, from the nonprofit Center for Coastal Studies located in nearby Provincetown, had spent the better part of three years monitoring Wart after an aerial team spotted the North Atlantic right whale with a large piece of rope lodged in her mouth.',
        },
        {
            title: 'What Could EV Charging Look Like as More Options Emerge? Here\'s One Answer',
            url: 'https://insideclimatenews.org/news/20092024/todays-climate-electric-vehicle-charging-outpost/',
            image: article2,
            darkPublisherImg: insideClimateNewsDark,
            lightPublisherImg: insideClimateNewsLight,
            publisherImgClass: 'climate-news-vector',
            date: 'September 20, 2024',
            readTime: '8 min read',
            previewText: 'For Brian Stewart, the typical trip to charge his electric vehicle brings him to the back of a gas station. He waits out the clock by stretching his legs, catching up on emails or running into the convenience store to grab a snack. But this time, on the way to a balmy August hike, Stewart found his way to EV manufacturer Rivian\'s new “Charging Outpost,” located in Groveland, California—about 25 miles outside Yosemite National Park. As the car sat at one of the five fast chargers on site, he worked on his laptop on a couch inside the space, which has local coffee on tap, a build-your-own trail mix station, free Wi-Fi and air conditioning.',
        },
        {
            title: 'Sewage Across Borders: The Tijuana River Is Spewing Wastewater Into San Diego Amid Historic Storms, Which...',
            url: 'https://insideclimatenews.org/news/09022024/tijuana-river-spewing-wastewater-into-san-diego-amid-historic-storms/',
            image: article3,
            darkPublisherImg: insideClimateNewsDark,
            lightPublisherImg: insideClimateNewsLight,
            publisherImgClass: 'climate-news-vector',
            date: 'February 9, 2024',
            readTime: '9 min read',
            previewText: 'For Jose Cariman, the smell permeating his house is worst at night. A retired, stay-at-home dad, Cariman lives in a single-family home in the Coral Gate community of San Diego\'s San Ysidro District, about 2 miles from Tijuana—close enough that his wife\'s family can walk over the border from Mexico for dinner.',
        },
        {
            title: 'Vessel Strikes on Whales Are Increasing With Warming. Can the Shipping Industry Slow Down to Spare Them?',
            url: 'https://insideclimatenews.org/news/10102023/vessel-strikes-on-whales-are-worsening-with-warming/',
            image: article4,
            darkPublisherImg: insideClimateNewsDark,
            lightPublisherImg: insideClimateNewsLight,
            publisherImgClass: 'climate-news-vector',
            date: 'October 10, 2023',
            readTime: '9 min read',
            previewText: 'Last March, a California giant perished. The 49-foot humpback nicknamed Fran washed up on a beach in the coastal city of Half Moon Bay. Fran had visited these waters for the entirety of her 17-year life, easily recognized by Californians due to the distinctive markings and shape of her tail.',
        },
        {
            title: 'Tourists Are Feeling the Heat—and Their Bodies May Not Be Able to Catch Up',
            url: 'https://insideclimatenews.org/news/09072024/todays-climate-tourism-heat-health-risks/',
            image: article5,
            darkPublisherImg: insideClimateNewsDark,
            lightPublisherImg: insideClimateNewsLight,
            publisherImgClass: 'climate-news-vector',
            date: 'July 9, 2024',
            readTime: '9 min read',
            previewText: 'Throughout June, six tourists died while visiting Greece during an unusually early summer heat wave...',
        },
        {
            title: 'Climate-Fueled Extreme Weather Is Hiking up Car Insurance Rates',
            url: 'https://insideclimatenews.org/news/29102024/todays-climate-extreme-weather-car-insurance/',
            image: article6,
            darkPublisherImg: insideClimateNewsDark,
            lightPublisherImg: insideClimateNewsLight,
            publisherImgClass: 'climate-news-vector',
            date: 'October 29, 2024',
            readTime: '9 min read',
            previewText: 'As climate change accelerates, hurricanes, wildfires and hail storms pound the U.S. with growing vigor...',
        },
        {
            title: 'USFWS Is Creating a Frozen Library of Biodiversity to Help Endangered Species',
            url: 'https://insideclimatenews.org/news/04102023/usfws-biobanking-to-help-endangered-species/',
            image: article7,
            darkPublisherImg: insideClimateNewsDark,
            lightPublisherImg: insideClimateNewsLight,
            publisherImgClass: 'climate-news-vector',
            date: 'October 4, 2023',
            readTime: '9 min read',
            previewText: 'The world\'s wildlife are facing a barrage of threats caused by climate change, from the loss of suitable habitat...',
        },
        {
            title: 'Hurricane Helene Lays Bare the Growing Threat of Inland Flooding',
            url: 'https://insideclimatenews.org/news/01102024/hurricane-helene-lays-bare-the-growing-threat-of-inland-flooding/',
            image: article8,
            darkPublisherImg: insideClimateNewsDark,
            lightPublisherImg: insideClimateNewsLight,
            publisherImgClass: 'climate-news-vector',
            date: 'October 1, 2024',
            readTime: '9 min read',
            previewText: 'Six months ago, Craig Colten moved from Baton Rouge, Louisiana, to Asheville, North Carolina—a historic city...',
        },
        {
            title: 'Medical Schools Around the World Are Expanding Their \'Climate Change Curriculums\'',
            url: 'https://insideclimatenews.org/news/31052024/todays-climate-medical-school-health-students/',
            image: article9,
            darkPublisherImg: insideClimateNewsDark,
            lightPublisherImg: insideClimateNewsLight,
            publisherImgClass: 'climate-news-vector',
            date: 'May 31, 2024',
            readTime: '9 min read',
            previewText: 'Three years ago, a group of eco-conscious students at Harvard Medical School conducted a poll...',
        },
        // Freelance
        {
            title: 'These deep-sea animals are new to science—and already at risk',
            url: 'https://www.nationalgeographic.com/animals/article/deep-sea-animals-new-species-mining',
            image: article10,
            darkPublisherImg: natGeo,
            lightPublisherImg: natGeo,
            publisherImgClass: 'natgeo-vector',
            date: 'May 25, 2023',
            readTime: '9 min read',
            previewText: 'Spanning 1.7 million square miles of ocean from Hawaii to Mexico, a hidden underwater world teems with life...',
        },
        {
            title: 'The Company Working to Make Flood Insurance Climate-Proof',
            url: 'https://time.com/6556464/parametric-insurance-climate-2/',
            image: article11,
            darkPublisherImg: time,
            lightPublisherImg: time,
            publisherImgClass: 'time-vector',
            date: 'January 17, 2024',
            readTime: '6 min read',
            previewText: 'When Storm Eva hit the United Kingdom in 2015, a surge of rain and river water inundated the streets...',
        },
        {
            title: 'Wildfires Leave Toxins in Homes. Insurance Companies Can Do More About It',
            url: 'https://time.com/6588094/wildfires-hidden-toxins-insurance/',
            image: article12,
            darkPublisherImg: time,
            lightPublisherImg: time,
            publisherImgClass: 'time-vector',
            date: 'January 25, 2024',
            readTime: '7 min read',
            previewText: 'When Lanene and Peter Dente first saw the haze building outside of their home on Dec. 30, 2021, they thought it was a dust storm...',
        },
        {
            title: 'Are Sea Cucumbers a Cleanup Solution to Fish Farm Pollution?',
            url: 'https://e360.yale.edu/features/sea-cucumbers-fish-farms-excrement',
            image: article13,
            darkPublisherImg: e360,
            lightPublisherImg: e360,
            publisherImgClass: 'e360-vector',
            date: 'May 25, 2023',
            readTime: '5 min read',
            previewText: 'Off the coast of the Hawaiian Island of Kauai, an underwater metropolis bustles...',
        },
        {
            title: 'Will the drive for EVs destroy Earth\'s last untouched ecosystem?',
            url: 'https://www.livescience.com/planet-earth/climate-change/mining-crystals-locked-in-the-deep-sea-could-help-fight-climate-change-it-may-also-destroy-earths-last-untouched-ecosystem',
            image: article14,
            darkPublisherImg: liveScienceDark,
            lightPublisherImg: liveScienceLight,
            publisherImgClass: 'livescience-vector',
            date: 'July 15, 2023',
            readTime: '7 min read',
            previewText: 'To prevent a climate catastrophe, the world must dramatically slash its carbon emissions...',
        },
        {
            title: 'The Dark Side of Ocean Cleanup Technology',
            url: 'https://slate.com/technology/2024/01/the-dark-side-of-ocean-cleanup-technology.html',
            image: article15,
            darkPublisherImg: slate,
            lightPublisherImg: slate,
            publisherImgClass: 'slate-vector',
            date: 'January 22, 2024',
            readTime: '6 min read',
            previewText: 'Rebecca Helm despises the phrase "Great Pacific Garbage Patch." This moniker is used to describe the vast stretch of ocean...',
        },
        {
            title: 'Ecology monks in Thailand seek to end environmental suffering',
            url: 'https://news.mongabay.com/2018/08/ecology-monks-in-thailand/',
            image: article16,
            darkPublisherImg: mongabayDark,
            lightPublisherImg: mongabayDark,
            publisherImgClass: 'mongabay-vector',
            date: 'August 13, 2018',
            readTime: '7 min read',
            previewText: 'As development in Thailand is increasing, so is deforestation. Acres of forests are cleared for contract farming...',
        },
        {
            title: 'Noticing More Cicadas this Year in the U.S.? There May Be a Reason',
            url: 'https://www.nationalgeographic.com/animals/article/periodical-cicadas-summer-emerging-united-states',
            image: article17,
            darkPublisherImg: natGeo,
            lightPublisherImg: natGeo,
            publisherImgClass: 'natgeo-vector',
            date: 'March 2, 2021',
            readTime: '7 min read',
            previewText: 'Some Americans are getting a preview of summer 2024, when two periodical cicada broods will emerge simultaneously...',
        },
    ];
    
    const shareUrl = '#';

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
                    px: { xs: 3, md: 24 },
                    mt: { xs: 0, md: 6 },
                    mb: 4,
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
            <Box
                display="flex"
                flexWrap="wrap"
                gap={5}
                sx={{
                    margin: 0,
                    px: { xs: 3, md: 24 },

                }}
            >
                {articles.map((article, index) => (
                    <a
                        key={index}
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ArticleCard
                            sx={{
                                flexDirection: 'column',
                                backgroundColor: darkModeEnabled ? colors.darkModePage : colors.lightModePage,
                            }}
                        >
                            <CardMedia
                                component="img"
                                sx={{
                                    width: 'auto',
                                    height: '235px'
                                }}
                                image={article.image}
                                alt="Article Preview Image"
                            />

                            <ArticleContent>
                                <TitleText
                                    component="div"
                                    variant="h5"
                                    sx={{
                                        color: darkModeEnabled ? '#fff' : '#000'
                                    }}
                                >
                                    {article.title}
                                </TitleText>

                                <Box
                                    sx={{
                                        mb: 1.5
                                    }}
                                >
                                    <img
                                        className={article.publisherImgClass}
                                        src={darkModeEnabled ? article.darkPublisherImg : article.lightPublisherImg}
                                        alt="Logo"
                                    />
                                </Box>

                                <SubText
                                    variant="subtitle1"
                                    component="div"
                                    sx={{
                                        color: darkModeEnabled ? '#e6e6e6' : '#000'
                                    }}
                                >
                                    {article.date}&nbsp;&nbsp;-&nbsp;&nbsp;<i>{article.readTime}</i>
                                </SubText>

                                <PreviewText
                                    variant="body2"
                                    sx={{
                                        color: darkModeEnabled ? colors.gray80 : colors.gray20,
                                        backgroundColor: darkModeEnabled ? colors.darkModePage : colors.lightModePage,
                                    }}
                                >
                                    {article.previewText}
                                </PreviewText>
                                
                            </ArticleContent>
                        </ArticleCard>
                    </a>
                ))}
            </Box>

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

export default WrittenWorkPage2;