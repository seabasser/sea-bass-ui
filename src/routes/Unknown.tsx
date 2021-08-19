import React from 'react';
import { Main, NotFound } from '../components';

import './Unknown.scss';

const Unknown: React.FC = () => {

  return (
    <Main name='404'>
      <NotFound/>
    </Main>
  );
};

export default Unknown;
