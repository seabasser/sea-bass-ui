import React from 'react';
import { useHistory } from 'react-router-dom';

import { Main, Section } from '../components';

import { getParams } from '../utils';

const Make: React.FC = () => {

  const input = getParams(useHistory().location.search);

  return (
    <Main name='make'>
      <Section name='results'>
        <span> You want to make {input} </span>
      </Section>
    </Main>
  );
};

export default Make;
