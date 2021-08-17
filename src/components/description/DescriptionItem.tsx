import React from 'react';
import classNames from 'classnames';

import './Description.scss';

interface DescriptionItemProps {
  className?: string,
  text: string,
}

const DescriptionItem: React.FC<DescriptionItemProps> = ({ className, text, ...props }) => {

  const classes = classNames(
    'description-item',
    className
  );


  return (
    <dd className={classes} {...props}> { text } </dd>
  );
};

export default DescriptionItem;
