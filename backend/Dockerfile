# Dockerfile for the backend
FROM node:14-alpine

# Creating the wokring directory
RUN mkdir -p /src/app/weatherapp-backend
WORKDIR /src/app/weatherapp-backend

COPY package*.json /src/app/weatherapp-backend/

RUN npm install

# If ran on local development environment, comment the rest out: 
COPY ./ /src/app/weatherapp-backend/
CMD npm start