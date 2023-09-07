import { maxWidth, width } from '@mui/system'
import React from 'react'
import { Grid, Box, Container } from '@mui/material'
import memesBg from '../../assets/memes-bg.png'
import group from '../../assets/memes-design.png'
import vector from '../../assets/Vector3.png';
import fiveContent from '../../assets/fiveContent.png'




export default function memes() {
    return (
        <>

            <Box
                style={{
                    background: 'linear-gradient(to right bottom, #110026 46%, #110026 100%)',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '100% 100%',
                    backgroundSize: 'cover',
                }}>
                <Box
                    style={{
                        backgroundImage: `url(${memesBg})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '100% 100%',
                        backgroundSize: 'cover',
                    }}>
                        <Container>
                        <Grid>
                            <img src={fiveContent} alt="" 
                            style={{
                                width: '100%'
                            }}
                            />
                        </Grid>
                        </Container>

                       
                </Box>
            </Box>
        </>
    )
}
