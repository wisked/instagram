import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import axios from 'axios';

import './UserPage.css';

const getAccountDataEndpoint = 'http://localhost:8080/account';

export function UserPage(props) {
  const [accountData, setAccountData] = useState(null);
  // const { id } = useParams();
  const { location } = useLocation();

  useEffect(() => {
    const getAccountData = async () => {
      const { data } = await axios.get(`${getAccountDataEndpoint}/${location.state.userId}`)
      setAccountData(data);
    }
    getAccountData();
  }, {});

  return (
    <div className="app__post-page">

    </div>
  )
}