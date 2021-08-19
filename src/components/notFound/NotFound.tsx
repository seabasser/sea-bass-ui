import React from 'react';
import classNames from 'classnames';

import './NotFound.scss';
import { Heading, Go } from '..';

interface NotFoudProps {
  className?: string
}

const NotFound: React.FC<NotFoudProps> = ({ className, ...props }) => {

  const classes = classNames(
    'notFound',
    className
  );


  return (
    <div className={classes} {...props}>
      <Heading Level='h1' weight='bold'> 404 </Heading>
      <img src='./images/404.png' className='notFound-image'/>
      <Go to={{pathname: '/'}}> Home </Go>
    </div>
  );
};

export default NotFound;
