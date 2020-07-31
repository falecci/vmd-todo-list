import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ visible, text }) => {
  if (!visible) {
    return null;
  }

  return <span className="mt-2 text-center text-sm text-red-500">{text}</span>;
};

ErrorMessage.propTypes = {
  visible: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default ErrorMessage;
