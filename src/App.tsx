import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './routes/Landing';
import Find from './routes/Find';
import Make from './routes/Make';
import NotFound from './routes/NotFound';

import './App.scss';
import { Masthead } from './components';

import CurrencySelector from './components/currency/CurrencySelector';

const App: React.FC = () => {

  return (
    <React.Fragment>
      <Masthead> Seabass <CurrencySelector/></Masthead>
        <Switch>
          <Route exact path='/' component={ Landing }/>
          <Route exact path='/find' component={ Find }/>
          <Route exact path='/make' component={ Make }/>
          <Route component={ NotFound } />
        </Switch>
    </React.Fragment>
  );
};

export default App;