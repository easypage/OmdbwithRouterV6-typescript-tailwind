import React, { CSSProperties, useEffect } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import '../css/info.css';
import { fetchMovie, MovieData } from '../module/redux/reducer/movieInfoReducer';
import MovieInfoScore from './MovieInfoScore';

type MovieInfoProps = {
  loading: boolean;
  error: string;
  movie: MovieData;
};

function MovieInfo({ loading, error, movie }: MovieInfoProps) {
  useEffect(() => {
    if (ttid != undefined) {
      dispatch(fetchMovie(ttid));
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
    backgroundImage: `url(${movie.poster.replace('300.jpg', '1900.jpg')})`,
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="back w-full relative bg-cover bg-gray-400  bg-center " style={backCss}>
      <main className="container relative flex flex-col items-center text-center ">
        {/* 포스터 */}
        <figure className="Poster rounded-3xl .shadow-xl w-40 h-56 mt-4">
          <img className="m-auto " src={movie.poster} alt="" />
        </figure>
        <section className="movieInfo">
          {/* 제목 */}
          <div className="title text-white text-5xl whitespace-normal font-bold mb-8 mt-8">{movie.title}</div>

          {/* map 표현 하기 */}
          <ul className="score text-white flex justify-between w-full h-full">
            {movie.score.map((score, index) => (
              <MovieInfoScore title={score.Source} value={score.Value} key={index} />
            ))}
          </ul>
          <br />
          <br />
          {/* FLEX AROUND로 확실한 간격마다 줄을 긋기 위해 line이라는 클래스 추가 */}
          {/* 데이터를 리스트로 처리 가능하나 보수를 생각해보니 굳이 데이터를 가공안하고 처리 하겠습니다.*/}
          <ul className="info  w-full text-gray-400 flex justify-around">
            <li className="type uppercase">{movie.type}</li>
            <li className="line">l</li>
            <li className="released"> {movie.released}</li>
            <li className="line">l</li>
            <li className="runTime">{movie.runTime}</li>
          </ul>

          <article className="plot text-white whitespace-normal">
            <br />
            <br />
            {movie.plot}
            <br />
          </article>
        </section>
      </main>
      a
    </div>
  );
}

export default MovieInfo;
