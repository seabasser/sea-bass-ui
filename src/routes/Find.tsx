import React, { useState } from 'react';
import { useRecoilValue } from 'recoil'
import { useHistory } from 'react-router-dom';

import { currencyContentState } from '../store/currency';
import { pricesContentState } from '../store/prices';

import { Main, Section, Button, Go, Heading, CurrencyDisplay } from '../components';

import { getParams, normalizePrice } from '../utils';

import './Find.scss';

const fakeCocktails = [
  'Martini',
  'Margarita'
]

const Find: React.FC = () => {

  const input = getParams(useHistory().location.search);
  const [isFancy, setIsFancy] = useState(false);
  const currency = useRecoilValue(currencyContentState);
  const prices = useRecoilValue(pricesContentState);

  const handleFancyFlip = () => { 
    setIsFancy(!isFancy);
  }

  const currentCurrency = currency.type;
  const calculatedCost = normalizePrice(5.98, prices[currentCurrency], 5);
  return (
    <Main name='find' className={isFancy ? 'isFancy' : 'isCheap'}>
      <Section name='results'>
        { !isFancy
          ? <React.Fragment>
            <Heading Level='h2' weight='light'> The absolute cheapest, bottom shelf {input} we could find is</Heading>
            <span> foo for <CurrencyDisplay price={calculatedCost} currency={currency.type}/></span>
            <Button onClick={handleFancyFlip}>
              ✨ I'm feeling fancy ✨
            </Button>
          </React.Fragment>
          : <React.Fragment>
            <span> Oh, you're feeling fancy? Try: bar </span>
            <Button onClick={handleFancyFlip}>
                I'm feeling cheap
            </Button>
          </React.Fragment>
        }
      </Section>
      <Section name='cocktails'>
        <Heading Level='h2' weight='light'> here are the cocktails you could make</Heading>
        <ul>
          {fakeCocktails.map(cocktail =>
            <li key={cocktail} >
              <Go to={{ pathname: '/make', search: `cocktail=${cocktail}`}}>
                {cocktail}
              </Go>
            </li>
          )}
        </ul>
      </Section>
    </Main>
  );
};

export default Find;
