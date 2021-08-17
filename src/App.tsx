import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSetRecoilState } from 'recoil'

import Landing from './routes/Landing';
import Find from './routes/Find';
import Make from './routes/Make';
import NotFound from './routes/NotFound';

import './App.scss';
import { Masthead, Go } from './components';
import useFetch from './hooks/useFetch';

import CurrencySelector from './components/currency/CurrencySelector';
import { pricesContentState } from './store/prices';

import { ExchangeInterface } from './interfaces';

const App: React.FC = () => {

  const setPrices = useSetRecoilState(pricesContentState);

  // this throws an error: https://github.com/facebookexperimental/Recoil/issues/12
  const { data } = useFetch<ExchangeInterface>('https://api.coinbase.com/v2/exchange-rates?currency=USD');
  data && setPrices({
    BTC: data?.data.rates.BTC,
    ETH: data?.data.rates.ETH,
    LTC: data?.data.rates.LTC,
    USD: 1
  });
  
  return (
    <React.Fragment>
      <Masthead> <Go to={{pathname: '/'}}>Seabass</Go><CurrencySelector/></Masthead>
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