import axios from 'axios';

// 무비 info용 api
async function getOmdbmovie(ttid: string) {
  if (ttid === '') {
    // 리턴 입력값이 없습니다.를 리턴
    return;
  }
  const response = await axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API}&i=${ttid}&plot=full`);
  return response.data;
}

export default getOmdbmovie;
