import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import './PostPage.css';

const getPostDataEndpoint = 'http://localhost:8080/post';

export function PostPage(props) {
  const [postData, setPostData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${getPostDataEndpoint}/${id}`)
      .then((res) => {
        setPostData(res.data);
      });
  });

  return (
    <div className="app__post-page">
      <figure>
        <img src={postData && postData.display_src} alt={postData && postData.caption} />

      </figure>
    </div>
  )
}