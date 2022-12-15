import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />); // rendering app
  const LINK_ELEMENT = screen.getByText("Test");
  expect(LINK_ELEMENT).toBeInTheDocument();
});
