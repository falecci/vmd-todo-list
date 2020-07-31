import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useAuthToken } from './auth';

const createApolloClient = () => {
  const { SNOWPACK_PUBLIC_GRAPHQL_ENDPOINT } = import.meta.env;

  const httpLink = createHttpLink({
    uri: SNOWPACK_PUBLIC_GRAPHQL_ENDPOINT,
  });

  const authLink = setContext((_, { headers }) => {
    const { getToken } = useAuthToken();

    const token = getToken();

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          allTasks: {
            merge(existing, incoming) {
              return incoming;
            },
          },
        },
      },
    },
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
  });

  return client;
};

export default createApolloClient;
