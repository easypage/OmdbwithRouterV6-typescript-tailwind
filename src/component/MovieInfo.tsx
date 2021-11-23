import React, { useEffect } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import getOmdbmovie from '../Api/getOmdbmovie';
import '../css/info.css';
import { fetchMovie } from '../module/redux/reducer/movieInfoReducer';

function MovieInfo() {
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
  const dispatch = useDispatch();
  const tooltip = (
    <Tooltip id="tooltip">
      <strong>Internet Movie Database</strong>
    </Tooltip>
  );

  return (
    <div className="back w-full relative bg-cover bg-gray-400  bg-center ">
      <main className="container relative flex flex-col items-center text-center ">
        <figure className="Poster rounded-3xl .shadow-xl w-40 h-56 mt-4">
          <img className="m-auto " src="https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX150.jpg" alt="" />
        </figure>
        <section className="movieInfo">
          <div className="title text-white text-5xl whitespace-normal font-bold mb-8 mt-8">Frozen</div>

          {/* map 표현 하기 */}
          <ul className="score text-white flex justify-between w-full h-full">
            <OverlayTrigger placement="top" overlay={tooltip}>
              <li className="movieDatabase btn btn-outline-warning rounded-3xl  cursor-default text-lg flex items-center">
                <img src="img/Internet Movie Database.png" className="w-6 rounded-3xl mr-2" alt="" />
                <p> 7.4/10</p>
              </li>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip}>
              <li className="tomatoes btn btn-outline-warning rounded-3xl cursor-default text-lg   flex items-center">
                <img src="img/Rotten Tomatoes.png" className="w-6 rounded-3xl mr-2" alt="" />
                <p> 90%</p>
              </li>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={tooltip}>
              <li className="metacritic btn btn-outline-warning rounded-3xl cursor-default text-lg flex items-center">
                <img src="img/Metacritic.png" className="w-6 rounded-3xl mr-2" alt="" />
                <p> 75/100</p>
              </li>
            </OverlayTrigger>
          </ul>
          <br />
          <br />
          {/* FLEX AROUND로 확실한 간격마다 줄을 긋기 위해 line이라는 클래스 추가 */}
          {/* map으로 처리가능 */}
          <ul className="info  w-full text-gray-400 flex justify-around">
            <li className="type uppercase">movie</li>
            <li className="line">l</li>
            <li className="released"> 27 Nov 2013</li>
            <li className="line">l</li>
            <li className="runTime">102 min</li>
          </ul>
          <article className="plot text-white whitespace-normal">
            <br />
            <br />
            Fearless optimist Anna teams up with rugged mountain man Kristoff and his loyal reindeer Sven and sets off on an epic journey to find her sister
            Elsa, whose icy powers have trapped the kingdom of Arendelle in eternal winter. Encountering Everest-like conditions, mystical trolls and a
            hilarious snowman named Olaf, Anna and Kristoff battle the elements in a race to save the kingdom. From the outside Elsa looks poised, regal and
            reserved, but in reality she lives in fear as she wrestles with a mighty secret: she was born with the power to create ice and snow. It's a
            beautiful ability, but also extremely dangerous. Haunted by the moment her magic nearly killed her younger sister Anna, Elsa has isolated herself,
            spending every waking minute trying to suppress her growing powers. Her mounting emotions trigger the magic, accidentally setting off an eternal
            winter that she can't stop. She fears she's becoming a monster and that no one, not even her sister, can help her.
            <br />
          </article>
        </section>
      </main>
      a
    </div>
  );
}

export default MovieInfo;
