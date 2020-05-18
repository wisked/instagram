import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
          <PostsLayout />
        </Route>
        <Route path="/post/:id" component={PostPage} />
        <Route path="/user/:userName" component={UserPage} />
      </Switch>
    </Router>
  );
}


export default App;
