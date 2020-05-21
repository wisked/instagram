import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import CloseIcon from '@material-ui/icons/Close';

import './PostPage.css';

const getPostDataEndpoint = 'http://localhost:8080/post';

export function PostPage(props) {
  const history = useHistory();
  const [postData, setPostData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    const getPostData = async () => {
      const { data } = await axios.get(`${getPostDataEndpoint}/${id}`)
      setPostData(data);
    }
    getPostData();
  }, {});

  function handleClose() {
    document.documentElement.style.overflow = 'auto';
    history.goBack();
  }

  return (
    <div className="app__post-page">
      <div className="post-container">
        <div className="post-close ">
          <button className="close-btn" onClick={handleClose}><CloseIcon /></button>
        </div>
        <div className="post-layout">
          <figure className="image-container">
            <img src={postData && postData.display_src} alt={postData && postData.caption} className="image" />
          </figure>
          <div className="app__post-page-comments">
            <div className="account-container account-container_header">
              <div className="account-image">
                <img src="https://ms1.relax.by/images/5609f19ac45ad75e3872ba22fde8564a/thumb/w=274,h=274,q=34/place_gallery_photo/df/67/73/df6773b4b251d6847fff61282c3f204e.jpg" alt="" />
              </div>
              <div className="account-data">
                some data
              </div>
            </div>
            <div>
              <ul className="comments-container">
                {/* {postData && postData.comments_data && postData.comments_data.map(({ text, user, user_id: id }) =>  */}
                <li>
                  <div className="account-container">
                    <div className="account-image">
                      <img src="https://ms1.relax.by/images/5609f19ac45ad75e3872ba22fde8564a/thumb/w=274,h=274,q=34/place_gallery_photo/df/67/73/df6773b4b251d6847fff61282c3f204e.jpg" alt="" />
                    </div>
                    <div className="account-data">
                      <h3 className="account-title">title</h3>
                      <p className="account-comment">Lore dfjas fs a fasd fasdf f dsaf ds asf f sad fdsa</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}