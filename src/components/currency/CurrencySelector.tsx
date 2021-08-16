import React from 'react';

import { Dropdown, DropdownItem } from '../';

const currencies = ['USD', 'ETH', 'BTC', 'LTC'];

const CurrencySelector: React.FC = () => {

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    console.log(value);
  };

  return (
    <Dropdown name='currency' id='currency' onChange={handleChange}>
      { currencies.map(currency => <DropdownItem value={currency}>{currency}</DropdownItem>)}
    </Dropdown>
  );
};

export default CurrencySelector;
