import React from 'react';
import { useHistory } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

import { Main, Section, Error, Loading } from '../components';

import { getParams } from '../utils';

import './Make.scss';

const Make: React.FC = () => {

  const input = getParams(useHistory().location.search);
  const { data, error } = useFetch(`https://cbaas-api.herokuapp.com/spec?name=${input}`);
  
  return (
    <Main name='make'>
      { error && <Error/> }
      { !data && !error && <Loading/> }
      { data && <Section name='results'>
        <span> You want to make a {input} </span>
      </Section>
      }
    </Main>
  );
};

export default Make;
