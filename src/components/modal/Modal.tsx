import React, { ReactNode } from 'react';
import { Button } from '../button';
import { FiX } from 'react-icons/fi';

import './Modal.scss';

interface ModalProps {
  children: ReactNode,
  isOpen: boolean,
  onClose: () => void,
  title: string
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose, title }) => {
  const modal = document.getElementById('modal');

  window.onclick = (ev: Event):void => {
    if (ev.target == modal) {
      onClose()
    }
  }

  return (
    <div id='modal' className={`modal modal-${isOpen ? 'open' : 'closed'}`}>
      <div className='modal-content'>
        <div className='modal-content-head'>
          {title}
          <Button className='modal-content-close' isIcon onClick={onClose}><FiX/></Button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
