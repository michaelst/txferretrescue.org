import React from 'react';
import { render } from '@testing-library/react';
import HomePage from './';

test('renders HomePage', () => {
  const { getByText } = render(<HomePage />);
  const linkElement = getByText(/The rescue is not a business/i);
  expect(linkElement).toBeInTheDocument();
});
