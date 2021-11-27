import '../css/info.css';

import { CSSProperties, useEffect } from 'react';

import { useParams } from 'react-router';
import { MovieInfoData } from '../module/redux/reducer/movieInfoReducer';

import MovieInfoScore from './MovieInfoScore';
import MovieInfoLoading from './MovieInfoLoading';

type MovieInfoProps = {
  loading: boolean;

  movie: MovieInfoData;
  searchMode: boolean;
  fetchMoviInfo: (ttid: string) => void;
};

function MovieInfo({ loading, movie, searchMode, fetchMoviInfo }: MovieInfoProps) {
  useEffect(() => {
    if (ttid != undefined) {
      fetchMoviInfo(ttid);
    }
    return () => {};
  }, []);

  // MovieInfo 페이지는 useState와 redux 둘다 관리가 가능합니다.
  // info페이지에서만 사용할 자료들이면 State'만' 사용해도되지만
  // 권장 사항이지 필수 사항은 아닙니다. 로딩 등을 관리를 위해 리덕스를 사용하겠습니다.

  const { ttid } = useParams();

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
            ? ' back relative overflow-hidden w-full  pt-16  bg-cover bg-gray-400 bg-center md:h-screen'
            : 'back relative w-full  bg-cover bg-gray-400  bg-center md:h-screen'
        }
        style={backCss}
      >
        <main className="container relative  pt-12 pb-12 flex flex-col items-center  justify-center text-center md:flex-row   md:h-screen ">
          {/* 포스터 */}
          <figure className="Poster  flex-1 md:w-auto md:h-auto">
            <img className="m-auto  w-40 h-56  .shadow-xl rounded-3xl  md:w-2/3 md:h-2/3" src={movie.poster} alt="" />
          </figure>

          <section className="movieInfo flex-1 ">
            {/* 제목 */}
            <div className="title mb-8 mt-8 text-white text-5xl whitespace-normal font-bold md:text-7xl">{movie.title}</div>

            {/* map 표현 하기 */}
            <ul className="score w-full h-full mb-8 mt-8 text-white flex justify-between  lg:justify-around ">
              {movie.score && movie.score.map((score, index) => <MovieInfoScore title={score.Source} value={score.Value} key={index} />)}
            </ul>
            {/* FLEX AROUND로 확실한 간격마다 줄을 긋기 위해 line이라는 클래스 추가 */}
            <ul className="info  w-full mb-8 mt-8 text-gray-400 flex justify-around md:justify-evenly md:text-1xl ">
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
    <MovieInfoLoading />
  );
}

export default MovieInfo;
