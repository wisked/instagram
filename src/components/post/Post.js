import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { FavoriteBorder, CommentOutlined, NavigateBefore, NavigateNext } from '@material-ui/icons';
import axios from 'axios';

import './Post.css';

const setLikeEndpoint = 'http://localhost:8080/post';

export function Post(props) {
  let history = useHistory();
  const defaultImageSrc = Array.isArray(props.data.display_src) ? props.data.display_src[0] : props.data.display_src;
  const [imageSrc, setImageSrc ] = useState(defaultImageSrc);
  const [imageIndex, setImageIndex ] = useState(0);
  
  function handleClick() {
    history.push(`/post/${props.data.id}`);
  }

  function handleClickLike(event) {
    event.stopPropagation();
    axios.get(`${setLikeEndpoint}/${props.data.id}`, {
      params: {
        q: 'like',
      }
    })
  }

  function handleClickNextImage(event, direction) {
    event.stopPropagation();
    let index;
    if (direction === 'next') {
      index = imageIndex === props.data.display_src.length - 1 ? imageIndex : imageIndex + 1;
    } else {
      index = imageIndex === 0 ? imageIndex : imageIndex - 1;
    }
    setImageIndex(index);
    setImageSrc(props.data.display_src[index]);
  }
  
  return (
    <figure className="app__post" onClick={handleClick} onDoubleClick={handleClickLike}>
      <img className="image" src={imageSrc} alt={props.data.caption} />
      {Array.isArray(props.data.display_src) && <NavigateBefore className="navigation-before" onClickCapture={(e) => handleClickNextImage(e, 'before')}/>}
      <figcaption className="caption">
        <strong className="image-title">{props.data.caption}</strong>
        <p>
          <span className="caption-controls">
            <FavoriteBorder onClick={handleClickLike} />
            <strong className="caption-controls__data">{props.data.likes}</strong>
          </span>
          <span className="caption-controls">
            <CommentOutlined />
            <strong className="caption-controls__data">{props.data.comments}</strong>
          </span>
        </p>
      </figcaption>
      {Array.isArray(props.data.display_src) && <NavigateNext className="navigation-next" onClickCapture={(e) => handleClickNextImage(e, 'next')}/>}
    </figure>
  )
}