# VieMed App

This app was made by Federico Alecci. The app was built with [Snowpack](https://www.snowpack.dev/) (what was the fun of using Webpack :D?), [TailwindCSS](tailwindcss.com/), [React](https://reactjs.org/) and [Apollo Client](https://www.apollographql.com/docs/react/).

# Table Of Contents

- [VieMed App](#viemed-app)
- [Table Of Contents](#table-of-contents)
  - [Requirements](#requirements)
  - [Setup](#setup)
    - [Requirements](#requirements-1)
  - [Installing dependencies](#installing-dependencies)
  - [Configuring the application](#configuring-the-application)
  - [Running the application](#running-the-application)
  - [Testing](#testing)
  - [Building the application](#building-the-application)
  - [Docker](#docker)
  - [Considerations and assumptions](#considerations-and-assumptions)

## Requirements

To read about the requirements, please go to [requirements.pdf](/requirements.pdf).

## Setup

### Requirements

**Node**  
[https://nodejs.org/es/](https://nodejs.org/es/) or install using [nvm](https://github.com/nvm-sh/nvm)

**Yarn**  
[https://classic.yarnpkg.com/en/docs/install](https://classic.yarnpkg.com/en/docs/install)

**VSCode** (optional)  
[https://code.visualstudio.com/](https://code.visualstudio.com/) was used for developing this app.

**Docker** (optional)  
[https://docker.com/](https://docker.com/) to build an image for this app.

## Installing dependencies

To install the app dependencies, just run `yarn` in the terminal.

## Configuring the application

Before running or building the application, you'll have to configure a `.env` file. There is already an example on `.env.local.example`, but you should configure both a `GRAPHQL_ENDPOINT` and an `API_KEY`.

## Running the application

To run the application, you could run one this script in your terminal:

- `yarn start`: this script will just start the application.

## Testing

The tests were written with [Jest](https://jestjs.io/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) and [CypressJS](https://docs.cypress.io/). 

To run the application unit tests, just run `yarn test` in the terminal.
To run the application e2e tests, just run `yarn test:e2e` in the terminal.

## Building the application

To build the application, you could run this script in your terminal:

- `yarn build`: this script will just start the application.

That script builds a static copy of your site to the `build/` folder, and the app will be ready to be deployed!

## Docker

There is a `Dockerfile` available. To use it, just run:

- `docker build -t viemed-app .` and then `docker run -p 3001:3000 viemed-app`.

## Considerations and assumptions

- App was built using [Snowpack](https://www.snowpack.dev/) instead of Webpack. Still experimenting with this to see if it's worth.
- I consider the app is small enough to add Redux or another global state management tool. Should this scale, we should reconsider these decisions.
- **For the best production performance:** Add a build bundler plugin like "@snowpack/plugin-webpack" or "@snowpack/plugin-parcel" to your `snowpack.config.json` config file. Right now, it's totally acceptable.
- Offline mode for the app is out of the scope.
- Due to lack of time, it doesn't have optimistic updates.
- `note` field is missing from the app. I don't think this is crucial because it wouldn't have changed a lot.
- Unit tests were created for basic components with RTL, and E2E tests with Cypress JS. 
- AccessToken is stored in LocalStorage. Cookies would be more secure, but this is a rather simple app.
- AccessToken doesn't have an expiration, so we won't be checking it on requests.
- Logout is missing, though everything is just in place to implement it.