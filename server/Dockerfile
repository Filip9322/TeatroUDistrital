FROM node:9.4.0-alpine

WORKDIR /usr/app

ENV TOKEN_SECRET=supersecret
ENV DB_USER=root
ENV DB_NAME=mvw
ENV DB_HOST=mvw_db
ENV DB_PASSWORD=P@ssw0rd

COPY package*.json ./
RUN npm install -qy

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
