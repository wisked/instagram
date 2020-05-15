import React from 'react';
import axios from 'axios';

import './PostsLayout.css';
import { Post } from '../post/Post';

const getPostsEndpoint = 'http://localhost:8080/posts';

export class PostsLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  
  componentDidMount() {
    axios.get(getPostsEndpoint).then(res => {
      this.setState({posts: res.data});
      console.log(res);
    });
  }
  
  render() {
    const posts = this.state.posts;
    return (
      <div className="app__posts-layout">
        {posts.map((post) => <Post key={post.id} data={post}/>)}
      </div>
    );
  }
}