import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './routes/Landing';
import Find from './routes/Find';
import Make from './routes/Make';
import NotFound from './routes/NotFound';

import './App.scss';
import { Masthead } from './components';

const App: React.FC = () => {

  return (
    <Fragment>
      <Masthead> Seabass </Masthead>
        <Switch>
          <Route exact path='/' component={ Landing }/>
          <Route exact path='/find' component={ Find }/>
          <Route exact path='/make' component={ Make }/>
          <Route component={ NotFound } />
        </Switch>
    </Fragment>
  );
};

export default App;