import React, { useState } from 'react';
import classNames from 'classnames';

import { Modal, ModalBody, Button } from '..';


import './Footer.scss';
import { Heading } from '../heading';

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
      <footer className={classes} {...props}>
        <span> please drink responsibly </span> 
        <Button onClick={() => setIsModalOpen(!isModalOpen)} isLink> acknowledgements</Button>
      </footer>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title='Acknowledgements'>
        <ModalBody>
          <Heading Level='h3' weight='light'> Thank you! </Heading>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default Footer;
