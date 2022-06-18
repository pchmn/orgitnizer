FROM node:16-alpine
WORKDIR /usr/src/app
RUN yarn global add serve
COPY ./dist .
COPY serve.json .
CMD serve .
