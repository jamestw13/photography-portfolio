import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('ContactForm component', () => {
  // Baseline test
  it('renders', () => {
    render(<ContactForm />);
  });

  // Snapshot test
  it('matches snapshot', () => {
    const {asFragment} = render(<ContactForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('form elements are visible', () => {
  it('link and about', () => {
    const {getByTestId} = render(<ContactForm />);

    expect(getByTestId('title')).toHaveTextContent('Contact Me');
    expect(getByTestId('submit')).toHaveTextContent('Submit');
  });
});
