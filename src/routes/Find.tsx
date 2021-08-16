import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { getParams } from '../utils';
import { Main, Section, Button } from '../components';

import './Find.scss';
import { CurrencyDisplay } from '../components/currency';

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
            <span className='section-results-title'> The absolute cheapest, bottom shelf {input} we could find is</span>
            <span> foo for <CurrencyDisplay price={500} currency={"USD"}/></span>
            <Button onClick={handleFancyFlip}>
              ✨ I'm feeling fancy ✨
            </Button>
          </React.Fragment>
          : <React.Fragment>
            <span> Oh, you're feeling fancy? Try: bar </span>
            <Button onClick={handleFancyFlip}>
                I'm feeling cheap
            </Button>
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
