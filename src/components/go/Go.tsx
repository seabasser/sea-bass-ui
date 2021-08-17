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
  children: ReactNode
}

const Go: React.FC<GoProps> = ({ className, to, children, ...props }) => {

  const classes = classNames(
    'go',
    className
  );


  return (
    <Link to={to} {...props} className={classes}> { children } </Link>
  );
};

export default Go;