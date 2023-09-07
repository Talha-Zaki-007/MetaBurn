import { Box, Container, Grid } from "@mui/material";
import { Fade, Flip } from "react-reveal";
import doubleDiamond from '../../assets/doubleDiamond.png'
import lightDiamond from '../../assets/lightDiamond.png'
import robo1 from '../../assets/robo1.png'
import robo2 from '../../assets/robo2.png'
import robo3 from '../../assets/robo3.png'
import robo4 from '../../assets/robo4.png'
import robo5 from '../../assets/robo5.png'
import robo6 from '../../assets/robo6.png'

export default function robots() {
  return (
    

      <Box id="NFT"
      pb={13}
        style={{
          background: 'linear-gradient(to right bottom, #110026 46%, #110026 100%)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '100% 100%',
          backgroundSize: 'cover',
        }}>

        <Box
          sx={{
            // position: 'relative',
            backgroundImage: `url(${lightDiamond})`,
            backgroundRepeat: 'no-repeat',
            ackgroundPosition: "bottom right"
          }}
        >

          <Container>






            <Grid container
              sx={{
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
              }}>

              <Grid item lg={12} md={12} sm={12} xs= {12} 
              >
                <img src={doubleDiamond} alt=""
                  style={{
                    width: '100%',
                  }}
                />
                


                </Grid>


                <Grid item lg={12} md={12} sm={12} xs= {12}
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  flexWrap: 'wrap',
                }}
              >
                <Fade left>
                <Box>
                  <img src={robo1} alt="VR-Robot" />
                </Box>
                </Fade>
                <Flip top>
                <Box>
                  <img src={robo2} alt="VR-Robot" />
                </Box>
                </Flip>
                <Fade right>
                <Box>
                  <img src={robo3} alt="VR-Robot" />
                </Box>
                </Fade>
              </Grid>


              

              <Grid item lg={12} md={12} sm={12} xs= {12}
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  flexWrap: 'wrap',
                }}
              >
                <Fade left>
                <Box>
                  <img src={robo4} alt="VR-Robot" />
                </Box>
                </Fade>
                <Flip bottom>
                <Box>
                  <img src={robo5} alt="VR-Robot" />
                </Box>
                </Flip>
                <Fade right>
                <Box>
                  <img src={robo6} alt="VR-Robot" />
                </Box>
                </Fade>
              </Grid>
            </Grid>
          </Container>
        </Box>
        
      </Box>
  )
}
