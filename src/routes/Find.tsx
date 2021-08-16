import React, { useState } from 'react';
import { useRecoilValue } from 'recoil'
import { currencyContentState } from "../store/currency";
import { pricesContentState } from "../store/prices";
import { useHistory, Link } from 'react-router-dom';
import { getParams } from '../utils';
import { Main, Section, Button } from '../components';

import './Find.scss';
import { CurrencyDisplay } from '../components/currency';

import { CurrenciesInterface} from "../interfaces";

const fakeCocktails = [
  'foo',
  'bar'
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
  const calculatedCost = parseFloat((prices[currentCurrency] * 500).toFixed(5)); // sub for current price later

  return (
    <Main name='find' className={isFancy ? 'isFancy' : 'isCheap'}>
      <Section name='results'>
        { !isFancy
          ? <React.Fragment>
            <span className='section-results-title'> The absolute cheapest, bottom shelf {input} we could find is</span>
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
        <span> here are the cocktails you could make</span>
        <ul>
          {fakeCocktails.map(cocktail =>
            <li key={cocktail} >
              <Link to={{ pathname: '/make', search: `cocktail=${cocktail}`}}>
                {cocktail}
              </Link>
            </li>
          )}
        </ul>
      </Section>
    </Main>
  );
};

export default Find;
