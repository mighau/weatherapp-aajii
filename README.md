# Weatherapp

Created as a technical task of a job application.

## Description

Weatherapp displays the current weather conditions as well as the forecast for five following hours utilizing the [openweathermap](http://openweathermap.org/) API. The app also displays the city the user is located with the coordinates provided by the browser. The app requires access to location services.

Weatherapp utilises koa in the backend, where the static frontend is served. Frontend is created with React and built out to static files.

## Prerequisites

- An [openweathermap](http://openweathermap.org/) API key.
- An [Google Geolocation](https://developers.google.com/maps/documentation/geocoding/overview) API key (if the city data is desired).

## Development environment

### Node.js

- the app utilizises Node.js, [here's how to install it.](https://nodejs.org/en/download/package-manager/#macos)

### Docker

- Make sure Docker is installed on your development environment with Docker Compose functionality

### Environment variables

Create a file named `.env` to the `backend` folder with the following content:

```
> APPID=(your openweathermap API key)\
> GCP_APIKEY=(your Google Geolocation API key)
```

_NOTE: if GCP API key is omitted, the app still works, but without the city information displayed in browser._

## Running the application

To run the app in the docker containers with hot-reload available, do the following

1. Uncomment everything in the `docker-compose.yaml` file.
2. Make sure the accordingly marked parts in dockerfiles located `/frontend` and `/backend` are commented out.
3. go to the root folder (the folder where the `docker-compose.yaml` file is located) and run the following:

```
   $ docker-compose up -d
```

4. you can access the in-development frontend at `localhost:8000` and the static build at the backend at `localhost:9000`

The app can also be run directly using `npm run dev` or `npm start` at the backend directory, and `npm start` in the frontend directory.

## Live deployment

A version of Weatherapp is deployed in Google Cloud Platform, and [available here.](https://weatherapp-wn3jf3onvq-uc.a.run.app/)
