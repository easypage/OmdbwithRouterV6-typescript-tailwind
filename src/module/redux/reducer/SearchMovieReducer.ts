// 액션 정의

import { Dispatch } from 'react';
import getOmdb from '../../../Api/getOmdbList';
import uniqMovieId from '../../lodash/uniqMovieId';

const PENDING = 'movie/LORDING' as const;
const SUCCESS = 'movie/SUCCESS' as const;
const ADD = 'movie/ADD' as const;
const SEARCH = 'movie/SEARCH' as const;
const ERROR = 'movie/ERROR' as const;
const RESET = 'movie/RESET' as const;

// 액션생성
export const pending = () => ({ type: PENDING });

export const success = (payload: searchMovieData) => ({ type: SUCCESS, payload });

export const add = (payload: movie[]) => ({ type: ADD, payload });

export const search = (payload: string) => ({ type: SEARCH, payload });

export const error = (payload: string) => ({ type: ERROR, payload });

export const reset = () => ({ type: RESET });

// 액션 타입 및 기본값 정의
type MovieAction =
  | ReturnType<typeof pending>
  | ReturnType<typeof success>
  | ReturnType<typeof error>
  | ReturnType<typeof add>
  | ReturnType<typeof search>
  | ReturnType<typeof reset>;

// 리듀서 state 기본값
type searchMovie = {
  loading: boolean;
  data: searchMovieData;
  error: string;
  searchValue: string;
};

export type searchMovieData = {
  movie: Array<movie>;
  totalResults: string;
};

// 영화데이터->
export type movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

// api 반환값 타입 구분
type omdbResponse = {
  Response: 'True';
  Search: Array<movie>;
  totalResults: string;
};

type omdbErrorResponse = {
  Error: string;
  Response: 'False';
};

// 리듀서 기본값
const initialState: searchMovie = {
  loading: false,
  data: {
    movie: [],
    totalResults: '0',
  },
  error: '',
  searchValue: '',
};

// 리듀서
export default function reducer(state: searchMovie = initialState, action: MovieAction): searchMovie {
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
        data: { movie: [], totalResults: '0' },
        loading: false,
        error: action.payload,
      };
    // 데이터추가로딩
    case ADD:
      return {
        ...state,
        loading: false,
        data: {
          totalResults: state.data.totalResults,
          movie: [...state.data.movie, ...action.payload],
        },
        error: '',
      };
    // 검색값
    case SEARCH:
      return {
        ...state,
        searchValue: action.payload,
      };
    // 초기화
    case RESET:
      return {
        loading: false,
        data: {
          movie: [],
          totalResults: '0',
        },
        error: '',
        searchValue: '',
      };

    default:
      return state;
  }
}

// thank 액션
export const fetchMovieList = (movieName: string) => async (dispatch: Dispatch<MovieAction>) => {
  // 아무값이 없다면 초기화 시켜줍니다.
  if (movieName === '') {
    dispatch(reset());
    return;
  }
  // 입력값저장
  dispatch(search(movieName));

  //로딩시작
  dispatch(pending());

  //api호출
  const resList: omdbResponse | omdbErrorResponse = await getOmdb(movieName);
  //호출 정보에 따라 성공과 실패를 넣어줌
  if (resList.Response == 'True') {
    // 겹치는 id제거
    const uniq = uniqMovieId(resList.Search);
    const insertSearchData: searchMovieData = { movie: uniq, totalResults: resList.totalResults };
    resList.totalResults;
    // 데이터 입력
    dispatch(success(insertSearchData));
  } else {
    dispatch(error(resList.Error));
  }
};

export const addMovieList = (movieName: string, page: number) => async (dispatch: Dispatch<MovieAction>) => {
  // 아무값이 없다면 초기화 시켜줍니다.
  console.log(movieName);
  console.log(page);
  if (movieName === '') {
    dispatch(reset());
    return;
  }

  //로딩시작
  dispatch(pending());

  //api호출
  const resList: omdbResponse | omdbErrorResponse = await getOmdb(movieName, page);

  //호출 정보에 따라 성공과 실패를 넣어줌
  if (resList.Response == 'True') {
    const uniq = uniqMovieId(resList.Search);
    const insertSearchData: searchMovieData = { movie: uniq, totalResults: resList.totalResults };
    resList.totalResults;

    console.log(insertSearchData.totalResults);

    dispatch(add(insertSearchData.movie));
  } else {
    if (resList.Error === 'Movie not found!') {
      return;
    }

    dispatch(error(resList.Error));
  }
};
