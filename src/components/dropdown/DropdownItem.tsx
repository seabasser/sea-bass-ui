import React from 'react';
import classNames from 'classnames';

import './DropdownItem.scss';

interface DropdownItemProps {
  className?: string,
  value: string,
  children: string
}

const DropdownItem: React.FC<DropdownItemProps> = ({ className, value, children, ...props }) => {

  const classes = classNames(
    'dropdownitem',
    className
  );


  return (
    <option className={classes} value={value} {...props}>{children}</option>
  );
};

export default DropdownItem;
