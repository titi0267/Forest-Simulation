"use client";

import axiosInstance from '@/utils/axios';
import { useState } from 'react';

const Home = () => {
  const [response, setResponse] = useState(null);

  const fetchDataFromPHP = async () => {
    try {
      const response = await axiosInstance.post('/blabla/');
      console.log(response.data);
      } catch (error) {
      console.error('Erreur:', error);
    }
  };

  return (
    <div>
      {/* <p>Content generation</p> */}
      <button onClick={fetchDataFromPHP}>Envoyer la requête vers PHP</button>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
};

export default Home;
