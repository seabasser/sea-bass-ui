import React, { ReactNode } from 'react';
import classNames from 'classnames';

import './Modal.scss'

interface ModalBodyProps {
  children: ReactNode,
  className?: string
}

const ModalBody: React.FC<ModalBodyProps> = ({ children, className }) => {

  const classes = classNames(
    'modal-content-body',
    className
  );

  return (
    <div className={classes}>
      {children} 
    </div>
  )
}

export default ModalBody