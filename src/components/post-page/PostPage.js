import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

import './PostPage.css';

const getPostDataEndpoint = 'http://localhost:8080/post';

export function PostPage(props) {
  const [postData, setPostData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getPostData = async () => {
      const { data } = await axios.get(`${getPostDataEndpoint}/${id}`)
      setPostData(data);
    }
    getPostData();
  }, {});

  return (
    <div className="app__post-page">
      <figure>
        <img src={postData && postData.display_src} alt={postData && postData.caption} />

      </figure>
      <div className="app__post-page-comments">
        <div>
          <ul >
            {postData && postData.comments_data && postData.comments_data.map(({ text, user, user_id: id }) => <li>
              <div>
                <Link to={{
                  pathname: `/user/${user}`,
                  state: { userId: id },
                }}><span>{user}</span>
                </Link>
                <span>{text}</span>
              </div>
            </li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}