import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import Navbar from './';

test('renders navbar', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  const linkElement = getByText(/Applications/i);
  expect(linkElement).toBeInTheDocument();
});
