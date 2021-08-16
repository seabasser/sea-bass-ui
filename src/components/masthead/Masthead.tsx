import React, { ReactNode } from 'react';
import classNames from 'classnames';

import './Masthead.scss';

interface SampleProps {
  className?: string,
  children: ReactNode
}

const Masthead: React.FC<SampleProps> = ({ className, children, ...props }) => {

  const classes = classNames(
    'masthead',
    className
  );


  return (
    <header className={classes} {...props}> { children } </header>
  );
};

export default Masthead;
