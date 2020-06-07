const express = require('express');
const { client } = require('./db/index.js');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/', (req, res, next) => {
  console.log(` ${req.method} from ${req.originalUrl}`);
  console.log(req.body);
  next();
});

app.get('/api/DummyTest', (req, res) => res.status(200).send('received'));

app.listen(PORT, (err) => {
  if (err) {
    console.log('err connecting to express server', ERR)
  } else {
    console.log(`Server is listening on PORT: ${PORT}`);
  };
});