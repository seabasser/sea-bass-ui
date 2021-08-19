import React from 'react';
import classNames from 'classnames';

import './DropdownItem.scss';

interface DropdownItemProps {
  className?: string,
  value: string,
  children: string,
  isHidden?: boolean,
}

const DropdownItem: React.FC<DropdownItemProps> = ({ className, value, children, isHidden, ...props }) => {

  const classes = classNames(
    'dropdownitem',
    { ['dropdownitem-isHidden']: isHidden },
    className
  );

  return (
    <option className={classes} value={value} {...props} key={value}>{children}</option>
  );
};

export default DropdownItem;
