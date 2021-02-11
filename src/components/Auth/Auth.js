import React, {useState} from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Input from './Input'

const Auth = () => {
    const [showPassword, setShowPassword] = useState(false);
    const isSigendUp = false;
    
    const handleSubmit = () => {

    };

    const handleChange = () => {

    };
    
    const handleShowPassword = () => setShowPassword((prevShowPasword) => !prevShowPasword);
    
    
    
    return (
        <Container maxwith="xs">
            <Paper elevation={3}>
                <Avatar>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSigendUp ? 'Sign Up' : 'Sign in'}</Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        { isSigendUp && (
                            <>
                                <Input name="First name" label="First Name" handleChange={handleChange} autoFocus half />
                                <Input name="First name" label="First Name" handleChange={handleChange} xs={6} />
                            </>
                        )}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        { isSigendUp && <Input name="confirmPassword" label="Repeat Passwrod" handleChange={handleChange} type="password" />}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" >
                        {isSigendUp ? 'Sign Up' : 'Sign In'}    
                    </Button>
                </form>

            </Paper>
        </Container>
    )
}

export default Auth

