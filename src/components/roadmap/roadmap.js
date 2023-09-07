import React from 'react'
import chart from '../../assets/line-chart.png'
import bgImage from '../../assets/road-map.png'
import vector from '../../assets/Vector3.png'
import { Grid, Box } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { Fade } from 'react-reveal';




export default function Roadmap() {
    const xsChart = useMediaQuery('(width: 100%)');

    return (
        <>

            <Box id="Roadmap"
                style={{
                    background: 'linear-gradient(to right bottom, #110026 46%, #110026 100%)',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '100% 100%',
                    backgroundSize: 'cover',
                }}>
                <Box
                    style={{
                        width: "100%",
                        maxWidth: "100%",
                        backgroundImage: `url(${bgImage})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'top left',
                    }}>


                    <Grid container spacing={2} sx={{}} >

                        <Grid item direction='column' xl={6} lg={6} md={6} sm={12} xs={12}
                            sx={{
                                textAlign: 'center',
                            }}
                        >
                            <Fade bottom>
                            <Box >
                                <img
                                    style={{
                                        // width: xsChart? xs={}: "null"
                                        width: '80%'
                                    }}
                                    src={chart} alt="Line Chart" />

                                <Box
                                    sx={{

                                        color: "#FFFFFF",
                                        fontFamily: 'Poppins',
                                        fontSize: '18px',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        lineHeight: '27px',
                                        letterSpacing: '0em',
                                        textAlign: 'center',
                                        p: 5
                                    }}>
                                    Each burning token will double the amount of the previous
                                    burn so that the token price increases.
                                </Box>
                            </Box>
                            </Fade>

                        </Grid>

                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{
                            textAlign: 'center',
                        }} >
                            <Fade bottom>
                            <Box

                            >
                                <img
                                    style={{
                                        // width:"100%",
                                        width: '80%'
                                    }}
                                    src={chart} alt="Line Chart" />

                                <Box
                                    sx={{

                                        color: "#FFFFFF",
                                        fontFamily: 'Poppins',
                                        fontSize: '18px',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        lineHeight: '27px',
                                        letterSpacing: '0em',
                                        textAlign: 'center',
                                        p: 5,
                                    }}
                                >
                                    The less the total token supply is,
                                    the higher the token price will be.
                                </Box>

                            </Box>
                            </Fade>

                        </Grid>

                    </Grid>




                    <Grid xs={8} md={6} lg={12} alignItems='center'
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            mt: 30
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
                                    ROADMAP
                                </Fade>
                            </Box>
                        </Box>
                       
                    </Grid>
                </Box>
            </Box>

        </>
    )
}
