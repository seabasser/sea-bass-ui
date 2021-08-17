import React, { ReactNode } from 'react';
import classNames from 'classnames';

import './Card.scss';

interface CardProps {
  className?: string,
  children: ReactNode
}

const Card: React.FC<CardProps> = ({ className, children, ...props }) => {

  const classes = classNames(
    'card',
    className
  );


  return (
    <article className={classes} {...props}> { children } </article>
  );
};

export default Card;
