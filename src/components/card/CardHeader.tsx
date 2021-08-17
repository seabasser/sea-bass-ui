import React, { ReactNode } from 'react';
import classNames from 'classnames';

import './Card.scss';
import { Heading } from '..';

interface CardHeaderProps {
  className?: string,
  children?: ReactNode,
  title: string
}

const CardHeader: React.FC<CardHeaderProps> = ({ className, children, title, ...props }) => {

  const classes = classNames(
    'card-header',
    className
  );


  return (
    <div className={classes} {...props}>
      <Heading Level='h2'> {title}</Heading>
      { children }
    </div>
  );
};

export default CardHeader;
