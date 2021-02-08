import React, { useState } from 'react';
import { textField, button, Typography, Paper } from '@material-ui/core';

import useStyles from './styles';

const Form =() => {
    const classes = useStyles();

    const [ postData, setPostData ] = useState({
        creator: '', title:'', message:'', tags:'', selectedFile:''
    });
    const handleSubmit = () => {

    };

    return(
        <Paper className= {classes.paper}>
            <form autoComplete="off" noValidate className={ classes.form } onSubmit={handleSubmit}>
            <Typography variant="h6">Adding an Item</Typography>
            <textField 
                name="creator" 
                variant="outlined" 
                label="Creator" 
                fullWidth 
                value={ postData.creator} 
                onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
            />
            <textField 
                name="title" 
                variant="outlined" 
                label="Title" 
                fullWidth 
                value={ postData.title} 
                onChange={(e) => setPostData({ ...postData, title: e.target.value })}
            />
            <textField 
                name="message" 
                variant="outlined" 
                label="Message" 
                fullWidth 
                value={ postData.message} 
                onChange={(e) => setPostData({ ...postData, message: e.target.value })}
            />
            <textField 
                name="tags" 
                variant="outlined" 
                label="Tags" 
                fullWidth 
                value={ postData.tags} 
                onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
            />
            
            </form>

        </Paper>
    );
}

export default Form;