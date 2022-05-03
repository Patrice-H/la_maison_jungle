/* eslint-disable no-undef */
import React from "react";
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders banner', () => {
  render(<App />);
  const title = screen.getByText(/La maison jungle/i);
  expect(title).toBeInTheDocument();
});
