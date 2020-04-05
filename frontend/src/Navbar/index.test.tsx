import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter } from "react-router-dom";
import Navbar from './';

test('renders navbar', () => {
  const { getByText } = render(
    <HashRouter>
      <Navbar />
    </HashRouter>
  );
  const linkElement = getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
