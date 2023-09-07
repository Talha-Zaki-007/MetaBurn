import React from 'react';
import { Grid, Box, Container, useMediaQuery } from '@mui/material';

import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import image5 from '../../assets/image5.png';
import image6 from '../../assets/image6.png';
import diamond from '../../assets/diamond.png';
import vector from '../../assets/Vector3.png'
import { Fade } from 'react-reveal';
import HeadShake from 'react-reveal/HeadShake';






export default function OurPartners() {
  const random = useMediaQuery("(max-width: 600px)");
  const borderRight = useMediaQuery("(min-width: 600px)");
  return (
    <>


      <Box
        style={{
          background: 'linear-gradient(to right bottom, #110026 46%, #110026 100%)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '100% 100%',
          backgroundSize: 'cover',
          paddingTop: '10%',
        }}>

        <Container>


          <Grid container
            sx={{
              display: "flex",
              flexDirection: "row",
              boxShadow: "6px 6px 6px -2px #250647 , 3px 3px 3px 3px #250647 , 0px 0px 6px 6px #250647",
            }}>

            <Grid item lg={4} md={4} xs={12} alignItems='center' justifyContent='center'
            
              sx={{
                boxShadow: borderRight? "4px 0px 0px 0px #561264" : null, 
                display: 'flex',
                flexDirection: 'column'
              }}>
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
                    mx: -6,
                    // mx: random? "-3": "-6",
                    my: -10,
                  }}
                >
                <Fade left cascade>
                  Our Partners
                  </Fade>
                </Box>
              </Box>
            </Grid>



            <Grid item lg={8} md={8} alignItems='center' justifyContent='center'
            // sm={12} xs={12}
              sx={{

              }}
            >

              <Box
                sx={{
                  display: 'flex',
                  // display: random? "block": "flex",
                  flexDirection: "row",
                  justifyContent: "space-around ",
                  flexWrap: 'wrap'
                }}
              >
                <Fade left>
                <Box>
                  <img src={image1} alt="Brand Logo" />
                </Box>
                </Fade>

                <Fade right>
                <Box item>
                  <img src={image2} alt="Brand Logo" />
                </Box>
                </Fade>

              </Box>

              <Box
                sx={{
                  display: 'flex',
                  // display: random? "block": "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  flexWrap: 'wrap'

                }}
              >
                <Fade left>
                <Box>
                  <img src={image3} alt="Brand Logo" />
                </Box>
                </Fade>
                <Fade right>
                <Box>
                  <img src={image4} alt="Brand Logo" />
                </Box>
                </Fade>
              </Box>

              <Box 
                sx={{
                  display: 'flex',
                  // display: random? "block": "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  flexWrap: 'wrap'

                }}>
                  <Fade left>
                <Box>
                  <img src={image5} alt="Brand Logo" />
                </Box>
                </Fade>

                <Fade right>
                <Box>
                  <img src={image6} alt="Brand Logo" />
                </Box>
                </Fade>
              </Box>


            </Grid>

            {/* <Box
            sx={{
              position: "absolute",
              mx: 117,
              my: 17,
              width: '100px',
              height: '100px'
            }}
          >
            <img src={diamond} alt="Diamond" />
          </Box> */}
          </Grid>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

        </Container>
      </Box>
    </>
  )
}
