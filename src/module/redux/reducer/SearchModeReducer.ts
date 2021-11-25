import React from 'react';
const SEARCHMODEON = 'SearchMode/searchModeOn' as const;
const SEARCHMODEOFF = 'SearchMode/searchModeOff' as const;

// 액션생성
export const searchModeOn = () => ({ type: SEARCHMODEON });
export const searchModeOff = () => ({ type: SEARCHMODEOFF });

// 액션 타입 및 기본값 정의
type searchModeAction = ReturnType<typeof searchModeOn> | ReturnType<typeof searchModeOff>;

// 리듀서 state 기본값
type searchMode = {
  searchMode: boolean;
};

// 리듀서 기본값
const initialState: searchMode = {
  searchMode: false,
};

// 리듀서
export default function reducer(state: searchMode = initialState, action: searchModeAction): searchMode {
  switch (action.type) {
    // 호출이 시작될 떄 로딩으로 바꿔줌
    case SEARCHMODEON:
      return {
        searchMode: true,
      };
    case SEARCHMODEOFF:
      return {
        searchMode: false,
      };
    // 성공시 로딩을 풀고 데이터를 넣어줌

    default:
      return state;
  }
}
