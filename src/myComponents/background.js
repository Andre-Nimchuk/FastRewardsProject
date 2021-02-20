import React from 'react';
import '../App.css';
import Login from './login';
import {Grid, Paper, ButtonBase} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Image from '../img/1.png';
import BottomWave from '../img/wavefull.png';
import SpiralFirst from '../img/spiral1.png';
import SpiralSecond from '../img/spiral2.png';
import Mountain from '../img/mountain.png';
import Cloud from '../img/cloud.png';
import Someextr from '../img/someextr.png';
import Gravecen from '../img/gravecen.png';
import Grave from '../img/grave.png';
import NewSpiralOne from '../img/newspiral1.png';
import Wavemd from '../img/wavemd.png';
import SpiralVertical from '../img/spiralvertical.png';


    const useStyles = makeStyles((theme) => ({

        backStyleColor: {
            height: '100%', 
            width: '100%', 
            display: 'flex',
            justifyContent: 'flex-end',
            [theme.breakpoints.down("md")]: {
                display: 'flex',
                justifyContent: 'center',
            },
            [theme.breakpoints.down("sm")]: {
                display: 'flex',
                justifyContent: 'center',
            },
            alignItems: 'center',
            backgroundColor: '#EEF2F5',
        },

        leftStyleBlock: {
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            [theme.breakpoints.down("md")]: {
                display: 'flex',
                justifyContent: 'center',
            },
            [theme.breakpoints.down("sm")]: {
                display: 'flex',
                justifyContent: 'center',
            },
            alignItems: 'center',
            backgroundImage: `url(${Image})`,
            backgroundPositionY: 'bottom',
            backgroundSize: '900px',
            backgroundRepeat: 'no-repeat',
        },

        //bottom mobile image

        newStyleGadgetbottom: {
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${Someextr})`,
            [theme.breakpoints.down("xs")]: {
                display: 'flex',
                justifyContent: 'center',
                backgroundImage: 'none',
            },
            backgroundPositionY: '850px',
            backgroundSize: '170px',
            backgroundRepeat: 'no-repeat'
        },

        newStyleGadgetbottomSecond: {
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${Cloud})`,
            [theme.breakpoints.down("xs")]: {
                display: 'flex',
                justifyContent: 'center',
                backgroundImage: 'none',
            },
            backgroundPositionX: 'center',
            backgroundPositionY: 'bottom',
            backgroundSize: '220px',
            backgroundRepeat: 'no-repeat'
        },

        newStyleGadgetbottomThird: {
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${Mountain})`,
            [theme.breakpoints.down("xs")]: {
                display: 'flex',
                justifyContent: 'center',
                backgroundImage: 'none',
            },
            backgroundPositionX: 'right',
            backgroundPositionY: 'bottom',
            backgroundSize: '200px',
            backgroundRepeat: 'no-repeat'
        },

        //end bottom mobile image

        downBackImg: {
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            backgroundImage: `url(${BottomWave})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
            backgroundSize: '100%',
            [theme.breakpoints.down("md")]: {
                display: 'flex',
                justifyContent: 'center',
                backgroundImage: `url(${Wavemd})`,
                backgroundSize: '100%',
            },
            [theme.breakpoints.down("xs")]: {
                display: 'flex',
                justifyContent: 'center',
                backgroundImage: `url(${Wavemd})`,
                backgroundSize: '115%',
                height: '100%',
            },
        },

        spiralFirstStyle: {
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            [theme.breakpoints.down("md")]: {
                display: 'flex',
                justifyContent: 'center',
            },
            [theme.breakpoints.down("sm")]: {
                display: 'flex',
                justifyContent: 'center',
            },
            alignItems: 'center',
            backgroundImage: `url(${SpiralFirst})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
            backgroundPositionX: '740px',
            backgroundSize: '10%',
        },

        newspiralFirstStyle: {
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${SpiralFirst})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
            backgroundPositionX: '740px',
            backgroundSize: '10%',
        },

        spiralSecondStyle: {
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${SpiralSecond})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
            backgroundPositionX: '-20px',
            backgroundPositionY: '548px',
            backgroundSize: '10%',
        },

        newspiralSecondStyle: {
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${SpiralSecond})`,
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: '660px',
            backgroundPositionY: '568px',
            backgroundSize: '16%',
        },

        graveCen: {
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${Gravecen})`,
            [theme.breakpoints.down("xs")]: {
                display: 'flex',
                justifyContent: 'center',
                backgroundImage: 'none',
            },
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: '8px',
            backgroundPositionY: '568px',
            backgroundSize: '11%',
        },

        newSpiralOne: {
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${NewSpiralOne})`,
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: '8px',
            backgroundPositionY: 'top',
            backgroundSize: '24%',
        },

        newGraveTwo: {
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${Grave})`,
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: '640px',
            backgroundPositionY: '80px',
            backgroundSize: '8%',
        },

        newGraveThird: {
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${Grave})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
            backgroundPositionX: 'left',
            backgroundPositionY: 'bottom',
            backgroundSize: '20%',
        },
        SpiralVertical: {
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${SpiralVertical})`,
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: 'right',
            backgroundPositionY: 'bottom',
            backgroundSize: '30%',
        },

        none: {
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            [theme.breakpoints.down("md")]: {
                display: 'flex',
                justifyContent: 'center',
            },
            [theme.breakpoints.down("sm")]: {
                display: 'flex',
                justifyContent: 'center',
            },
            alignItems: 'center',
        }
    }));
    const Background = function SectionBackStyle({}) {

        const classes = useStyles();

        const theme = useTheme();
        const matches = useMediaQuery(theme.breakpoints.down('md'));
        const smallest = useMediaQuery(theme.breakpoints.down('xs'));

    return(
        <Grid className={classes.backStyleColor}>
            <Grid className={classes.downBackImg}>
                <Grid className={matches ? classes.newStyleGadgetbottom : classes.leftStyleBlock}>
                    <Grid className={matches ? classes.newStyleGadgetbottomSecond : classes.none}>
                        <Grid className={matches ? classes.newStyleGadgetbottomThird : classes.none}>
                            <Grid className={matches ? classes.newspiralSecondStyle : classes.spiralSecondStyle}>
                                <Grid className={matches ? classes.newspiralSecondStyle : classes.spiralFirstStyle}>
                                    <Grid className={matches ? classes.graveCen : classes.none}>
                                        <Grid className={matches ? classes.newSpiralOne : classes.none}>
                                            <Grid className={matches ? classes.newGraveTwo : classes.none}>
                                                <Grid className={smallest ? classes.newGraveThird : classes.none}>
                                                    <Grid className={smallest ? classes.SpiralVertical : classes.none}>
                                                        <Grid>
                                                            <Login/>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Background;

/* import React from 'react';
import '../App.css';
import Login from './login';
import {Grid, Paper, ButtonBase} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Image from '../img/1.png';
import BottomWave from '../img/wavefull.png';
import SpiralFirst from '../img/spiral1.png';
import SpiralSecond from '../img/spiral2.png';
import Mountain from '../img/mountain.png';
import Cloud from '../img/cloud.png';
import Someextr from '../img/someextr.png';
import Gravecen from '../img/gravecen.png';
import Grave from '../img/grave.png';
import NewSpiralOne from '../img/newspiral1.png';
import Wavemd from '../img/wavemd.png';
import SpiralVertical from '../img/spiralvertical.png';


    const useStyles = makeStyles((theme) => ({

        backStyleColor: {
            height: '100%', 
            width: '100%', 
            display: 'flex',
            justifyContent: 'flex-end',
            [theme.breakpoints.down("md")]: {
                display: 'flex',
                justifyContent: 'center',
            },
            [theme.breakpoints.down("sm")]: {
                display: 'flex',
                justifyContent: 'center',
            },
            alignItems: 'center',
            backgroundColor: '#EEF2F5',
        },

        leftStyleBlock: {
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            [theme.breakpoints.down("md")]: {
                display: 'flex',
                justifyContent: 'center',
            },
            [theme.breakpoints.down("sm")]: {
                display: 'flex',
                justifyContent: 'center',
            },
            alignItems: 'center',
            backgroundImage: `url(${Image})`,
            backgroundPositionY: 'bottom',
            backgroundSize: '900px',
            backgroundRepeat: 'no-repeat',
        },

        //bottom mobile image

        newStyleGadgetbottom: {
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${Someextr})`,
            backgroundPositionY: '870px',
            backgroundSize: '150px',
            backgroundRepeat: 'no-repeat'
        },

        newStyleGadgetbottomSecond: {
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${Cloud})`,
            backgroundPositionX: 'center',
            backgroundPositionY: '800px',
            backgroundSize: '220px',
            backgroundRepeat: 'no-repeat'
        },

        newStyleGadgetbottomThird: {
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${Mountain})`,
            backgroundPositionX: '530px',
            backgroundPositionY: 'bottom',
            backgroundSize: '200px',
            backgroundRepeat: 'no-repeat'
        },

        //end bottom mobile image

        downBackImg: {
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            backgroundImage: `url(${BottomWave})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
            backgroundSize: '100%',
            [theme.breakpoints.down("md")]: {
                display: 'flex',
                justifyContent: 'center',
                backgroundImage: `url(${Wavemd})`,
                backgroundSize: '100%',
            },
            [theme.breakpoints.down("xs")]: {
                display: 'flex',
                justifyContent: 'center',
                backgroundImage: `url(${Wavemd})`,
                backgroundSize: '115%',
                height: '100%',
            },
        },

        spiralFirstStyle: {
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            [theme.breakpoints.down("md")]: {
                display: 'flex',
                justifyContent: 'center',
            },
            [theme.breakpoints.down("sm")]: {
                display: 'flex',
                justifyContent: 'center',
            },
            alignItems: 'center',
            backgroundImage: `url(${SpiralFirst})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
            backgroundPositionX: '740px',
            backgroundSize: '10%',
        },

        newspiralFirstStyle: {
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${SpiralFirst})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
            backgroundPositionX: '740px',
            backgroundSize: '10%',
        },

        spiralSecondStyle: {
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${SpiralSecond})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
            backgroundPositionX: '-20px',
            backgroundPositionY: '548px',
            backgroundSize: '10%',
        },

        newspiralSecondStyle: {
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${SpiralSecond})`,
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: '660px',
            backgroundPositionY: '568px',
            backgroundSize: '16%',
        },

        graveCen: {
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${Gravecen})`,
            [theme.breakpoints.down("xs")]: {
                display: 'flex',
                justifyContent: 'center',
                backgroundImage: 'none',
            },
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: '8px',
            backgroundPositionY: '568px',
            backgroundSize: '11%',
        },

        newSpiralOne: {
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${NewSpiralOne})`,
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: '8px',
            backgroundPositionY: 'top',
            backgroundSize: '24%',
        },

        newGraveTwo: {
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${Grave})`,
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: '640px',
            backgroundPositionY: '80px',
            backgroundSize: '8%',
        },

        newGraveThird: {
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${Grave})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
            backgroundPositionX: 'left',
            backgroundPositionY: 'bottom',
            backgroundSize: '20%',
        },
        SpiralVertical: {
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${SpiralVertical})`,
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: 'right',
            backgroundPositionY: 'bottom',
            backgroundSize: '30%',
        },

        none: {
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            [theme.breakpoints.down("md")]: {
                display: 'flex',
                justifyContent: 'center',
            },
            [theme.breakpoints.down("sm")]: {
                display: 'flex',
                justifyContent: 'center',
            },
            alignItems: 'center',
        }
    }));
    const Background = function SectionBackStyle({}) {

        const classes = useStyles();

        const theme = useTheme();
        const matches = useMediaQuery(theme.breakpoints.down('md'));
        const smallest = useMediaQuery(theme.breakpoints.down('xs'));

    return(
        <Grid className={classes.backStyleColor}>
            <Grid className={classes.downBackImg}>
                <Grid className={matches ? classes.newStyleGadgetbottom : classes.leftStyleBlock}>
                    <Grid className={matches ? classes.newStyleGadgetbottomSecond : classes.none}>
                        <Grid className={matches ? classes.newStyleGadgetbottomThird : classes.none}>
                            <Grid className={matches ? classes.newspiralSecondStyle : classes.spiralSecondStyle}>
                                <Grid className={matches ? classes.newspiralSecondStyle : classes.spiralFirstStyle}>
                                    <Grid className={matches ? classes.graveCen : classes.none}>
                                        <Grid className={matches ? classes.newSpiralOne : classes.none}>
                                            <Grid className={matches ? classes.newGraveTwo : classes.none}>
                                                <Grid className={smallest ? classes.newGraveThird : classes.none}>
                                                    <Grid className={smallest ? classes.SpiralVertical : classes.none}>
                                                        <Grid>
                                                            <Login/>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Background; */