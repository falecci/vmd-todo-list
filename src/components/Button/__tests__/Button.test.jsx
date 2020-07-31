import React from 'react';
import { render } from '@testing-library/react';
import { screen, fireEvent } from '@testing-library/dom';

import Button from '..';

describe('<Button />', () => {
  test('should render a button', () => {
    const handleOnButtonClick = jest.fn();

    render(
      <Button
        onClick={handleOnButtonClick}
        type="submit"
        className="random-class"
        text="my button"
      />,
    );

    const result = screen.getByText('my button');

    expect(result).toHaveClass(
      'flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white outline-none',
    );
    expect(result).toHaveClass('random-class');
    expect(result.type).toBe('submit');

    fireEvent.click(result);

    expect(handleOnButtonClick).toHaveBeenCalledTimes(1);
  });
});
