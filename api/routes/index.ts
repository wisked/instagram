import user from './user';
import * as express from 'express';
import posts from './post';

const app = express();

user(app);
posts(app);

export default app;