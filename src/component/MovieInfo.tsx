import '../css/info.css';

import { CSSProperties, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { fetchMovieInfo, MovieInfoData } from '../module/redux/reducer/movieInfoReducer';

import MovieInfoScore from './MovieInfoScore';

type MovieInfoProps = {
  loading: boolean;
  error: string;
  movie: MovieInfoData;
  searchMode: boolean;
};

function MovieInfo({ loading, error, movie, searchMode }: MovieInfoProps) {
  useEffect(() => {
    if (ttid != undefined) {
      dispatch(fetchMovieInfo(ttid));
    }
    return () => {};
  }, []);

  // MovieInfo 페이지는 useState와 redux 둘다 관리가 가능합니다.
  // info페이지에서만 사용할 자료들이면 State'만' 사용해도되지만
  // 권장 사항이지 필수 사항은 아닙니다. 로딩 등을 관리를 위해 리덕스를 사용하겠습니다.

  const { ttid } = useParams();
  const dispatch = useDispatch(); //제거 요망

  // 완성후 삭제
  // const tooltip = (
  //   <Tooltip id="tooltip">
  //     <strong>Internet Movie Database</strong>
  //   </Tooltip>
  // );

  const backCss: CSSProperties = {
    // 해상도 변환
    backgroundImage: `url(${movie.poster})`,
    backgroundRepeat: 'no-repeat',
  };

  return movie.title != '' && !loading ? (
    <div>
      <div
        className={
          searchMode
            ? 'overflow-hidden back w-full relative bg-cover bg-gray-400 pt-16 bg-center md:h-screen'
            : 'back w-full relative bg-cover bg-gray-400  bg-center md:h-screen'
        }
        style={backCss}
      >
        <main className="container pt-12 pb-12 relative flex flex-col items-center  justify-center text-center md:flex-row   md:h-screen ">
          {/* 포스터 */}
          <figure className="Poster  flex-1 md:w-auto md:h-auto">
            <img className="m-auto  w-40 h-56  .shadow-xl rounded-3xl  md:w-2/3 md:h-2/3" src={movie.poster} alt="" />
          </figure>
          <section className="movieInfo flex-1 ">
            {/* 제목 */}
            <div className="title text-white text-5xl whitespace-normal font-bold mb-8 mt-8 md:text-8xl">{movie.title}</div>

            {/* map 표현 하기 */}
            <ul className="score text-white flex justify-between w-full h-full mb-8 mt-8 lg:justify-around ">
              {movie.score && movie.score.map((score, index) => <MovieInfoScore title={score.Source} value={score.Value} key={index} />)}
            </ul>
            {/* FLEX AROUND로 확실한 간격마다 줄을 긋기 위해 line이라는 클래스 추가 */}
            <ul className="info  w-full text-gray-400 flex justify-around mb-8 mt-8 md:justify-evenly md:text-1xl ">
              <li className="type uppercase">{movie.type}</li>
              <li className="line">l</li>
              <li className="released"> {movie.released}</li>
              <li className="line">l</li>
              <li className="runTime">{movie.runTime}</li>
            </ul>

            <article className="plot  text-white whitespace-normal">{movie.plot}</article>
          </section>
        </main>
      </div>
    </div>
  ) : (
    <h2>로딩중입니다.</h2> // 로딩페이지 만들기
  );
}

export default MovieInfo;
