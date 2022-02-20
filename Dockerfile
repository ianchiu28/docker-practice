FROM node:16.14.0-stretch
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 3000
CMD npm start