import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Stack, Typography, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import { DesktopNavbar, MobileNavbar, DesktopFooter, MobileFooter } from '../components/index';
import { insideClimateNewsDark, insideClimateNewsLight, liveScienceDark, liveScienceLight, mongabayDark } from '../utils/constants';
import { natGeo, time, e360, slate } from '../utils/constants';
import { article1, article2, article3, article4, article5, article6, article7, article8, article9, article10, article11, article12, article13, article14, article15, article16, article17 } from '../utils/constants';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import colors from '../utils/colors';

const ArticleCard = styled(Card)(() => ({
    display: 'flex',
    flexDirection: 'column',
    // offset-x offset-y blur-radius spread-radius color
    boxShadow: '0px 2px 3px -1px rgba(0, 0, 0, 0.4), 0px 4px 3px 0px rgba(0, 0, 0, 0.28), 0px 0px 6px 0px rgba(0, 0, 0, 0.24)',
    transition: 'transform 0.3s ease',
    '&:hover': {
        cursor: 'pointer',
        boxShadow: '0px 5px 5px -1px rgba(0, 0, 0, 0.5), 0px 7px 6px 0px rgba(0, 0, 0, 0.35), 0px 3px 12px 0px rgba(0, 0, 0, 0.5)',
        transform: 'translateY(-4px)',
    },
}));

const ArticleContent = styled(CardContent)(() => ({
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'space-between',
    padding: '12px 20px 12px 16px',
    '&:last-child': {
        paddingBottom: '8px',
    },
}));

const TitleText = styled(Typography)(() => ({
    marginBottom: '12px'
}));

const PreviewText = styled(Typography)(() => ({
    marginBottom: '2px',
    display: '-webkit-box', 
    WebkitBoxOrient: 'vertical', 
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitLineClamp: 3,
    position: 'relative',
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '2.5em',
        pointerEvents: 'none',
    },
}));

const SubText = styled(Typography)(() => ({
    marginBottom: '8px',
}));

const TestPage = ({ darkModeEnabled, setDarkModeEnabled }) => {

    // Inside Climate News
    const articles = [
        {
            titleSize: '1.25rem',
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
            titleSize: '1.25rem',
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
            titleSize: '1.25rem',
            title: 'Sewage Across Borders: The Tijuana River Is Spewing Wastewater Into San Diego Amid Historic Storms, Which Could...',
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
            titleSize: '1.25rem',
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
            titleSize: '1.25rem',
            title: 'Tourists Are Feeling the Heat—and Their Bodies May Not Be Able to Catch Up',
            url: 'https://insideclimatenews.org/news/09072024/todays-climate-tourism-heat-health-risks/',
            image: article5,
            darkPublisherImg: insideClimateNewsDark,
            lightPublisherImg: insideClimateNewsLight,
            publisherImgClass: 'climate-news-vector',
            date: 'July 9, 2024',
            readTime: '9 min read',
            previewText: 'Throughout June, six tourists died while visiting Greece during an unusually early summer heat wave. While these cases are still being investigated, authorities say that heat stress likely played a part in each of their deaths, as temperatures soared over 104 degrees Fahrenheit.',
        },
        {
            titleSize: '1.25rem',
            title: 'Climate-Fueled Extreme Weather Is Hiking up Car Insurance Rates',
            url: 'https://insideclimatenews.org/news/29102024/todays-climate-extreme-weather-car-insurance/',
            image: article6,
            darkPublisherImg: insideClimateNewsDark,
            lightPublisherImg: insideClimateNewsLight,
            publisherImgClass: 'climate-news-vector',
            date: 'October 29, 2024',
            readTime: '9 min read',
            previewText: 'As climate change accelerates, hurricanes, wildfires and hail storms pound the U.S. with growing vigor—and the insurance market is struggling to foot the bill of the damages they leave behind for customers.',
        },
        {
            titleSize: '1.25rem',
            title: 'USFWS Is Creating a Frozen Library of Biodiversity to Help Endangered Species',
            url: 'https://insideclimatenews.org/news/04102023/usfws-biobanking-to-help-endangered-species/',
            image: article7,
            darkPublisherImg: insideClimateNewsDark,
            lightPublisherImg: insideClimateNewsLight,
            publisherImgClass: 'climate-news-vector',
            date: 'October 4, 2023',
            readTime: '9 min read',
            previewText: 'The world\'s wildlife are facing a barrage of threats caused by climate change, from the loss of suitable habitat to dwindling food supplies. As a result, endangered species across the U.S. are edging closer to extinction at alarming rates—and if they disappear, critical genetic information could vanish with them.',
        },
        {
            titleSize: '1.25rem',
            title: 'Hurricane Helene Lays Bare the Growing Threat of Inland Flooding',
            url: 'https://insideclimatenews.org/news/01102024/hurricane-helene-lays-bare-the-growing-threat-of-inland-flooding/',
            image: article8,
            darkPublisherImg: insideClimateNewsDark,
            lightPublisherImg: insideClimateNewsLight,
            publisherImgClass: 'climate-news-vector',
            date: 'October 1, 2024',
            readTime: '9 min read',
            previewText: 'Six months ago, Craig Colten moved from Baton Rouge, Louisiana, to Asheville, North Carolina—a historic city tucked in the Blue Ridge Mountains. He’d fallen in love with the region over the summers while in college and was eager to evade the near-constant threat of hurricanes that loomed over his life in Louisiana.',
        },
        {
            titleSize: '1.25rem',
            title: 'Medical Schools Around the World Are Expanding Their \'Climate Change Curriculums\'',
            url: 'https://insideclimatenews.org/news/31052024/todays-climate-medical-school-health-students/',
            image: article9,
            darkPublisherImg: insideClimateNewsDark,
            lightPublisherImg: insideClimateNewsLight,
            publisherImgClass: 'climate-news-vector',
            date: 'May 31, 2024',
            readTime: '9 min read',
            previewText: 'Three years ago, a group of eco-conscious students at Harvard Medical School conducted a poll with their fellow classmates and found that there was strong interest in ramping up climate health education in their courses.',
        },
    ];

    // Freelance
    const freelanceArticles = [
        {
            titleSize: '1.25rem',
            title: 'These deep-sea animals are new to science—and already at risk',
            url: 'https://www.nationalgeographic.com/animals/article/deep-sea-animals-new-species-mining',
            image: article10,
            darkPublisherImg: natGeo,
            lightPublisherImg: natGeo,
            publisherImgClass: 'natgeo-vector',
            date: 'May 25, 2023',
            readTime: '9 min read',
            previewText: 'Spanning 1.7 million square miles of ocean from Hawaii to Mexico, a hidden underwater world teems with life. More than 5,500 deep-sea species reside in the area of the Pacific known as the Clarion Clipperton Zone, and roughly 90 percent of them have yet to be described by science, according to a new study.',
        },
        {
            titleSize: '1.25rem',
            title: 'The Company Working to Make Flood Insurance Climate-Proof',
            url: 'https://time.com/6556464/parametric-insurance-climate-2/',
            image: article11,
            darkPublisherImg: time,
            lightPublisherImg: time,
            publisherImgClass: 'time-vector',
            date: 'January 17, 2024',
            readTime: '6 min read',
            previewText: 'When Storm Eva hit the United Kingdom in 2015, a surge of rain and river water inundated the streets of the small town of Tadcaster in northeastern England. Along with causing the town\'s main bridge to partially collapse, water poured into the Tadcaster Medical Centre, the only hospital in the area. The destruction from this flooding and recovery efforts at the hospital triggered an insurance claim of some £500,000 (over $750,000 at the time), says Tadcaster Medical practice manager Sarah Botherway.',
        },
        {
            titleSize: '1.25rem',
            title: 'Wildfires Leave Toxins in Homes. Insurance Companies Can Do More About It',
            url: 'https://time.com/6588094/wildfires-hidden-toxins-insurance/',
            image: article12,
            darkPublisherImg: time,
            lightPublisherImg: time,
            publisherImgClass: 'time-vector',
            date: 'January 25, 2024',
            readTime: '7 min read',
            previewText: 'When Lanene and Peter Dente first saw the haze building outside of their home on Dec. 30, 2021, they thought it was a dust storm, which can be common during winters in Boulder, Colo. Then Peter stepped outside, and the smell of smoke slammed into his nostrils. The retired couple confirmed with the police that a fire was ripping through the area and they needed to evacuate. So they called their son, loaded up the car with a few belongings, and turned back one last time to see flames licking over their back fence.',
        },
        {
            titleSize: '1.25rem',
            title: 'Are Sea Cucumbers a Cleanup Solution to Fish Farm Pollution?',
            url: 'https://e360.yale.edu/features/sea-cucumbers-fish-farms-excrement',
            image: article13,
            darkPublisherImg: e360,
            lightPublisherImg: e360,
            publisherImgClass: 'e360-vector',
            date: 'May 25, 2023',
            readTime: '5 min read',
            previewText: 'Off the coast of the Hawaiian Island of Kauai, an underwater metropolis bustles. Sea turtles glide lazily through the surf while schools of fluorescent yellow butterflyfish weave between basketball-size sea urchins and sharp corals.',
        },
        {
            titleSize: '1.25rem',
            title: 'Will the drive for EVs destroy Earth\'s last untouched ecosystem?',
            url: 'https://www.livescience.com/planet-earth/climate-change/mining-crystals-locked-in-the-deep-sea-could-help-fight-climate-change-it-may-also-destroy-earths-last-untouched-ecosystem',
            image: article14,
            darkPublisherImg: liveScienceDark,
            lightPublisherImg: liveScienceLight,
            publisherImgClass: 'livescience-vector',
            date: 'July 15, 2023',
            readTime: '7 min read',
            previewText: 'To prevent a climate catastrophe, the world must dramatically slash its carbon emissions. But creating enough batteries to power the electric vehicles (EVs) needed for a carbon-free future will require a massive scale-up in our supply of minerals such as copper, cobalt and manganese.',
        },
        {
            titleSize: '1.25rem',
            title: 'The Dark Side of Ocean Cleanup Technology',
            url: 'https://slate.com/technology/2024/01/the-dark-side-of-ocean-cleanup-technology.html',
            image: article15,
            darkPublisherImg: slate,
            lightPublisherImg: slate,
            publisherImgClass: 'slate-vector',
            date: 'January 22, 2024',
            readTime: '6 min read',
            previewText: 'Rebecca Helm despises the phrase "Great Pacific Garbage Patch." This moniker is used to describe the vast stretch of ocean from the west coast of North America to Japan that is crammed with an estimated 1.8 trillion pieces of trash, most of which are plastic.',
        },
        {
            titleSize: '1.25rem',
            title: 'Ecology monks in Thailand seek to end environmental suffering',
            url: 'https://news.mongabay.com/2018/08/ecology-monks-in-thailand/',
            image: article16,
            darkPublisherImg: mongabayDark,
            lightPublisherImg: mongabayDark,
            publisherImgClass: 'mongabay-vector',
            date: 'August 13, 2018',
            readTime: '7 min read',
            previewText: 'As development in Thailand is increasing, so is deforestation. Acres of forests are cleared for contract farming, habitats are torn down to make room for new factories, and soil is eroded, causing massive flooding during the rainy season.',
        },
        {
            titleSize: '1.25rem',
            title: 'Noticing More Cicadas this Year in the U.S.? There May Be a Reason',
            url: 'https://www.nationalgeographic.com/animals/article/periodical-cicadas-summer-emerging-united-states',
            image: article17,
            darkPublisherImg: natGeo,
            lightPublisherImg: natGeo,
            publisherImgClass: 'natgeo-vector',
            date: 'March 2, 2021',
            readTime: '7 min read',
            previewText: 'Some Americans are getting a preview of summer 2024, when two periodical cicada broods will emerge simultaneously for the first time in 221 years—an event rarer than Halley\'s comet. In 2021, Brood X—the biggest of the 15 known periodical cicada broods—emerged throughout the eastern U.S. in the trillions. Now, some of those cicadas are back, four years ahead of schedule.',
        },
    ];
    
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
            className='portfolio-bg-img'
        >
            <DesktopNavbar darkModeEnabled={darkModeEnabled} setDarkModeEnabled={setDarkModeEnabled} />
            <MobileNavbar darkModeEnabled={darkModeEnabled} setDarkModeEnabled={setDarkModeEnabled} />

            <Stack
                className='portfolio-transparent-stack'
                sx={{
                    backgroundColor: darkModeEnabled ? 'rgba(0, 0, 0, 0.65)' : 'rgba(242, 242, 242, 0.65)',
                    boxShadow: darkModeEnabled
                        ? '0px -4px 4px -1px rgba(0, 0, 0, 0.6), 0px -4px 5px 0px rgba(0, 0, 0, 0.35), 0px -4px 6px 0px rgba(0, 0, 0, 0.50)'
                        : '0px -4px 4px -1px rgba(102, 102, 102, 0.6), 0px -4px 5px 0px rgba(102, 102, 102, 0.35), 0px -4px 6px 0px rgba(102, 102, 102, 0.50)',
                }}
            >

                <Stack
                    display="flex"
                >
                    <Stack
                        className='climatenews-text-stack'
                    >
                        <Typography
                            className='portfolio-header'
                            sx={{
                                color: darkModeEnabled ? colors.white : colors.black,
                            }}
                        >
                            Inside Climate News
                        </Typography>
                        <Typography
                            sx={{
                                fontStyle: 'italic',
                                color: darkModeEnabled ? colors.white : colors.black,
                            }}
                        >
                            <i>To read more, subscribe to ICN's "Today's Climate" newsletter <u><a href="https://insideclimatenews.org/newsletter/" target="_blank" rel="noopener noreferrer">here</a></u>.</i>
                        </Typography>
                    </Stack>
                    <Box
                        display="flex"
                        flexWrap="wrap"
                        alignItems="center"
                        gap={5}
                        sx={{
                            justifyContent: { xs: 'center', md: 'center' },
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
                                    className='article-card'
                                    sx={{
                                        backgroundColor: darkModeEnabled ? colors.darkModePage : colors.lightModePage,
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            width: 'auto',
                                            height: '200px'
                                        }}
                                        image={article.image}
                                        alt="Article Preview Image"
                                    />

                                    <ArticleContent>
                                        <TitleText
                                            component="div"
                                            flexGrow={1}
                                            sx={{
                                                color: darkModeEnabled ? '#fff' : '#000',
                                                fontSize: '1.25rem',
                                                maxWidth: '100%',
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
                                                '&::after': {
                                                background: darkModeEnabled 
                                                    ? `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${colors.darkModePage} 100%)` 
                                                    : `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${colors.lightModePage} 100%)`,
                                            },
                                            }}
                                        >
                                            {article.previewText}
                                        </PreviewText>
                                        
                                    </ArticleContent>
                                </ArticleCard>
                            </a>
                        ))}
                    </Box>

                    <Stack
                        className='freelance-text-stack'
                    >
                        <Typography
                            className='portfolio-header'
                            sx={{
                                color: darkModeEnabled ? colors.white : colors.black,
                            }}
                        >
                            Freelance
                        </Typography>
                    </Stack>
                    <Box
                        display="flex"
                        flexWrap="wrap"
                        alignItems="center"
                        gap={5}
                        sx={{
                            justifyContent: { xs: 'center', md: 'center' },
                        }}
                    >
                        {freelanceArticles.map((article, index) => (
                            <a
                                key={index}
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ArticleCard
                                    className='article-card'
                                    sx={{
                                        backgroundColor: darkModeEnabled ? colors.darkModePage : colors.lightModePage,
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            width: 'auto',
                                            height: '200px'
                                        }}
                                        image={article.image}
                                        alt="Article Preview Image"
                                    />

                                    <ArticleContent>
                                        <TitleText
                                            component="div"
                                            flexGrow={1}
                                            sx={{
                                                color: darkModeEnabled ? '#fff' : '#000',
                                                fontSize: '1.25rem',
                                                maxWidth: '100%',
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
                                                '&::after': {
                                                background: darkModeEnabled 
                                                    ? `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${colors.darkModePage} 100%)` 
                                                    : `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${colors.lightModePage} 100%)`,
                                            },
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
                        className='share-btns'
                        gap={1}
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
                </Stack>

            </Stack>

            <DesktopFooter darkModeEnabled={darkModeEnabled} />
            <MobileFooter darkModeEnabled={darkModeEnabled} />
        </Box>
    );
}

export default TestPage;