import React, { ReactNode } from "react";
import classNames from 'classnames';

import "./Main.scss";

interface MainProps {
    children: ReactNode,
    className?: string,
    name: string
}

const Main: React.FC<MainProps> = ({ children, className, name='base'}: MainProps) => {
  
  const classes = classNames(
    'page',
    `page-${name}`,
    className
  );

  return (
    <main className={classes}>
      {children}
    </main>
  );
};

export default Main;
