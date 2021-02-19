import React from 'react';
import '../App.css';
import clsx from 'clsx';
import { Button, Grid, Paper, TextField, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


const useStyles = makeStyles((theme) => ({

    paperStyle: {
        padding: 20,
        height: '686px',
        width: '626px',
        borderRadius: '10px',
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
        paddingTop: '137px',
        paddingRight: '24px',
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
        color: '#B2B7BB',
        letterSpacing: '0.005em',
        textDecorationLine: 'underline',
        fontFamily: 'sans-serif',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        marginTop: '20px',
    },

    questPStyle: {
        color: '#B2B7BB',
        letterSpacing: '0.005em',
        fontFamily: 'sans-serif',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        marginTop: '20px',
    },

    linkRegStyle: {
        color: '#4285F4',
        letterSpacing: '0.005em',
        fontFamily: 'sans-serif',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        marginTop: '20px',
    },

    passInputStyle: {
        borderRadius: '10px',
    },

    eyeIconStyle: {
        color: 'red',
    },

    styleHelperText: {
        color: 'red',
        fontSize: '13px',
        marginLeft: '20px',
    },
  }));

  const Login = function SectionInputs({}) {

    const classes = useStyles();

    const [values, setValues] = React.useState({
      amount: '',
      email: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
    });

    const [errorEmail, setErrorEmail] = React.useState(false);

    const [errorPassword, setErrorPassword] = React.useState(false);
    /* console.log(values.email);
    console.log(values.password); */
    //my function inputs

    const handleChangeVisibilPass = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        !values.password && setErrorPassword(false);
      };

    const handleChangeEmail = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        !values.email && setErrorEmail(false);
      };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    
    //validation
    const handleSubmitForm = (event) => {
        event.preventDefault();
        /* (values.email != false && values.password != false) ? 
            alert("Your email: " + values.email +"\n"+"Your value: " + values.password) : setErrorEmail(true); */
            if (values.email != false && values.password != false) { 
                alert("Your email: " + values.email +"\n"+"Your value: " + values.password);
            } else {
                setErrorEmail(true);
                setErrorPassword(true);
            }
    };

    //take info from form


    //validation
   /*  const {register, handleSubmitForm} = useForm() */
    //
    return(
        <Grid>
            <Grid className={classes.loginBlockStyle}>
            <form onSubmit={(event) => handleSubmitForm(event)}>
                <Paper elevation={10} className={classes.paperStyle}>
                    <Grid>
                     <Grid className={classes.loginTitle}>Login</Grid> 
                    </Grid>
                    <Grid className={classes.textAreaBlock}>
                        <Grid className={classes.inputStyle}>
                        {!errorEmail ? 
                            <TextField 
                                id="outlined-basic"
                                className="inputRounded"
                                label="Email address" 
                                variant="outlined" 
                                onChange={handleChangeEmail('email')}
                                placeholder="Enter email" 
                                fullWidth
                                name="title" 
                            /> 
                            : 
                            <TextField
                            error
                            className="inputRounded"
                            id="outlined-error-helper-text"
                            label="Email address"
                            onChange={handleChangeEmail('email')}
                            helperText="Email required"
                            placeholder="Enter email" 
                            variant="outlined"
                            fullWidth
                            />
                        } 
                        </Grid>
                    </Grid>
                    <Grid className={classes.textAreaBlock}>
                        <Grid className={classes.inputStyle}>
                            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            {!errorPassword ? 
                                <>
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                    className={classes.passInputStyle}
                                    id="outlined-adornment-password"
                                    placeholder="Enter password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    onChange={handleChangeVisibilPass('password')}
                                    value={values.password}
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
                                    
                                    labelWidth={70}/>
                                    </>
                                    : 
                                    <>
                                    <InputLabel error  htmlFor="outlined-adornment-password">Password</InputLabel>
                                    
                                        <OutlinedInput
                                        error
                                        className={classes.passInputStyle}
                                        id="outlined-error-hepler-text"
                                        placeholder="Enter password"
                                        label="Password"
                                        helperText="Required password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        onChange={handleChangeVisibilPass('password')}
                                        helperText="Required password"
                                        variant="outlined"
                                        value={values.password}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                className={classes.eyeIconStyle}
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                                >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        labelWidth={70}/>
                                        <p className={classes.styleHelperText}>Password required</p>
                                    </>
                                    } 
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid className={classes.textAreaBlock}>
                        <Grid className={classes.buttonLogInStyle}>
                            <Button className={classes.logInButtonStyle} type="submit" color="primary" variant="contained" fullWidth >Log in</Button>
                        </Grid>
                    </Grid>
                    <Typography>
                        <Grid className={classes.textAreaBlock}>
                            <Link className={classes.linkStyle} href="#">
                                Forgot your password?
                            </Link>
                        </Grid>
                    </Typography>
                    <Typography>
                        <Grid className={classes.textAreaBlock}>
                         <Grid className={classes.questPStyle}>Don`t have an account yet?&nbsp;</Grid> 
                            <Link className={classes.linkRegStyle} href="#">
                                Register
                            </Link>
                        </Grid>
                    </Typography>
                </Paper>
                </form>
            </Grid>
        </Grid>
    );
}

export default Login;
