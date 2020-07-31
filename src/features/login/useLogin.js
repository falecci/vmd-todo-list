import { useMutation, gql } from '@apollo/client';
import { useAuthToken } from '../../config/auth';

const { SNOWPACK_PUBLIC_API_KEY } = import.meta.env;

const LOGIN = gql`
  mutation Login($apiKey: String!, $userName: String!) {
    generateAccessToken(apiKey: $apiKey, userName: $userName)
  }
`;

export const useLoginMutation = onCompleted => {
  const { setToken, clearToken } = useAuthToken();

  const [mutation, mutationResults] = useMutation(LOGIN, {
    onCompleted: data => {
      setToken(data.generateAccessToken);
      onCompleted(data.generateAccessToken);
    },
  });

  const login = userName => {
    clearToken();

    return mutation({
      variables: {
        apiKey: SNOWPACK_PUBLIC_API_KEY,
        userName,
      },
    });
  };

  return { login, mutationResults };
};
