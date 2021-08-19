import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil'
import useFetch from '../hooks/useFetch';

import { currencyContentState } from '../store/currency';
import { pricesContentState } from '../store/prices';
import { fancyContentState } from '../store/fancy';

import { BoozeInterface, BoozeDrinkEntity } from '../interfaces';

import { Section, Button, Heading, CurrencyDisplay, Error, Loading, Go } from '../components';

import { normalizePrice } from '../utils';

import { FiChevronLeft } from 'react-icons/fi';

import './Find.scss';

interface FindCheapLiquorProps {
  input: string
}

const FindCheapLiquor: React.FC<FindCheapLiquorProps> = ({ input }) => {

  const { data, error } = useFetch<BoozeInterface>(`https://cbaas-api.herokuapp.com/booze?type=${input}`);
  const setFancy = useSetRecoilState(fancyContentState);
  const currency = useRecoilValue(currencyContentState);
  const prices = useRecoilValue(pricesContentState);
  const isFancy = useRecoilValue(fancyContentState).isFancy;

  const cheapDrink:BoozeDrinkEntity = data && data[0];
  const fancyDrink:BoozeDrinkEntity = data && data[1];

  const currentCurrency = currency.type;

  console.log('Booze', {data, error});

  return (
    <React.Fragment>
      { error && <Error/> }
      { !data && !error && <Loading/> }
      { data &&
        <Section name='results'>
          { !isFancy
            ? <React.Fragment>
              <Heading Level='h2' weight='light'> {input === 'Grain Alcohol' ? 'Yikes..... ' : ''}The absolute cheapest, bottom shelf {input} we could find is</Heading>
              <span> {cheapDrink['Brand Name']} for <CurrencyDisplay price={normalizePrice(cheapDrink['Retail Bottle Price'], prices[currentCurrency], 5)} currency={currency.type}/></span>
              <Button onClick={() => setFancy({ isFancy: !isFancy })}>
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
              <Button onClick={() => setFancy({ isFancy: !isFancy })}>
                  I'm feeling cheap
              </Button>
            </React.Fragment>
          }
          <Go to={{ pathname: '/' }} isSmall> <FiChevronLeft/> Back </Go>
        </Section>    
      }
    </React.Fragment>
  );
};

export default FindCheapLiquor;
