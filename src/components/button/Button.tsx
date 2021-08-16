import React from 'react';
import classNames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {

    const classes = classNames(
        'dropdown',
        className
    );

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}

export default Button;