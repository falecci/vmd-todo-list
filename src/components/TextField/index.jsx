import React from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from '../ErrorMessage';

const TextField = ({ value, label, name, onChange, error, placeholder }) => {
  return (
    <div className="w-full">
      <input
        aria-label={label}
        name={name}
        className="shadow w-full appearance-none border rounded py-2 px-3 mr-4 text-gray-900 outline-none"
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        value={value}
      />
      <ErrorMessage text={error} visible={!!error} />
    </div>
  );
};

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

TextField.defaultProps = {
  error: '',
};

export default TextField;
