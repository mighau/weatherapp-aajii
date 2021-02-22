# Dockerfile for the frontend
FROM node:14-alpine

# Creating the working directory
RUN mkdir -p /src/app/weatherapp-frontend
WORKDIR /src/app/weatherapp-frontend

COPY package*.json /src/app/weatherapp-frontend/

RUN npm install

# If ran on local development environment, comment the rest out: 
COPY ./ /src/app/weatherapp-frontend/
CMD npm start