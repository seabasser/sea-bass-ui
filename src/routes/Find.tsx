import React from 'react';
import { useRecoilValue } from 'recoil'
import { useHistory } from 'react-router-dom';
import { fancyContentState } from '../store/fancy';

import { Main } from '../components';

import { getParams, capitalizeFirstLetter } from '../utils';

import './Find.scss';
import FindCheapLiquor from './FindCheapLiquor';
import ListCocktails from './ListCocktails';

const Find: React.FC = () => {

  const input = capitalizeFirstLetter(getParams(useHistory().location.search));
  const isFancy = useRecoilValue(fancyContentState).isFancy;
  console.log(isFancy);

  return (
    <Main name='find' className={isFancy ? 'isFancy' : 'isCheap'}>
      <FindCheapLiquor input={input}/>
      <ListCocktails input={input}/>
    </Main>
  );
};

export default Find;
