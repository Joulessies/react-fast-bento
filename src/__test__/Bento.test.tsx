import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import Bento from '../components/Bento/Bento';

const props = {
  title: 'Bento Box',
  description: 'This is a Bento component.',
  size: 100,
  width: 300,
  height: 200,
};

test('renders Bento component with correct styles', () => {
  const { getByText } = render(<Bento {...props} />);
  expect(getByText('Bento Box')).toBeInTheDocument();
  expect(getByText('This is a Bento component.')).toBeInTheDocument();
});
