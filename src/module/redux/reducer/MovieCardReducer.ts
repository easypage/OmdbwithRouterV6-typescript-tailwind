// 액션 정의

import { Dispatch } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './rootReducer';
import { fetchMovieList, movie } from './SearchMovieReducer';

const INSERT = 'movieCard/INSERT' as const;

// 액션생성
export const insert = (payload: Array<movie>) => ({ type: INSERT, payload });

// 액션 타입 및 기본값 정의
type MovieAction = ReturnType<typeof insert>;

// 리듀서 state 기본값
type searchMovie = {
  data: Array<movie>;
};

// 리듀서 기본값
const initialState: searchMovie = {
  data: [],
};

// 리듀서
export default function reducer(state: searchMovie = initialState, action: MovieAction): searchMovie {
  switch (action.type) {
    // 호출이 시작될 떄 로딩으로 바꿔줌
    case INSERT:
      return {
        ...state,
        data: action.payload,
      };
    // 성공시 로딩을 풀고 데이터를 넣어줌

    default:
      return state;
  }
}

// export const fetchMovieListCard = (movieName: string) => async (dispatch: Dispatch<MovieAction>) => {
//   // 아무값이 없다면 초기화 시켜줍니다.
//   fetchMovieList(movieName);
//   //갱신후 리스트 값을 넣어주는 것

//   dispatch(insert(movieList));
// };
