import React from 'react';
import { useRecoilValue } from 'recoil'
import useFetch from '../hooks/useFetch';

import { fancyContentState } from '../store/fancy';

import { Section, Heading, Error, Loading, Go } from '../components';

import './ListCocktails.scss';

interface ListCocktailsProps {
  input: string
}

const ListCocktails: React.FC<ListCocktailsProps> = ({ input }) => {

  const { data, error }:any= useFetch(`https://cbaas-api.herokuapp.com/drinks?spirit=${input}`);

  const isFancy = useRecoilValue(fancyContentState).isFancy;

  console.log(data);

  return (
    <React.Fragment>
      { error && <Error/> }
      { !data && !error && <Loading/> }
      { data &&
          <Section name='cocktails'>
            <Heading Level='h2' weight='light'> Here are the {data.count} cocktails you could make{ isFancy ? ', fancy pants' : ''}</Heading>
            <ul className='cocktails-list'>
              {data.drinks.map((cocktail: { strDrink: string }) =>
                <li key={cocktail.strDrink} className='cocktails-list-item'>
                  <Go to={{ pathname: '/make', search: `cocktail=${cocktail.strDrink}`}}>
                    {cocktail.strDrink}
                  </Go>
                </li>
              )}
            </ul>
          </Section>
      }
    </React.Fragment>
  );
};

export default ListCocktails;
