FROM node

ENV NODE_ENV production

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN rm -rf /usr/src/app/node_modules
RUN  npm i
RUN npm run build
EXPOSE 3000

CMD [ "npm", "start" ]