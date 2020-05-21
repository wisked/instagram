import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  Link,
} from 'react-router-dom';

import { NavigationTopBar, SighUp, PostsLayout, PostPage, UserPage } from './components/declarations';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <NavigationTopBar />
      </div>
      <Switch>
        <Route path="/signup">
          <SighUp />
        </Route>
        <Route path="/top-posts">
          <TopPostsRouting />
        </Route>
        {/* <Route path="/post/:id" component={PostPage} /> */}
        <Route path="/user/:userName" component={UserPage} />
      </Switch>
    </Router>
  );
}

function TopPostsRouting() {
  let { path } = useRouteMatch();
  return (
    <React.Fragment>
      <PostsLayout />
      <Switch>
        <Route path={`${path}/post/:id`}>
          <PostPage />
        </Route>
      </Switch>
    </React.Fragment>
  )
}

export default App;
