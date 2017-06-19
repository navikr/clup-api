FROM node

MAINTAINER Saurabh Jain

ENV NODE_ENV=production
ENV NODE_PORT=3000

COPY . /var/www
WORKDIR /var/www

EXPOSE $NODE_PORT

RUN npm install

ENTRYPOINT ["node","server.js"]