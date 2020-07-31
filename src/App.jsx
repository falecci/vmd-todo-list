import React, { useState, useEffect } from 'react';

import { useAuthToken } from './config/auth';
import ToDoList from './features/toDoList/ToDoList';
import LoginForm from './features/login/LoginForm';
import Layout from './components/Layout';

const App = () => {
  const { getDecodedToken } = useAuthToken();
  const [user, setUser] = useState({ isLoggedIn: false });

  const handleOnLogin = () => {
    const token = getDecodedToken();

    if (!token) {
      return;
    }

    setUser({ ...token, isLoggedIn: true });
  };

  useEffect(() => {
    handleOnLogin();
  }, []);

  return <Layout>{!user.isLoggedIn ? <LoginForm onLogin={handleOnLogin} /> : <ToDoList />}</Layout>;
};

export default App;
