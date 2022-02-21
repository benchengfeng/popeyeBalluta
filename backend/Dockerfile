FROM node:14.17-alpine as development

WORKDIR /app
RUN npm install -g nodemon
RUN apk --no-cache add --virtual builds-deps build-base python3
COPY package.json /app/package.json
RUN npm install
COPY . /app

EXPOSE 808
CMD ["npm", "start"]