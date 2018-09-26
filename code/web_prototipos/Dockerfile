FROM node:8

RUN mkdir web
WORKDIR /web
COPY yarn.lock /yarn.lock
COPY package.json /package.json

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin
RUN yarn

COPY . .

EXPOSE 3000
