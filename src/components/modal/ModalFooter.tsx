import React, { ReactNode } from 'react';
import classNames from 'classnames';

import './Modal.scss'

interface ModalFooterProps {
  children: ReactNode,
  className?: string
}

const ModalFooter: React.FC<ModalFooterProps> = ({ children, className }) => {

  const classes = classNames(
    'modal-content-footer',
    className
  );

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export default ModalFooter;
