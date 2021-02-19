import React from 'react';
import {Grid, Paper} from '@material-ui/core';
import '../App.css';
import Login from './login';


const Background = () => {

    const backStyleColor = {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '100%', 
        width: '100%', 
        backgroundColor: '#000',
    };

    return(
        <Grid style = {backStyleColor}>
            <Login />
        </Grid>
    );
};

export default Background;