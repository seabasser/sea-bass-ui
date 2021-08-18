import React from 'react';
import { useHistory } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

import { SpecDrinkInterface } from '../interfaces';

import { Main, Error, Loading, Description, DescriptionItem, Card, CardHeader, CardBody } from '../components';

import { getParams } from '../utils';

import './Make.scss';

const generateTextString = (amount:string, ingredient:string):string => {
  let normalizedAmount = '';
  if (amount != null) {
    normalizedAmount = amount;
  }
  return `${normalizedAmount} ${ingredient}`
}

const Make: React.FC = () => {

  const input = getParams(useHistory().location.search);
  const { data, error } = useFetch<SpecDrinkInterface>(`https://cbaas-api.herokuapp.com/spec?name=${input}`);
  const currentDrink = data && data.drinks[0];

  // api returns weird results, so we have to do some work to get the ingredients
  const ingredients:string[] = [];
  if(currentDrink) { 
    Object.keys(currentDrink).filter(key => key.includes('strIngredient') && ingredients.push(currentDrink[key]));
  }

  console.log('spec', { data, error });

  const checkDrink = (drink: string) => {
    if (drink === 'White Russian') { return (', Dude?') }
  }

  return (
    <Main name='make'>
      { error && <Error/> }
      { !data && !error && <Loading/> }
      { currentDrink &&
        <Card>
          <CardHeader title={`You want to make a ${input}${checkDrink(input)}`}>
            {input === 'White Russian' &&
              <img src="./images/the-dude.gif" alt="The Dude" className="card-header-img" />
            }
          </CardHeader>
          <CardBody>
            <Description title='Ingredients'>
              { ingredients.map((ingredient, index) => ingredient && <DescriptionItem text={generateTextString(currentDrink['strMeasure' + (index+1).toString()], ingredient)} key={ingredient}/>)}
            </Description>
            <Description title='Instructions'>
              <DescriptionItem text={currentDrink.strInstructions}/>
            </Description>
          </CardBody>
        </Card>
      }
    </Main>
  );
};

export default Make;
