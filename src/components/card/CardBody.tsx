import React, { ReactNode } from 'react';
import classNames from 'classnames';

import './Card.scss';

interface CardBodyProps {
  className?: string,
  children: ReactNode
}

const CardBody: React.FC<CardBodyProps> = ({ className, children, ...props }) => {

  const classes = classNames(
    'card-body',
    className
  );


  return (
    <div className={classes} {...props}>
      { children }
    </div>
  );
};

export default CardBody;
