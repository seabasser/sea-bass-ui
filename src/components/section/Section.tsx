import React, { ReactNode } from 'react';
import classNames from 'classnames';

import './Section.scss';

interface MainProps {
  className?: string,
  children: ReactNode,
  name: string,
}

const Section: React.FC<MainProps> = ({ className, name, children, ...props }) => {

  const classes = classNames(
    'section',
    `section-${name}`,
    className
  );

  return (
    <section className={classes} {...props}>{children}</section>
  );
};

export default Section;

