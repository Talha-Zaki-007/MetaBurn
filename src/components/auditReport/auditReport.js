import React from 'react'
import { Box, Container, Grid } from '@mui/material'
import vector from '../../assets/Vector3.png'
import whitePaper from '../../assets/whitePaper.png'
import vrBoy from '../../assets/vrBoy.png';
import arrowDown from '../../assets/arrowDown.png';
import { Fade, Flip } from 'react-reveal';


export default function AuditReport() {
  return (
      <Box id="Charity"
        style={{
          background: 'linear-gradient(to right bottom, #110026 46%, #110026 100%)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '100% 100%',
          backgroundSize: 'cover',
          paddingTop: '10%',
        }}>

        <Container>
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
          </Grid>


          <Grid container spacing={5}
            style={{
              display: 'flex',
              flexDirection: "row",
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Grid item lg={6} md={6} sm={12} xm={12} spacing={3}
              sx={{
              }}>
                <Flip top>
              <Box
                sx={{
                  color: "#FFFFFF",
                  fontFamily: "Orbitron",
                  fontSize: "30px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "38px",
                  letterSpacing: "0em",
                  textAlign: "center",

                  mb: 4,
                  borderRadius: 1,
                  boxShadow: "6px 6px 6px -2px #250647 , 3px 3px 3px 3px #250647 , 0px 0px 6px 6px #250647",
                  p: 7,
                }}>
                Whitepaper
                <Box>
                  <img src={arrowDown} alt="ArrowDown Image" />
                </Box>
              </Box>
              </Flip>



              <Flip top>
              <Box
                sx={{
                  color: "#FFFFFF",
                  fontFamily: "Orbitron",
                  fontSize: "30px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "38px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  p: 7,
                  boxShadow: "6px 6px 6px -2px #250647 , 3px 3px 3px 3px #250647 , 0px 0px 6px 6px #250647",
                  borderRadius: 1,
                }}>
                Audit Report
                <Box>
                  <img className='arrowDown' src={arrowDown} alt="ArrowDown Image" />
                </Box>
              </Box>
              </Flip>
            </Grid>


            <Grid item lg={6} md={6} xs={12} >
            <Fade right>

              <img src={vrBoy} alt="VR Boy"
                style={{
                  width: "100%",
                  padding: "0",
                  maxWidth: "90%"
                }}
              />
              </Fade>
            </Grid>

          </Grid>
        </Container>
      </Box>
    
  )
}
