FROM node:23-alpine

WORKDIR /app

COPY . .

ENTRYPOINT [ "node", "app.js" ]