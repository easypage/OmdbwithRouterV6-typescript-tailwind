import axios from 'axios';

async function getOmdbList(name: String) {
  if (name === '') {
    const response = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=4d3f9d39&s=0`);
    return response.data;
  }
  const response = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=4d3f9d39&s=${name}&page=1`);
  return response.data;
}

export default getOmdbList;
