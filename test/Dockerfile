FROM node:8
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install
RUN mkdir /usr/src/app/logs

COPY . /usr/src/app

EXPOSE 8080
CMD [ "npm", "start" ]