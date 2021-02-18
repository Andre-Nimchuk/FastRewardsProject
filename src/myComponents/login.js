import React from 'react';
import clsx from 'clsx';
import '../App.css';
import { Button, Grid, Paper, TextField, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({

    paperStyle: {
        padding: 20,
        height: '626px',
        width: '526px',
    },

    loginTitle: {
        fontFamily: "sans-serif", 
        fontStyle: "normal",
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 30,
        lineHeight: 7,
        display: "flex",
        justifyContent: "center",
    },

    loginBlockStyle: {
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '137px 24px 0 0',
    },

    inputStyle: {
        width: '300px',
    },

    textAreaBlock: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
    },

    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },

    margin: {
      marginTop: '30px', 
    },

    withoutLabel: {
      marginTop: theme.spacing(3),
    },

    textField: {
      width: '100%',
    },

    logInButtonStyle: {
        background: 'linear-gradient(90deg, #FF9146 0%, #FF351B 100%)',
        padding: '10px',
        fontSize: '18px',
    },

    buttonLogInStyle: {
        width: '200px',
        marginTop: '100px',
    },

    linkStyle: {
        color: ''
    },
  }));

  const Login = function SectionInputs() {

    const classes = useStyles();

    const [values, setValues] = React.useState({
      amount: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
    });

    //my function inputs
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return(
        <Grid>
            <Grid className={classes.loginBlockStyle}>
                <Paper elevation={10} className={classes.paperStyle}>
                    <Grid>
                    <p className={classes.loginTitle}>Login</p>
                    </Grid>
                    <Grid className={classes.textAreaBlock}>
                        <Grid className={classes.inputStyle}>
                            <TextField 
                                id="outlined-basic" 
                                label="Email address" 
                                variant="outlined" 
                                placeholder="Enter email" 
                                fullWidth required 
                                />
                        </Grid>
                    </Grid>
                    <Grid className={classes.textAreaBlock}>
                        <Grid className={classes.inputStyle}>
                            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                    id="outlined-adornment-password"
                                    placeholder="Enter password"
                                    required
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            >
                                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    labelWidth={70}
                                    />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid className={classes.textAreaBlock}>
                        <Grid className={classes.buttonLogInStyle}>
                            <Button className={classes.logInButtonStyle} type="submit" color="primary" variant="contained" fullWidth>Log in</Button>
                        </Grid>
                    </Grid>
                    <Typography>
                        <Grid className={classes.textAreaBlock}>
                            <Link className={classes.linkStyle} href="#">
                                Forgot your password?
                            </Link>
                        </Grid>
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Login;
