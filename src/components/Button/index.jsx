import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Spinner from '../Spinner';

const Button = ({ text, type, onClick, loading, className }) => {
  return (
    <button
      className={cn('flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white outline-none', {
        [className]: className,
      })}
      onClick={onClick}
      // eslint-disable-next-line react/button-has-type
      type={type}
    >
      {loading ? <Spinner /> : text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
  loading: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: '',
  type: 'button',
  loading: false,
  onClick: () => {},
};

export default Button;
