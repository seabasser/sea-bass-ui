import React from 'react';
import classNames from 'classnames';

import './Brand.scss';

interface BrandProps {
  className?: string,
  image: 'fish' | 'full' | 'square' | 'title-color' | 'title',
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const Brand: React.FC<BrandProps> = ({ className, image, size, ...props }) => {

  const classes = classNames(
    'brand',
    `brand-${size}`,
    className
  );


  return (
    <img src={`./images/${image}.png`} className={classes} {...props}/>
  );
};


Brand.defaultProps = {
  size: 'md'
};

export default Brand;
