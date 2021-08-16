import React, { ReactNode } from 'react';
import classNames from 'classnames';

import './Dropdown.scss';

interface DropdownProps {
  className?: string,
  name: string,
  id: string,
  children: ReactNode,
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const Dropdown: React.FC<DropdownProps> = ({ className, name, id, children, onChange, ...props }) => {

  const classes = classNames(
    'dropdown',
    className
  );


  return (
    <select className={classes} name={name} id={id} onChange={onChange} {...props}>
        {children}
     </select>
  );
};

export default Dropdown;
