import React from 'react';
import { render } from '@testing-library/react';
import Section from '../Section';

describe('<Section /> spec', () => {
  it('Renders normally', () => {
    const { asFragment } = render(<Section>test</Section>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Renders with dark theme', () => {
    const { asFragment, getByText } = render(<Section theme='dark'>test</Section>);
    expect(getByText('test')).toHaveClass('section__theme-dark');
    expect(asFragment()).toMatchSnapshot();
  });

  it('Renders with className', () => {
    const { asFragment, getByText } = render(<Section className='testClass'>test</Section>);
    expect(getByText('test')).toHaveClass('testClass');
    expect(asFragment()).toMatchSnapshot();
  });
});