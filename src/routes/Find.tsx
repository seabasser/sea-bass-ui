import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { getParams } from '../utils';
import { Main, Section } from '../components';

const fakeCocktails = [
  'foo',
  'bar'
]

const Find: React.FC = () => {

  const input = getParams(useHistory().location.search);
  const [isFancy, setIsFancy] = useState(false);

  const handleFancyFlip = () => {
    setIsFancy(!isFancy);
  }

  return (
    <Main name='find' className={isFancy ? 'isFancy' : 'isCheap'}>
      <Section name='results'>
        { !isFancy
          ? <React.Fragment>
            <span> The cheapest {input} we could find is: foo </span>
            <button onClick={handleFancyFlip}>
                I'm feeling fancy
            </button>
          </React.Fragment>
          : <React.Fragment>
            <span> Oh, you're feeling fancy? Try: bar </span>
            <button onClick={handleFancyFlip}>
                I'm feeling cheap
            </button>
          </React.Fragment>
      }
      </Section>
      <Section name='cocktails'>
        <span> here are the cocktails you could make</span>
        <ul>
          {fakeCocktails.map(cocktail => <li><Link to={{
            pathname: '/make',
            search: `cocktail=${cocktail}`
          }}>{cocktail}</Link></li>
          )}
        </ul>
      </Section>
    </Main>
  );
};

export default Find;
