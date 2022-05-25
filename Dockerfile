FROM node:alpine as frontend

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM httpd:latest

COPY --from=frontend /usr/src/app/dist/bcp-app/ /usr/local/apache2/htdocs/

COPY httpd.conf /usr/local/apache2/conf
