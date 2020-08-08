FROM node:12-alpine

WORKDIR /usr/app

ENV NODE_ENV=production

COPY package*.json ./
RUN npm install
COPY . .

CMD [ "npm", "start" ]