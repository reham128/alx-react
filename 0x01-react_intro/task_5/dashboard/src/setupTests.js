import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders login text', () => {
  render(<App />);
  const loginText = screen.getByText(/Login to access the full dashboard/i);
  expect(loginText).toBeInTheDocument();
});