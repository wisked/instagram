import PostsService from '../services/post';
import isAuth from '../middlewares/isAuth';
import attachCurrentUser from '../middlewares/attachCurrentUser';


export default (app) => {
  const postService = new PostsService();

  // app.get('/post/', isAuth, attachCurrentUser, async (req, res) => {
  //   try {
  //     const user = req.currentUser;
  //     const postServiceInstance = new PostsService();
    
  //     const posts = await postServiceInstance.GetMyposts(user);
  //     return res.json(posts).status(200);
  //   } catch (e) {
  //     return res.json(e).status(500);
  //   }
  // })

  app.get('/post/:id', isAuth, attachCurrentUser, async (req, res) => {
    try {
      const user = req.currentUser;
      const postId = req.params.id;

      const postServiceInstance = new PostsService();
      
      const posts = await postService.getPost(postId, user);
      return res.json(posts).status(200);
    } catch (e) {
      return res.json(e).status(500);
    }
  })

  app.post('/post/', isAuth, attachCurrentUser, async (req, res) => {
    try {
      const user = req.currentUser;
      const postDTO = req.body.post;
      const postServiceInstance = new PostsService();
      const post = await postServiceInstance.createPost(postDTO, user);
      return res.json(post).status(201);
    } catch(e) {
      return res.json(e).status(500);
    }
  })

  app.put('/post/:id', isAuth, attachCurrentUser, async (req, res) => {
    try {
      const user = req.currentUser;
      const postDTO = req.body.post;
      const postId = req.params.id;
    
      const postServiceInstance = new PostsService();
      const postUpdated = await postServiceInstance.Update(postId, postDTO, user);

      return res.json(postUpdated).status(200);
    } catch (e) {
      return res.json(e).status(500);
    }

  })
  app.delete('/post/:id', isAuth, attachCurrentUser, async (req, res) => {
    try {
      const user = req.currentUser;
      const postId = req.params.id;  
      const postServiceInstance = new PostsService();
      await postServiceInstance.removePost(postId, user);

      return res.json('ok').status(200);
    } catch (e) {
      return res.json(e).status(500);
    }
  })
};