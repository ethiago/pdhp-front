FROM node

RUN mkdir -p ./webapp/app

WORKDIR ./webapp/

COPY LICENSE package.json ./

RUN npm install --only=production

COPY server.js Gruntfile.js extractEnvToAngular.js ./
COPY app ./app/

RUN npm run build

EXPOSE 8080

CMD [ "npm", "start" ]
