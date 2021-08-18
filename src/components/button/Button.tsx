import React from 'react';
import classNames from 'classnames';

import './Button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    children: React.ReactNode,
    isLink?: boolean
}

const Button: React.FC<ButtonProps> = ({ className, children, isLink, ...props }) => {

  const classes = classNames(
    'button',
    { ['button-isLink'] : isLink },
    className
  );

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;