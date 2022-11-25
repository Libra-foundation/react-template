import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const LINK_ELEMENT = screen.getByText("Learn React");
  expect(LINK_ELEMENT).toBeInTheDocument();
});
