import React, {useEffect, useState} from 'react';
import axios from "axios";

function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState
  (true);
  const [error, setError] = useState
  (null);

  useEffect(() => {
    axios('https://foundation.app/api')
    .then(response => {
      return response.json()
    })
    throw response;
  })
    .then(data => {
      setData(data);
    })
    .catch(error => {
      console.error("Error fetching data: ", error");
      setError(error);
    })
    .finally(() => {
      setLoading(false);
    })
}

if (loading) return "Loading...";
if (error) return "Error!";

    
export default Home; 