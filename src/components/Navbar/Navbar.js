import React from 'react';
import { AppBar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom';

import image from '../../images/scrollList.png'
import useStyles from './styles'

const Navbar = () => {
    const classes = useStyles();
    return (
      <div> 
      <AppBar className={ classes.appBar } position="static" color= "inherit">
        <Typography component={Link} to="/" className={ classes.heading } variant="h3" align="center">Scroll</Typography>
        <img className={ classes.image } src={image} alt="items" height="60" />
      </AppBar>
      </div> 
    )
}

export default Navbar
