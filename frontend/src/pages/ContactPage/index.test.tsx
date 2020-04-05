import React from 'react';
import { render } from '@testing-library/react';
import ContactPage from './';

test('renders ContactPage', () => {
  const { getByText } = render(<ContactPage />);
  const linkElement = getByText(/The rescue is not a business/i);
  expect(linkElement).toBeInTheDocument();
});
