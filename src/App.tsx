import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSetRecoilState } from 'recoil'

import Landing from './routes/Landing';
import Find from './routes/Find';
import Make from './routes/Make';
import NotFound from './routes/NotFound';

import './App.scss';
import { Masthead, Go } from './components';

import CurrencySelector from './components/currency/CurrencySelector';
import { pricesContentState } from "./store/prices";

const App: React.FC = () => {

  const setPrices = useSetRecoilState(pricesContentState);

  useEffect(() => {
    fetch("https://api.coinbase.com/v2/exchange-rates?currency=USD")
    .then(response => response.json())
    .then(data =>
      setPrices({
        BTC: data.data.rates.BTC,
        ETH: data.data.rates.ETH,
        LTC: data.data.rates.LTC,
        USD: 1
      })
  )},[])
  
  return (
    <React.Fragment>
      <Masthead> <Go to={{pathname: '/' }}>Seabass</Go><CurrencySelector/></Masthead>
        <Switch>
          <Route exact path='/' component={ Landing }/>
          <Route path='/find' component={ Find }/>
          <Route path='/make' component={ Make }/>
          <Route component={ NotFound } />
        </Switch>
    </React.Fragment>
  );
};

export default App;