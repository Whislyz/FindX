const express = require('express');
const { client } = require('./db/index.js');
const controller = require('./controller/index.js');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/', (req, res, next) => {
  console.log(` ${req.method} from ${req.originalUrl}`);
  console.log(req.body);
  next();
});

app.get('/api/DummyTest', (req, res) => res.status(200).send('received'));

app.get('/api/highscores', (req, res) => {
  controller.getHighScores()
  .then( (result) => {
    res.status(200).send(result)
  })
  .catch( (error) => {
    res.status(500)
    console.log('error from fetching highscores', err)
  });
})

app.get('/api/mathProblems', (req, res) => {
  controller.getMathProblems()
  .then( (result) => {
    res.status(200).send(result)
  })
  .catch( (error) => {
    res.status(500)
    console.log('error from getting all math problems', err)
  });
});

app.post('/api/score' , (req, res) => {
  const {score, username} = req.body.data;
  controller.insertScore(score, username)
  .then( (result) => {
    res.status(200).send(result)
  })
  .catch( (error) => {
    res.status(500)
    console.log('error from inserting score', error)
  });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log('err connecting to express server', ERR)
  } else {
    console.log(`Server is listening on PORT: ${PORT}`);
  };
});