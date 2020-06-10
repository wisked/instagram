const express = require('express');
const router = express.Router();

const isAuth = require('../middlewares/token.middleware');

router.get('/', (req, res, next) => {
  console.log('!!!!!!!!');
  isAuth(req);
  next();
  // console.log('!!!!!!!!!!!!', isAuth(req));
  res.status(200);
});

router.get('/post/:id?', (req, res) => {
  // const post = Posts().getPosts().find(({id}) => id == req.params.id);
  // if (req.query) {
  //   switch (req.query.q) {
  //     case 'like':
  //       res.sendStatus(200);
  //       break;

  //     default:
  //       break;
  //   }
  // }
  // const comments = post && getCommets().getCommetById(post.id);
  // if (post) post.comments_data = comments; 
  // res.status(200).json(post);
});

module.exports = router;