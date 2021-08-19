import React from 'react';
import { useRecoilValue } from 'recoil'
import { useHistory } from 'react-router-dom';
import { fancyContentState } from '../store/fancy';
import { liquorContentState } from '../store/liquors';

import { Main, NotFound } from '../components';

import { getParams, capitalizeFirstLetter } from '../utils';

import './Find.scss';
import FindCheapLiquor from './FindCheapLiquor';
import ListCocktails from './ListCocktails';

const Find: React.FC = () => {

  const input = capitalizeFirstLetter(getParams(useHistory().location.search));
  const isFancy = useRecoilValue(fancyContentState).isFancy;
  const liquorList = useRecoilValue(liquorContentState).liquors;

  const isInputInList = liquorList.includes(input);

  return (
    <Main name='find' className={isFancy ? 'isFancy' : 'isCheap'}>
      { isInputInList ?
        <React.Fragment>
          <FindCheapLiquor input={input}/>
          <ListCocktails input={input}/>
        </React.Fragment>
        : <NotFound/>
      }
    </Main>
  );
};

export default Find;
