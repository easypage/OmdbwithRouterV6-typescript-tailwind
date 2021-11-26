import { movie } from '../module/redux/reducer/SearchMovieReducer';
import SearchDetail from './SearchDetail';

type SearchDropDown = {
  loading: boolean;
  error: string;
  movieData: Array<movie>;
};

function SearchDropDown({ loading, error, movieData }: SearchDropDown) {
  return (
    <div>
      {
        // 로딩 확인
        !loading ? (
          // 에러를 string으로 반환 해줍니다.
          error.length <= 0 ? (
            movieData &&
            //서치디테일 렌더링
            movieData.map((movie, index) => {
              // 검색 결과 5개
              if (index > 4) {
                return;
              }
              return (
                <div key={movie.imdbID}>
                  {/* 드롭다운 메뉴 중 한 줄입니다. */}
                  <SearchDetail movie={movie} />
                </div>
              ); //서치디테일 뽑기끝
            })
          ) : (
            // 에러컴포넌트
            <p className="text-xl">{error}</p>
          )
        ) : (
          // 로딩
          <div className="spinner-border text-center" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        )
      }
    </div>
  );
}
export default SearchDropDown;
