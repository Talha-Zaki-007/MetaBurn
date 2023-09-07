import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Bounce, Flip } from 'react-reveal';
import img from '../../assets/meta-main-logo.png'
import { HashLink } from 'react-router-hash-link';


export default function SwipeableTemporaryDrawer({ data }) {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{
                background: '#16002C',
                height: '100%',
                width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,

            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >

            <List sx={{ paddingLeft: '8%' }}>
                {data.map((text, index) => (
                    <Box sx={{ color: 'white', }}>
                        <ListItem button key={text} >

                        <HashLink to={`/#${text}`} smooth
                                            style={{
                                                textDecoration: 'none',
                                                color: '#FFFFFF'
                                            }}
                                        >
                            <ListItemText primary={text} />
                                        </HashLink>

                            {/* <a href={`#${text.toLowerCase()}`} style={{  textDecoration: 'none' }}> */}
                            {/* </a> */}
                        </ListItem>
                        <Divider />
                    </Box>
                ))}
            </List>
        </Box>
    );

    return (
        <Box >

            {['left'].map((anchor) => (
                <React.Fragment key={anchor}  >
                    <Button onClick={toggleDrawer(anchor, true)}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <MenuIcon style={{ color: '#ede7f6' }} />
                        </IconButton>
                    </Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >



                        <Box mx="auto" 
                            sx={{
                                // background: '#16002C',
                                background: 'linear-gradient(to right bottom, #110026 46%, #110026 100%)',
                                height: '30%',
                                width: '100%',
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



                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </Box>
    );
}
