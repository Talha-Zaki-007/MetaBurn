import artificial from '../../assets/artifial-inteligence.png';
import fire from '../../assets/fire.png';
import hands from '../../assets/hands.png';
import badge from '../../assets/badge.png';
import locked from '../../assets/locked.png';
import vector from '../../assets/Vector3.png';
import bgImage from '../../assets/tokonomics.png';
import { Box, Container, Grid } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { Fade, Flip } from 'react-reveal';


export default () => {

    const bg = useMediaQuery("(max-Width:900px)");
    return (

        <Box id="Tokonomics"
            style={{
                background: 'linear-gradient(to right bottom, #110026 46%, #110026 100%)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '100% 100%',
                backgroundSize: 'cover',

            }} >
            <Box
                style={{
                    backgroundImage: bg ? null : "url({bgImage})",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '100% 100%',
                    backgroundSize: 'cover',
                }}>
                <Container>
                    <Grid container
                    >
                        <Grid item
                            sx={{
                                display: 'flex',
                                // alignItems: 'center',
                                justifyContent: ' space-between'

                            }}
                        >

                            <Grid lg={4} md={4} sm={12} xs={12}

                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-evenly',
                                    alignItems: 'center',
                                    textAlign: 'center'
                                }}
                            >

                                <Grid direction="column" >
                                    <Flip top>
                                    <Box > <img src={fire} /></Box>
                                    </Flip>
                                    <Flip left>
                                    <Box
                                        sx={{
                                            color: '#02FFC2',
                                            fontFamily: 'Orbitron',
                                            fontWeight: '700',
                                            fontSize: "18px",
                                            fontStyle: 'normal',
                                            lineHeight: '23px',
                                            letterSpacing: '0em',
                                            textAlign: 'center',
                                        }}
                                    >AUTO AND MANUAL BURN
                                    </Box>
                                    </Flip>

                                    <Fade left>
                                    <Box
                                        sx={{
                                            color: '#FFFFFF',
                                            fontFamily: 'Poppins',
                                            fontWeight: '400',
                                            fontSize: "18px",
                                            fontStyle: 'normal',
                                            lineHeight: '27px',
                                            letterSpacing: '0em',
                                            textAlign: 'left',
                                            minWidth: "80%",
                                            // px: 5,
                                        }}
                                    >Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                        </Box>
                                        </Fade>
                                </Grid>

                                <Grid direction="column" >
                                <Flip top>
                                    <Box> <img src={hands} /> </Box>
                                    </Flip>

                                    <Flip left>
                                    <Box
                                        sx={{
                                            color: '#02FFC2',
                                            fontFamily: 'Orbitron',
                                            fontWeight: '700',
                                            fontSize: "18px",
                                            fontStyle: 'normal',
                                            lineHeight: '23px',
                                            letterSpacing: '0em',
                                            textAlign: 'center',
                                        }}
                                    >CHARITY WALLET</Box>
                                    </Flip>

                                    <Fade left>
                                    <Box
                                        sx={{
                                            color: '#FFFFFF',
                                            fontFamily: 'Poppins',
                                            fontWeight: '400',
                                            fontSize: "18px",
                                            fontStyle: 'normal',
                                            lineHeight: '27px',
                                            letterSpacing: '0em',
                                            textAlign: 'left',
                                            minWidth: "80%",
                                            // px: 5,

                                        }}
                                    >Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                        </Box>
                                        </Fade>
                                </Grid>

                            </Grid>


                            <Box lg={4} md={4}
                                sx={{
                                    display: { xs: 'none', sm: 'none', md: 'block' },
                                }}
                            >

                                <img src={artificial} alt="artificial-inteligence" />

                            </Box>


                            <Grid lg={4} md={4} sm={12} xs={12}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-evenly',
                                    alignItems: 'center',
                                    textAlign: 'center'

                                }}
                            >

                                <Box direction="column">
                                    <Flip top>
                                    <Box> <img src={badge} /> </Box>
                                    </Flip>

                                    <Flip right>
                                    <Box
                                        sx={{
                                            color: '#02FFC2',
                                            fontFamily: 'Orbitron',
                                            fontWeight: '700',
                                            fontSize: "18px",
                                            fontStyle: 'normal',
                                            lineHeight: '23px',
                                            letterSpacing: '0em',
                                            textAlign: 'center',
                                        }}
                                    >REWARD AND HOLDINGS</Box>
                                    </Flip>

                                    <Fade right>
                                    <Box
                                        sx={{
                                            color: '#FFFFFF',
                                            fontFamily: 'Poppins',
                                            fontWeight: '400',
                                            fontSize: "18px",
                                            fontStyle: 'normal',
                                            lineHeight: '27px',
                                            letterSpacing: '0em',
                                            textAlign: 'left',
                                            minWidth: "80%",
                                            // px: 5,
                                        }}
                                    >Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                        </Box>
                                        </Fade>
                                </Box>


                                <Box direction="column" >
                                    <Flip top>
                                    <Box> <img src={locked} /> </Box>
                                    </Flip>

                                    <Flip right>
                                    <Box
                                        sx={{
                                            color: '#02FFC2',
                                            fontFamily: 'Orbitron',
                                            fontWeight: '700',
                                            fontSize: "18px",
                                            fontStyle: 'normal',
                                            lineHeight: '23px',
                                            letterSpacing: '0em',
                                            textAlign: 'center',
                                        }}
                                    >LOCKED LIQUIDITY</Box>
                                    </Flip>

                                    <Fade right>
                                    <Box
                                        sx={{
                                            color: '#FFFFFF',
                                            fontFamily: 'Poppins',
                                            fontWeight: '400',
                                            fontSize: "18px",
                                            fontStyle: 'normal',
                                            lineHeight: '27px',
                                            letterSpacing: '0em',
                                            textAlign: 'left',
                                            minWidth: "80%",
                                            // px: 5,
                                        }}
                                    >Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                        </Box>
                                        </Fade>
                                </Box>

                            </Grid>

                        </Grid>

                        {/* Grid for tockonomics */}

                        <Grid item >

                            <Grid xs={12} md={12} lg={12} alignItems='center'
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
                                            my: -10,
                                        }}
                                    >
                                        <Fade left cascade>
                                            Tokenomics
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
                                        minWidth: "80%",
                                        px: 5,
                                    }}
                                >
                                    It is a long established fact that a reader will be distracted by the readable content
                                    of a page when looking at its layout.The point of using Lorem Ipsum is that it has a
                                    more-or-less normal distribution of letters, as opposed to using 'Content here.

                                </Box>
                                </Fade>
                            </Grid>
                        </Grid>


                    </Grid>
                </Container>
            </Box>
        </Box>

    );
}