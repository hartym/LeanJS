FROM node:5

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN NPM_CONFIG_REGISTRY=$NPM_CONFIG_REGISTRY npm install --production
COPY . /usr/src/app

CMD [ "npm", "start" ]
