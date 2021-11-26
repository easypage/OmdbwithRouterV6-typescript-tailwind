import React, { Dispatch } from 'react';
import getOmdbmovie from '../../../Api/getOmdbmovie';

const PENDING = 'movieInfo/LORDING' as const;
// 스켈레톤표현을 위해 사용
const SUCCESS = 'movieInfo/SUCCESS' as const;
// 값입력
const ERROR = 'movieInfo/ERROR' as const;
// 오류페이지

// 액션생성
export const pending = () => ({ type: PENDING });

export const success = (payload: MovieInfoData) => ({ type: SUCCESS, payload });

export const error = (payload: string) => ({ type: ERROR, payload });

// 액션 타입 및 기본값 정의
type MovieInfoAction = ReturnType<typeof pending> | ReturnType<typeof success> | ReturnType<typeof error>;

// 리듀서 state 기본값
type movieInfo = {
  loading: boolean;
  data: MovieInfoData;
  error: string;
};

// state안 데이터
export type MovieInfoData = {
  poster: string;
  title: string;
  score: Array<scoreObject>;
  released: string;
  type: string;
  runTime: string;
  plot: string;
};

export type scoreObject = {
  Source: string;
  Value: string;
};

// api 반환값 타입 구분
type omdbResponse = {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: Array<scoreObject>;
  Released: string;
  Response: string;
  Runtime: string;
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
};

// 리듀서 기본값
const initialState: movieInfo = {
  loading: false,
  data: { poster: '', title: '', score: [], released: '', type: '', runTime: '', plot: '' },
  error: 'Error Test',
};

// 리듀서
export default function reducer(state: movieInfo = initialState, action: MovieInfoAction): movieInfo {
  switch (action.type) {
    // 호출이 시작될 떄 로딩으로 바꿔줌
    case PENDING:
      return {
        ...state,
        loading: true,
        error: '',
      };
    // 성공시 로딩을 풀고 데이터를 넣어줌
    case SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    // 실패시 로딩을 풀고 데이터를 초기화 하고 에러를 넣어줌
    case ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}

// thank 액션
export const fetchMovieInfo = (ttid: string) => async (dispatch: Dispatch<MovieInfoAction>) => {
  // 아무값이 없다면 초기화 시켜줍니다.
  if (ttid === '') {
    // 이름이 없다면 다른 데이터를 입력해 줍니다.
    return;
  }
  //로딩시작
  dispatch(pending());

  //api호출
  const resData: omdbResponse = await getOmdbmovie(ttid);
  //호출 정보에 따라 성공과 실패를 넣어줌
  if (resData.Response == 'True') {
    const movieInfo: MovieInfoData = {
      poster: resData.Poster.replace('SX300.jpg', 'SX1900.jpg'),
      title: resData.Title,
      score: resData.Ratings,
      released: resData.Released,
      type: resData.Type,
      runTime: resData.Runtime,
      plot: resData.Plot,
    };

    dispatch(success(movieInfo));
  } else {
    dispatch(error('에러가 발생하였습니다.!'));
  }
};
