import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import ErrorMessage from '..';

describe('<ErrorMessage />', () => {
  test('should render an error message', () => {
    render(<ErrorMessage visible text="oh no, the world has broken!" />);

    const result = screen.getByText('oh no, the world has broken!');

    expect(result).toBeInTheDocument();
    expect(result).toHaveClass('mt-2 text-center text-sm text-red-500');
  });

  test('should not render an error message if not visible', () => {
    render(<ErrorMessage visible={false} text="oh no, the world has broken!" />);

    const result = screen.queryByText('oh no, the world has broken!');

    expect(result).toBe(null);
  });
});
