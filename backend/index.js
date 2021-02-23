/* eslint-disable-next-line no-unused-vars */
const app = require('./app');
require('dotenv').config();

const port = process.env.PORT || 9000;

app.listen(port);

console.log(`App listening on port ${port}`);
