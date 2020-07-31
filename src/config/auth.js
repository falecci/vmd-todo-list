import JwtDecode from 'jwt-decode';

const TOKEN_NAME = 'vieMedAuthToken';

export const useAuthToken = () => {
  const getToken = () => localStorage.getItem(TOKEN_NAME);
  const clearToken = () => localStorage.removeItem(TOKEN_NAME);
  const setToken = token => localStorage.setItem(TOKEN_NAME, token);

  const getDecodedToken = () => {
    const token = localStorage.getItem(TOKEN_NAME);

    if (!token) {
      return null;
    }

    return JwtDecode(token);
  };

  return { getToken, clearToken, setToken, getDecodedToken };
};

export const useLogout = () => {
  const { clearToken } = useAuthToken();

  // const apolloClient = useApolloClient();

  const logout = async () => {
    // await apolloClient.clearStore();
    clearToken();
  };
  return logout;
};
