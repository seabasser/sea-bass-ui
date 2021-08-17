import React, { ReactNode } from 'react';
import classNames from 'classnames';

import './Heading.scss';

interface HeadingProps {
  className?: string,
  Level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: ReactNode,
  isSmall?: boolean
  weight?: 'light' | 'normal' | 'bold'
}

const Heading: React.FC<HeadingProps> = ({ className, Level, weight, isSmall, children }) => {

  const classes = classNames(
    'heading',
    `heading-${Level}`,
    `heading-weight--${weight}`,
    { [`heading-${Level}--isSmall`] : isSmall },
    className
  );

  return (
    <Level className={classes}>
      {children}
    </Level>
  );
};


Heading.defaultProps = {
  Level: 'h1',
  weight: 'normal'
};

export default Heading;