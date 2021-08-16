import React from 'react';
import { useHistory } from 'react-router-dom';

import { Dropdown, DropdownItem, Main } from '../components';
import { capitalizeFirstLetter } from '../utils';

import './Landing.scss';

const liquorList = [
  'vodka',
  'gin',
  'whiskey',
  'tequila',
  'rum'
];

const Landing: React.FC = () => {

  const history = useHistory();
  const [selectedItem, setSelectedItem] = React.useState('');

  const sortedLiquorList = liquorList.sort();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    console.log(e);
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
          { sortedLiquorList.map(liquor => <DropdownItem value={liquor}>{capitalizeFirstLetter(liquor)}</DropdownItem>)}
        </Dropdown>
        <input type='submit' value='Submit'/>
      </form>
    </Main>
  );
};

export default Landing;
