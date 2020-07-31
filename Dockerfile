FROM node:alpine AS base

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . .

RUN yarn
RUN yarn build

CMD ["yarn", "start"]