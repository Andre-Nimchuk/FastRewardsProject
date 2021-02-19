import React from 'react';
import '../App.css';
import Login from './login';
import {Grid, Paper, ButtonBase} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from '../img/1.png';
import BottomWave from '../img/wavefull.png';
import SpiralFirst from '../img/spiral1.png';
import SpiralSecond from '../img/spiral2.png';


    const useStyles = makeStyles((theme) => ({

        backStyleColor: {
            height: '100%', 
            width: '100%', 
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            backgroundColor: '#EEF2F5',
        },

        leftStyleBlock: {
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            backgroundImage: `url(${Image})`,
            backgroundPositionY: 'bottom',
            backgroundSize: '900px',
            backgroundRepeat: 'no-repeat',
            zIndex: '1',
        },

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
        },

        spiralFirstStyle: {
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
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
            justifyContent: 'flex-end',
            alignItems: 'center',
            backgroundImage: `url(${SpiralSecond})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
            backgroundPositionX: '-20px',
            backgroundPositionY: '548px',
            
            backgroundSize: '10%',
        },
    }));
    const Background = function SectionBackStyle({}) {

        const classes = useStyles();

    return(
        <Grid className={classes.backStyleColor}>
            <Grid className={classes.downBackImg}>
                <Grid className={classes.leftStyleBlock}>
                    <Grid className={classes.spiralSecondStyle}>
                        <Grid className={classes.spiralFirstStyle}>
                            <Grid>
                                <Login/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Background;