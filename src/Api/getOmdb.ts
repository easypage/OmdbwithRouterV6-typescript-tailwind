import axios from 'axios';
import React from 'react';

async function getOmdb(name: String) {
  if (name === '') {
    const response = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=4d3f9d39&s=0`);
    return response.data;
  }
  const response = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=4d3f9d39&s=${name}&page=1`);
  return response.data;
}

export default getOmdb;
