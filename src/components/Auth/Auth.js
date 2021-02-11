import React from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const handleSubmit = () => {

};

const handleChange = () => {

};

const Auth = () => {
    const state = null;
    const isSigendUp = true;
    return (
        <Container maxwith="xs">
            <Paper elevation={3}>
                <Avatar>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSigendUp ? 'Sign Up' : 'Sign in'}</Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSigendUp && (
                                <>
                                <TextField name="First name" label="First Name" handleChange={handleChange} autoFocus xs={6} />
                                </>
                            )
                        }
                    </Grid>
                </form>

            </Paper>
        </Container>
    )
}

export default Auth

