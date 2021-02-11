import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts'
import Posts from './components/Posts/Posts'
import Form  from './components/Form/Form' 
import useStyles from './styles';
import Navbar from './components/Navbar/Navbar'

function App() {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxwidth="lg">
      <Navbar />
      <Grow in>
        <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}> 
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>

      </Grow>
    </Container>
  );
}

export default App;
