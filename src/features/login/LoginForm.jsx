import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useLoginMutation } from './useLogin';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import ErrorMessage from '../../components/ErrorMessage';

const LoginForm = ({ onLogin }) => {
  const { login, mutationResults } = useLoginMutation(onLogin);
  const [userName, setUserName] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    login(userName);
  };

  return (
    <form className="flex flex-col justify-center items-center min-h-layout" onSubmit={onSubmit}>
      <div className="flex w-full">
        <TextField
          name="Username"
          label="Username"
          error=""
          value={userName}
          onChange={setUserName}
          placeholder="Username"
        />
        <Button
          className="text-teal-500 border-teal-500 hover:bg-teal-500"
          loading={mutationResults.loading}
          type="submit"
          text="Login"
        />
      </div>
      <ErrorMessage
        visible={!!mutationResults.error}
        text="There was an error signing in. Please, try again later."
      />
    </form>
  );
};

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginForm;
