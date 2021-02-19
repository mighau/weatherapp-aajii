const router = require('koa-router')();
const controllers = require('./controllers');

router.get('/api/weather/:latitude/:longitude', async (ctx) => {
  console.log('weather request');
  const coordinates = {
    latitude: Number(ctx.params.latitude),
    longitude: Number(ctx.params.longitude),
  };

  const weather = await controllers.fetchWeather(coordinates);
  const weatherData = {
    current: weather.current,
    // extract the 5 next hourly forecasts after current time:
    hourly: weather.hourly
      .filter((w) => Number(w.dt) > Number(weather.current.dt))
      .slice(0, 5),
  };

  ctx.type = 'application/json; charset=utf-8';
  ctx.body = weatherData ? weatherData : {};
});

router.get('/api/city/:latitude/:longitude', async (ctx) => {
  const coordinates = {
    latitude: Number(ctx.params.latitude),
    longitude: Number(ctx.params.longitude),
  };

  const city = await controllers.fetchCity(coordinates);

  ctx.type = 'application/json; charset=utf-8';
  ctx.body = city
    ? { city: city.plus_code.compound_code.split(' ').slice(1).join(' ') }
    : {};
});

module.exports = router;
