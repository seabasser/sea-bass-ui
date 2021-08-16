import React from 'react';
import classNames from 'classnames';

import './Currency.scss';

interface CurrencyProps {
  className?: string,
  price: number,
  currency: 'USD' | 'ETH' | 'BTC' | 'LTC'
}

const Currency: React.FC<CurrencyProps> = ({ className, currency, price, ...props }) => {

  const classes = classNames(
    'currency',
    `currency-${currency}`,
    className
  );


  return (
    <span className={classes} {...props}> { price } <sub>{currency}</sub></span>
  );
};

export default Currency;
