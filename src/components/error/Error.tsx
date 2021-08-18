import React from 'react';
import classNames from 'classnames';

import { Heading, Section } from '../';

import './Error.scss';

interface ErrorProps {
  className?: string,
  text?: string,
  header?: string
}

const Error: React.FC<ErrorProps> = ({ className, text, header, ...props }) => {

  const classes = classNames(
    'error',
    className
  );

  Error.defaultProps = {
    text: 'You dug this grave yourself',
    header: 'oh, fiddlesticks!'
  }

  return (
    <Section name='error' className={classes} {...props}>
      <Heading Level='h1'> {header} </Heading>
      <span> {text} </span>
    </Section>
  );
};

export default Error;
