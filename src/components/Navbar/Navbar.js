import React, {useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core'
import { Link } from 'react-router-dom';

import image from '../../images/scrollList.png'
import useStyles from './styles'

const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(() => {
      const token = user?.token;

      // JWT 
      setUser(JSON.parse(localStorage.getItem('profile')))
    }, []);

    console.log(user);
    return (
      
      <AppBar className={ classes.appBar } position="static" color= "inherit">
        <Typography component={Link} to="/" className={ classes.heading } variant="h3" align="center">Scroll</Typography>
        <img className={ classes.image } src={image} alt="items" height="60" />
      
      <Toolbar>
        {user ? (
            <Avatar alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}

            </Avatar>
        ):( 
            <Button component={Link} to="/auth" variant="contained" color="primary">Signin</Button>
        )}
      </Toolbar>
      </AppBar>
      
    )
}

export default Navbar
