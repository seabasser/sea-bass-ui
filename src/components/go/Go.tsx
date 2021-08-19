import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import './Go.scss';

interface GoProps {
  className?: string,
  to: {
    pathname: string,
    search?: string,
    hash?: string,
    state?: string,
  },
  children: ReactNode,
  isPlain?: boolean,
  isSmall?: boolean
}

const Go: React.FC<GoProps> = ({ className, to, children, isPlain, isSmall, ...props }) => {

  const classes = classNames(
    'go',
    { 'go-isPlain': isPlain },
    { 'go-isSmall': isSmall },
    className
  );


  return (
    <Link to={to} {...props} className={classes}> { children } </Link>
  );
};

export default Go;
