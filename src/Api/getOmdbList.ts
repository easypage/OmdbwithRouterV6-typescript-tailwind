import axios from 'axios';

async function getOmdbList(name: String, page?: number) {
  //에러 값 처리
  if (name === '') {
    const response = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_OMDB_API}&s=0`);
    return response.data;
  }
  // page 추가 받기
  if (typeof page !== 'undefined') {
    const response = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_OMDB_API}&s=${name}&page=${page}`);
    return response.data;
  } else {
    const response = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_OMDB_API}&s=${name}&page=1`);
    return response.data;
  }
}

export default getOmdbList;
