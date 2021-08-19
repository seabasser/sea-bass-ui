import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSetRecoilState, useRecoilValue } from 'recoil'

import { fancyContentState } from '../store/fancy';
import { liquorContentState } from '../store/liquors';

import { Dropdown, DropdownItem, Main, Button, Go } from '../components';
import { capitalizeFirstLetter } from '../utils';

import './Landing.scss';

const Landing: React.FC = () => {

  const history = useHistory();
  const setFancy = useSetRecoilState(fancyContentState);
  const liquorList = useRecoilValue(liquorContentState).liquors;

  setFancy({ isFancy: false });

  const sortedLiquorList = liquorList.sort();

  const [selectedItem, setSelectedItem] = React.useState(sortedLiquorList[0]);


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    history.push({
      pathname: '/find',
      search: `?liquor=${selectedItem}`
    });
  }

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedItem(value);
  };

  return (
    <Main name='landing'>
      <form onSubmit={handleSubmit} className='landing-form'>
        <label htmlFor='liquor'> Choose a liquor</label>
        <Dropdown name='liquor' id='liquor' onChange={handleChange}>
          { sortedLiquorList.map(liquor => <DropdownItem value={liquor} key={liquor}>{capitalizeFirstLetter(liquor)}</DropdownItem>)}
        </Dropdown>
        <Button type='submit' value='Submit'>Find it</Button>
      </form>
      <Go to={{ pathname: '/find', search: '?liquor=Grain Alcohol' }} className='drunk-button'> just get me as drunk as possible</Go>
    </Main>
  );
};

export default Landing;
