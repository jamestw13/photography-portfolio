import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PhotoList from '..';

// const category = {name: "Portrait", description = "Photos of people in my life"}

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
  // // Title match test
  // it('renders', () => {
  //   const {getByTestId} = render(<Gallery currentCategory={portrait} />);
  //   expect(getByTestId('h1tag')).toHaveTextContent('Portraits');
  // });
});
