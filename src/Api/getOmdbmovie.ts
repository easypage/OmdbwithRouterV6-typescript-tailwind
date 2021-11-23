import axios from 'axios';

async function getOmdbmovie(ttid: string) {
  if (ttid === '') {
    // 리턴 입력값이 없습니다.를 리턴
    return;
  }
  const response = await axios.get(`http://www.omdbapi.com/?apikey=4d3f9d39&i=${ttid}&plot=full`);
  console.log(response);
  // 겨울왕국 ttid -> tt2294629
  return response.data;
}

export default getOmdbmovie;
