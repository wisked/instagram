const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const { getPosts, getCommets } = require('./mockData/data');

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json({ limit: '200mb' }));
app.use(bodyParser.urlencoded({ limit: '200mb', extended: true }));

app.get('/posts', (req, res) => {
  // const postsQuantity = req.query.quantity || 10;
  res.status(200).json(getPosts());
});

app.get('/post/:id?', (req, res) => {
  const post = getPosts().find(({id}) => id == req.params.id);
  if (req.query) {
    switch (req.query.q) {
      case 'like':
        res.sendStatus(200);
        break;
    
      default:
        break;
    }
  }
  const comments = post && getCommets().getCommetById(post.id);
  if (post) post.comments_data = comments; 
  res.status(200).json(post);
});

app.post('/register', (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));