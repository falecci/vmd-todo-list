/* eslint-disable */
const ENV_VAR_PREFIX = 'SNOWPACK_PUBLIC';
const GRAPHQL_ENDPOINT = 'GRAPHQL_ENDPOINT';
const API_KEY = 'API_KEY';

const REQUIRED_KEYS = [API_KEY, GRAPHQL_ENDPOINT];

const getEnvVar = (key) => {
  return process.env[`${ENV_VAR_PREFIX}_${key}`];
}

REQUIRED_KEYS.forEach(requiredKey => {
  if (!getEnvVar(requiredKey)) {
    throw new Error(`Missing environment variable ${requiredKey} `);
  }
});

try {
  const graphQLEndpoint = getEnvVar(GRAPHQL_ENDPOINT);
  const parsedEndpoint = new URL(graphQLEndpoint);
} catch (err) {
  throw new Error(`Invalid URL value for ${GRAPHQL_ENDPOINT}`);
}
