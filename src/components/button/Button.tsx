import React from 'react';
import classNames from 'classnames';

import './Button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    children: React.ReactNode,
    isLink?: boolean,
    isIcon?: boolean
}

const Button: React.FC<ButtonProps> = ({ className, children, isLink, isIcon, ...props }) => {

  const classes = classNames(
    'button',
    { ['button-isLink'] : isLink },
    { ['button-isIcon'] : isIcon },
    className
  );

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;