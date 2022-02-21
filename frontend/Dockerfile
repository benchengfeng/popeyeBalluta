FROM node:12-alpine as builder

WORKDIR /app
RUN apk --no-cache add --virtual builds-deps build-base python3
COPY package.json /app/package.json
RUN npm install
COPY . /app

EXPOSE 3001
CMD ["npm", "start"]
