// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mongoose = require('mongoose');

// const userRoute = require('./server-api/routes/user.route');
// const postsRoute = require('./server-api/routes/posts.route');

// const app = express();
// const port = 8080;

// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ limit: '200mb', extended: true }));

// app.use('/api/users/', userRoute);
// app.use('/api/post?s/', postsRoute);



// app.listen(port, async () => {
//   console.log(`Example app listening at http://localhost:${port}`);
//   //connect to mongodb
//   await mongoose
//     .connect("mongodb://localhost/insta", { useNewUrlParser: true })
//     .then(() => console.log("Connected to MongoDB..."))
//     .catch(err => console.error("Could not connect to MongoDB..."));
// });
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import * as cors from 'cors';

import routes from './api/routes';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '200mb', extended: true }));

app.use('/api', routes);

app.listen(8080, async () => {
  console.log('Server ready!')
  await mongoose
    .connect("mongodb://localhost/insta", { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB..."))
    .catch(err => console.error("Could not connect to MongoDB..."));
  console.log('Database ready!')

  console.log('Listening on port 3000')
})