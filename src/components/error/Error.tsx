import React, { ReactNode } from 'react';
import classNames from 'classnames';

import { Heading, Section } from '../';

import './Error.scss';

interface ErrorProps {
  className?: string,
}

const Error: React.FC<ErrorProps> = ({ className, ...props }) => {

  const classes = classNames(
    'error',
    className
  );


  return (
    <Section name='error' className={classes} {...props}>
      <Heading Level='h1'> Oh, fiddlesticks! </Heading>
      <span> We just hit an error :( </span>
    </Section>
  );
};

export default Error;
