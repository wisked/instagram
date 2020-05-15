import React from 'react';
import { useHistory } from "react-router-dom";

import './Post.css';

export function Post(props) {
  let history = useHistory();

  function handleClick() {
    history.push(`/post/${props.data.id}`);
  }
  return (
    <figure className="app__post" onClick={handleClick}>
      <img className="image" src={props.data.display_src} alt={props.data.caption}/>
      <figcaption className="caption">
        <strong>{props.data.caption}</strong>
        <p><strong>Likes: {props.data.likes} comments: {props.data.comments}</strong></p>
      </figcaption>
    </figure>
  )
}