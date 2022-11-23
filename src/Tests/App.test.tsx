import React from 'react';
import { render, screen } from '@testing-library/react';
import app from '../App';

test('renders learn react link', () => {
  render(<app />);
  const linkElement = screen.getByText("Learn React");
  expect(linkElement).toBeInTheDocument();
});
