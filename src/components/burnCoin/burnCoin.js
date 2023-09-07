import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import vrGamer from '../../assets/vrGamer.png'
import trillion from '../../assets/trillion.png'
import { Container, useMediaQuery } from '@mui/material';
import { Fade } from 'react-reveal';




export default () => {
  const random = useMediaQuery("(max-width: 600px)");
  const tableWidth = useMediaQuery("(max-width: 600px)");
  return (
    <>
      <Box id="Burn & Rewards"
        style={{
          background: 'linear-gradient(to right bottom, #110026 46%, #110026 100%)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '100% 100%',
          backgroundSize: 'cover',
        }}>

        <Box
          style={{
            backgroundImage: `url(${vrGamer})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '100% 100%',
            backgroundSize: "cover"
          }}>
            <Container>
           <Grid lg={12} md={12} sm={8} xs={8}
           style={{
             padding: '15%'
           }}
           >

            <table border= '1'
              style={{
                width: tableWidth? "100%": "80%",
                borderWidth: '2px',
                borderStyle: 'solid',
                borderImage: 'linear-gradient(to bottom, #9f1384, #02ffc2) 1',
              }}
            >
              <thead
                style={{
                  color: '#06D9E2',
                  fontFamily: 'Orbitron',
                  fontWeight: '700',                 
                  fontSize: random? "13px": "34px",
                  fontStyle: 'normal',
                  lineHeight: '43px',
                  letterSpacing: '0em',
                  textAlign: 'center',
                  padding: 5,

                  borderWidth: '2px',
                borderStyle: 'solid',
                borderImage: 'linear-gradient(to bottom, #9f1384, #02ffc2) 1',
                }}
              >
                        <Fade right>
                <th>NO</th>
                <th> <Box>EAGLUINU COIN BURN</Box></th>
                </Fade>
              </thead>
              <tbody
                style={{
                  color: '#FFFFFF',
                  fontFamily: 'Poppins',
                  fontWeight: '500',
                  // fontSize: "36px",
                  fontSize: random? "20px": "36px",

                  fontStyle: 'normal',
                  lineHeight: '54px',
                  letterSpacing: '0em',
                  textAlign: 'center',
                  padding: 5
                }}
              >
                <Fade left>
                <tr>
                  <td>1st</td>
                  <td>1,000,000</td>
                </tr>
                <tr>
                  <td>2nd</td>
                  <td>2,000,000</td>
                </tr>
                <tr>
                  <td>3rd</td>
                  <td>4,000,000</td>
                </tr>
                <tr>
                  <td>4th</td>
                  <td>8,000,000</td>
                </tr>
                <tr>
                  <td>5th</td>
                  <td>16,000,000</td>
                </tr>
                <tr>
                  <td>6th</td>
                  <td>32,000,000</td>
                </tr>
                <tr>
                  <td>7th</td>
                  <td>64,000,000</td>
                </tr>
                <tr>
                  <td>8th</td>
                  <td>128,000,000</td>
                </tr>
                <tr>
                  <td>9th</td>
                  <td>256,000,000</td>
                </tr>
                <tr>
                  <td>10th</td>
                  <td>512,000,000</td>
                </tr>
                <tr>
                  <td>11th</td>
                  <td>1024,000,000</td>
                </tr>
                <tr>
                  <td>12th</td>
                  <td>Trillions of coin Burn</td>
                </tr>
                </Fade>
              </tbody>

            </table>
          

          </Grid>
          </Container>
        </Box>
      </Box>
    </>
  )
}