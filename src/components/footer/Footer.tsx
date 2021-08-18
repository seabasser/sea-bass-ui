import React, { useState } from 'react';
import classNames from 'classnames';

import { Modal, ModalBody, Button } from '..';


import './Footer.scss';

interface FooterProps {
  className?: string
}

const Footer: React.FC<FooterProps> = ({ className, ...props }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const classes = classNames(
    'footer',
    className
  );


  return (
    <React.Fragment>
      <footer className={classes} {...props}><Button onClick={() => setIsModalOpen(!isModalOpen)} isLink> test </Button></footer>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title='Share with your friends!'>
        <ModalBody>
          test
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default Footer;
