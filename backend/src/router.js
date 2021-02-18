const router = require('koa-router')();
const controllers = require('./controllers');

router.get('/api/weather/:latitude/:longitude', async (ctx) => {
  const coordinates = {
    latitude: Number(ctx.params.latitude),
    longitude: Number(ctx.params.longitude),
  };

  const weather = await controllers.fetchWeather(coordinates);
  const weatherData = {
    current: weather.current,
    hourly: weather.hourly
      .filter((w) => Number(w.dt) > Number(weather.current.dt))
      .slice(0, 5),
  };
  console.log(weatherData);
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
  ctx.body = city ? city : {};
});

router.get('/api', (ctx) => {
  console.log(ctx);
});

module.exports = router;
