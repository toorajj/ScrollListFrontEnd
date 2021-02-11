import React from 'react';
import { AppBar, Typography } from '@material-ui/core'
import image from '../../images/scrollList.png'
import useStyles from './styles'

const Navbar = () => {
    const classes = useStyles();
    return (
      <AppBar className={ classes.appBar } position="static" color= "inherit">
        <Typography className={ classes.heading } variant="h3" align="center">Scroll</Typography>
        <img className={ classes.image } src={image} alt="items" height="60" />
      </AppBar>
    )
}

export default Navbar
