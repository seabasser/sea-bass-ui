import React, { useState } from 'react';
import { useRecoilValue } from 'recoil'
import { useHistory } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

import { currencyContentState } from '../store/currency';
import { pricesContentState } from '../store/prices';

import { Main, Section, Button, Go, Heading, CurrencyDisplay, Error, Loading } from '../components';

import { getParams, normalizePrice, capitalizeFirstLetter } from '../utils';

import './Find.scss';

const fakeCocktails = [
  'Martini',
  'Margarita'
]

const Find: React.FC = () => {

  const input = capitalizeFirstLetter(getParams(useHistory().location.search));
  const { data, error }:any = useFetch(`https://cbaas-api.herokuapp.com/booze?type=${input}`);

  const [isFancy, setIsFancy] = useState(false);
  const currency = useRecoilValue(currencyContentState);
  const prices = useRecoilValue(pricesContentState);

  const handleFancyFlip = () => { 
    setIsFancy(!isFancy);
  }

  console.log(data);

  const cheapDrink = data && data[0];
  const fancyDrink = data && data[1];

  const currentCurrency = currency.type;

  return (
    <Main name='find' className={isFancy ? 'isFancy' : 'isCheap'}>
      { error && <Error/> }
      { !data && !error && <Loading/> }
      { data &&
        <>
          <Section name='results'>
            { !isFancy
              ? <React.Fragment>
                <Heading Level='h2' weight='light'> { input === 'Alcohol' ? 'Yikes..... ' : '' }The absolute cheapest, bottom shelf {input} we could find is</Heading>
                <span> {cheapDrink['Brand Name']} for <CurrencyDisplay price={normalizePrice(cheapDrink['Retail Bottle Price'], prices[currentCurrency], 5)} currency={currency.type}/></span>
                <Button onClick={handleFancyFlip}>
                  ✨ I'm feeling fancy ✨
                </Button>
              </React.Fragment>
              : <React.Fragment>
                <Heading Level='h2' weight='light'> Oh, you're feeling fancy?</Heading>
                { fancyDrink ?
                  <>
                    <span> {fancyDrink['Brand Name']} for a whopping <CurrencyDisplay price={normalizePrice(fancyDrink['Retail Bottle Price'], prices[currentCurrency], 5)} currency={currency.type}/></span>
                  </>
                  : <span> you actually already saw the fanciest drink...</span>
                }
                <Button onClick={handleFancyFlip}>
                    I'm feeling cheap
                </Button>
              </React.Fragment>
            }
          </Section>
          <Section name='cocktails'>
            <Heading Level='h2' weight='light'> here are the cocktails you could make{ isFancy ? ', fancy pants' : ''}</Heading>
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
        </>
      }
    </Main>
  );
};

export default Find;
