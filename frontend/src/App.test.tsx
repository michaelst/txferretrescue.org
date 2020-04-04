import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter } from "react-router-dom";
import App from './App';

test('renders app', () => {
  const { getByText } = render(<HashRouter><App /></HashRouter>);
  const linkElement = getByText(/Texas Ferret Lover's Rescue/i);
  expect(linkElement).toBeInTheDocument();
});
