import React from 'react';
import classNames from 'classnames';

import './Loading.scss';

interface LoadingProps {
  className?: string
}

const Loading: React.FC<LoadingProps> = ({ className, ...props }) => {

  const classes = classNames(
    'loading',
    className
  );


  return (
    <div className={classes} {...props}/>
  );
};

export default Loading;
