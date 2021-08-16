import React, { ReactNode } from 'react';
import classNames from 'classnames';

import './Section.scss';

interface MainProps {
  className?: string,
  theme?: 'dark' | 'light',
  children: ReactNode,
}

const Section: React.FC<MainProps> = ({ className, theme, children, ...props }) => {

  const classes = classNames(
    'section',
    `section__theme-${theme}`,
    className
  );

  return (
    <section className={classes} {...props}>{children}</section>
  );
};

Section.defaultProps = {
  theme: 'light'
};

export default Section;

