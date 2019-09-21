const express = require('express');
const itemsRoute = require('./api/items');

const PORT = 8080;
const app = express();

app.use(express.static('dist'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});


app.use('/api/items', itemsRoute);

app.listen(process.env.PORT || PORT, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
