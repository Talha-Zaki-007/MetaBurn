import React from 'react'
import { Box, Container, Grid, useMediaQuery } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AndroidIcon from '@mui/icons-material/Android';
import footer from '../../assets/footer.png'
import { Fade } from 'react-reveal';



export default function Footer() {
    const random = useMediaQuery("(max-width: 900px)");
    const font = useMediaQuery("(max-width: 600px)");
    const margin = useMediaQuery("(max-width: 600px)");
    return (


        <Box 
            style={{
                background: 'linear-gradient(to right bottom, #110026 46%, #110026 100%)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '100% 100%',
                backgroundSize: 'cover',
            
            }}>

            <Box
                sx={{
                    backgroundImage: `url(${footer})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    p: 5,
                }}>

                <Container>

                    <Grid container
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-around ',
                            flexWrap: 'wrap',
                        }}
                    >
                        <Fade left>
                        <Grid item
                            sx={{
                                fontFamily: 'Roboto',
                                // fontSize: '18px',
                                fontSize: font ? "12px" : "18px",
                                fontStyle: 'normal',
                                fontWeight: '700',
                                lineHeight: '21px',
                                letterSpacing: '0em',
                                textAlign: 'left',
                                color: '#FFFFFF',
                                // marginBottom: margin? null: "5"


                            }}
                        >
                            ©2021 by MetaBurn. All rights reserved
                        </Grid>
                        </Fade>

                        <Fade right>
                        <Grid item
                            sx={{
                                color: '#FFFFFF',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                flexWrap: 'wrap',

                            }}
                        >
                            
                            <FacebookIcon 
                            style={{
                                marginRight: "10"
                            }} 
                            />
                            <InstagramIcon 
                             style={{
                                marginRight: "10"
                            }} />
                            <AndroidIcon
                             style={{
                                marginRight: "10"
                            }}  />
                            <GitHubIcon
                             style={{
                                marginRight: "10"
                            }}  />
                            <TelegramIcon
                             style={{
                                marginRight: "10"
                            }}  />
                            <YouTubeIcon 
                             style={{
                                marginRight: "10"
                            }} />

                        </Grid>
                        </Fade>
                    </Grid >
                </Container>
            </Box>
        </Box>
    )
}
