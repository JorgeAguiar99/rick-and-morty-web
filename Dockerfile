FROM node:lts-bullseye

USER node
COPY . /home/node/app
WORKDIR /home/node/app
EXPOSE 3000