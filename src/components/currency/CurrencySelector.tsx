import React from 'react';
import { useSetRecoilState } from 'recoil'

import { Dropdown, DropdownItem } from '../';
import { currencyContentState } from "../../store/currency";

const currencies = ['USD', 'ETH', 'BTC', 'LTC'];

const CurrencySelector: React.FC = () => {

  const setCurrency = useSetRecoilState(currencyContentState);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    // TODO rewrite this later
    switch(value) {
      case 'USD':
        setCurrency({ type: 'USD' });
        break;
      case 'ETH':
        setCurrency({ type: 'ETH' });
        break;
      case 'BTC':
        setCurrency({ type: 'BTC' });
        break;
      case 'LTC':
        setCurrency({ type: 'LTC' });
        break;
      default:
        setCurrency({ type: 'USD' });
        break;
    }
  };

  return (
    <Dropdown name='currency' id='currency' onChange={handleChange}>
      { currencies.map(currency => <DropdownItem value={currency} key={currency}>{currency}</DropdownItem>)}
    </Dropdown>
  );
};

export default CurrencySelector;
