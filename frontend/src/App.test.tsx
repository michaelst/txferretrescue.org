import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter } from "react-router-dom";
import App from './App';

test('renders app', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Texas Ferret Lover's Rescue/i);
  expect(linkElement).toBeInTheDocument();
});
