FROM node:5

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN NPM_CONFIG_REGISTRY="http://192.168.99.101:8081/content/groups/npm/" \
    npm install --production
COPY . /usr/src/app

CMD [ "npm", "start" ]
