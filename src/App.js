import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'

function App() {

  return (
    <BrowserRouter>
      <Container maxwidth="lg">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Home />
      </Container>
    </BrowserRouter>
  );
}

export default App;
