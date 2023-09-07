import * as React from 'react';
import { Box, Grid, Button, Container, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AndroidIcon from '@mui/icons-material/Android';
import img from '../../assets/meta-main-logo.png';
import vector from '../../assets/Vector3.png';
import backk from '../../assets/backk.png'
import { useMediaQuery } from '@mui/material';
import { Bounce, Fade, Flip, Slide } from 'react-reveal';
import { HashLink } from 'react-router-hash-link';
import DrawerMui from '../drawer/drawer'



export default () => {
    const random = useMediaQuery("(max-width: 900px)")

    const headerContent = [
    "Burn & Rewards",
        "Tokonomics",
         "Roadmap",
        "Charity",
        "NFT",
    ];

    return (
        <>
            <Box style={{
                backgroundImage: `url(${backk})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: "100% 100%",
                backgroundSize: "cover"
            }}>
                <Container >

                <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'row', }}>
                        <Box sx={{ flexGrow: 1, }}>
                            <DrawerMui data={headerContent} />
                        </Box>
                        {/* <Box pt={2} sx={{ alignItems: "center" }}>
                            <img src='/images/flower.png' style={{ width: "35%" }} />
                        </Box> */}
                    </Box>

                     <Box mx="auto" width=" 50%"
                        sx={{

                            display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
                            color: '#FFFFFF',
                            fontFamily: 'Poppins',
                            fontWeight: '700',
                            fontSize: "25px",
                            fontStyle: 'normal',
                            lineHeight: '35px',
                            letterSpacing: '0em',
                            textAlign: 'center',
                        }}
                    >
                        <Flip left>
                        <img src={img} alt="image" />
                        </Flip>
                        <Box>
                            <Bounce>
                                Meta Burn
                            </Bounce>
                        </Box>
                    </Box>

                    <Grid container >
                        <Grid item justifyContent='center' lg={3} sm={12} xs={12}
                            sx={{

                                display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },

                                color: '#FFFFFF',
                                fontFamily: 'Poppins',
                                fontWeight: '500',
                                fontSize: "19px",
                                fontStyle: 'normal',
                                lineHeight: '30px',
                                letterSpacing: '0em',
                                textAlign: 'center',
                                cursor: 'pointer',
                                pt: 5,
                                pb: 5
                            }}
                        >
                            <Stack spacing={4}

                            >
                                <Fade top>

                                    <Box>
                                        <HashLink to="#Burn & Rewards" smooth
                                            style={{
                                                textDecoration: 'none',
                                                color: '#FFFFFF'
                                            }}
                                        >
                                            Burn & Rewards
                                        </HashLink>
                                    </Box>
                                    <Box>
                                        <HashLink to="#Tokonomics" smooth
                                            style={{
                                                textDecoration: 'none',
                                                color: '#FFFFFF'
                                            }}
                                        >Tokenomics</HashLink>
                                    </Box>
                                    <Box>
                                        <HashLink to="#Roadmap" smooth
                                            style={{
                                                textDecoration: 'none',
                                                color: '#FFFFFF'
                                            }}
                                        >
                                            Roadmap
                                        </HashLink>
                                    </Box>
                                    <Box>
                                        <HashLink to="#Charity" smooth
                                            style={{
                                                textDecoration: 'none',
                                                color: '#FFFFFF'
                                            }}
                                        >
                                            Charity
                                        </HashLink>
                                    </Box>
                                    <Box>
                                        <HashLink to="#NFT" smooth
                                            style={{
                                                textDecoration: 'none',
                                                color: '#FFFFFF'
                                            }}>
                                            NFT
                                        </HashLink>
                                    </Box>
                                </Fade>
                            </Stack>
                        </Grid>

                        <Grid item
                            xs={12}
                            lg={6}
                            sx={{
                                textAlign: 'center',
                            }}
                        >
                            <Box
                                sx={{
                                    color: '#FFFFFF',
                                    fontFamily: 'Orbitron',
                                    fontWeight: '700',
                                    fontSize: "43px",
                                    fontStyle: 'normal',
                                    lineHeight: '54px',
                                    letterSpacing: '0em',

                                }}
                            >
                                <Slide left>
                                    THE KING OF MEMES
                                </Slide>
                            </Box>

                            <Box
                                sx={{
                                    color: '#FFFFFF',
                                    fontFamily: 'Poppins',
                                    fontWeight: '400',
                                    fontSize: "18px",
                                    fontStyle: 'normal',
                                    lineHeight: '35px',
                                    letterSpacing: '0em',
                                    textAlign: 'center',
                                    p: 5
                                }}
                            >
                                <Fade left>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a
                                    type specimen book.
                                </Fade>
                            </Box>
                            <Box>
                            <Fade bottom>
                                <Button
                                    sx={{
                                        cursor: 'pointer',
                                        color: '#06D9E2',
                                        fontFamily: 'Orbitron',
                                        fontWeight: '900',
                                        fontSize: random ? '12px' : "17px",
                                        fontStyle: 'normal',
                                        lineHeight: '23px',
                                        letterSpacing: '0em',
                                        textAlign: 'left',
                                        backdropFilter: 'blur(8px)',
                                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                        borderRadius: '10px',
                                        // height: '74px',
                                        p: 3,
                                        // borderRadius: '50em',
                                        borderWidth: '2px',
                                        borderStyle: 'solid',
                                        borderImage: 'linear-gradient(to bottom, #9f1384, #02ffc2) 1',

                                    }}
                                >Buy on Pancake Swap</Button>
                                </Fade>
                            </Box>
                        </Grid>

                        <Grid item
                            lg={3}
                            sx={{
                                display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
                                color: '#FFFFFF'
                            }}
                        >
                            <Stack spacing={4} direction="column" alignItems="center"
                                sx={{
                                    cursor: 'pointer',
                                }}
                            >
                                <Fade top>
                                    <Box><TelegramIcon /></Box>
                                    <Box><GitHubIcon /></Box>
                                    <Box><AndroidIcon /></Box>
                                    <Box><InstagramIcon /></Box>
                                    <Box><FacebookIcon /></Box>
                                    <Box><YouTubeIcon /></Box>
                                </Fade>
                            </Stack>
                        </Grid>
                    </Grid>


                    {/* // Box 3 for reward Logo */}


                    <Grid xs={8} md={6} lg={12} alignItems='center'
                        sx={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <Box>
                            <Box
                                style={{
                                    position: 'relative',
                                }}
                            >
                                <img src={vector} alt="vector Image" />
                            </Box>
                            <Box
                                sx={{
                                    color: '#FFFFFF',
                                    fontFamily: 'Orbitron',
                                    fontWeight: '700',
                                    fontSize: "30px",
                                    fontStyle: 'normal',
                                    lineHeight: '38px',
                                    letterSpacing: '0em',
                                    textAlign: 'center',
                                    position: 'absolute',
                                    mx: -3,
                                    my: -10
                                }}
                            >
                                <Fade left cascade>
                                    REWARD
                                </Fade>
                            </Box>
                        </Box>

                        <Fade left>
                        <Box
                            sx={{
                                color: '#FFFFFF',
                                fontFamily: 'Poppins',
                                fontWeight: '400',
                                fontSize: "17px",
                                fontStyle: 'normal',
                                lineHeight: '27px',
                                letterSpacing: '0em',
                                textAlign: 'center',
                                width: "90%"
                            }}
                        >
                            It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout. The point of
                            using Lorem Ipsum is that it has a more-or-less normal distribution
                            of letters, as opposed to using 'Content here.
                        </Box>
                        </Fade>
                    </Grid>
                </Container>
            </Box>

        </>
    );
}

