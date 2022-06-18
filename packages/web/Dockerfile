# FROM devforth/spa-to-http:latest
# COPY ./dist/ .

# production environment
# FROM nginx:stable-alpine
# COPY ./dist /usr/share/nginx/html
# # new
# COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

FROM node:16-alpine
WORKDIR /usr/src/app
RUN yarn global add serve
COPY ./dist .
COPY serve.json .
CMD serve .
