const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { getPosts } = require('./mockData/data');

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json({ limit: '200mb' }));
app.use(bodyParser.urlencoded({ limit: '200mb', extended: true }));

app.get('/posts', (req, res) => {
  console.log(req.query);
  
  res.status(200).json(getPosts());
});

app.get('/post/:id?', (req, res) => {
  console.log(req.query);
  const post = getPosts().find(({id}) => id === req.params.id);
  res.status(200).json(post);
});

app.post('/register', (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));