import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import items from './images/car.jpg'
import Posts from './components/Posts/Posts'
import Form  from './components/Form/Form' 
import useStyles from './styles';

function App() {

  const classes = useStyles();

  return (
    <Container maxwidth="lg">
      <AppBar className={ classes.appBar } position="static" color= "inherit">
        <Typography className={ classes.heading } variant="h2" align="center">Items</Typography>
        <img className={ classes.image } src={items} alt="items" height="60" />
      </AppBar>
      <Grow in>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}> 
          <Grid item xs={12} sm={7}>
            <Posts />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form />
          </Grid>
        </Grid>

      </Grow>
    </Container>
  );
}

export default App;
