import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PhotoList from '..';

afterEach(cleanup);

describe('PhotoList is rendering', () => {
  // Baseline test
  it('renders', () => {
    render(<PhotoList />);
  });
  // Snapshot test
  it('matches snapshot', () => {
    const {asFragment} = render(<PhotoList />);
    expect(asFragment()).toMatchSnapshot();
  });
});
