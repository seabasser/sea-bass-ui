import React from 'react';
import classNames from 'classnames';

import './Description.scss';

interface DescriptionProps {
  className?: string,
  title: string,
}

const Description: React.FC<DescriptionProps> = ({ className, children, title, ...props }) => {

  const classes = classNames(
    'description',
    className
  );


  return (
    <dl className={classes} {...props}>
      <dt> { title } </dt>
      { children }
    </dl>
  );
};

export default Description;
