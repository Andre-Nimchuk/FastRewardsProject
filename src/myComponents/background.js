import React from 'react';
import '../App.css';
import Login from './login';
import {Grid, Paper, ButtonBase} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from '../img/1.png';
import BottomWave from '../img/wavefull.png'
import { BorderBottomOutlined } from '@material-ui/icons';


    const useStyles = makeStyles((theme) => ({

        backStyleColor: {
            height: '100%', 
            width: '100%', 
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            backgroundColor: '#EEF2F5',
        },

        downBackStyle: {
            width: '100%',
            height: '357px',
        },
        
        twoStyleBlock: {
            height: '100%',
            width: '100%',
        },

        leftStyleBlock: {
            height: '100%',
            width: '100%',
            backgroundImage: `url(${Image})`,
            backgroundPositionY: 'bottom',
            backgroundSize: '900px',
            backgroundRepeat: 'no-repeat',
        },

        downBackImg: {
            height: '100%',
            width: '100%',
            backgroundImage: `url(${BottomWave})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
            backgroundSize: '100%',
        },
    }));
    const Background = function SectionBackStyle({}) {

        const classes = useStyles();

    return(
        <Grid className={classes.backStyleColor}>
            <Grid className={classes.downBackImg}>
                <Grid className={classes.leftStyleBlock}>
                <Grid>
                    <Login/>
                </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Background;