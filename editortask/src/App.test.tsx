import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import DropDrop from './components/DropDrop';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders "Type Here" placeholder in the second box', () => {
  render(<DropDrop />);
  const inputElement = screen.getByPlaceholderText('Type Here');
  expect(inputElement).toBeInTheDocument();
});


