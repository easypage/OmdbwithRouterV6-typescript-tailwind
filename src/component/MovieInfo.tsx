import React, { useEffect } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useParams } from 'react-router';
import '../css/info.css';

function MovieInfo() {
  useEffect(() => {
    console.log(params);

    return () => {};
  }, []);
  const params = useParams();

  const tooltip = (
    <Tooltip id="tooltip">
      <strong>Internet Movie Database</strong>
    </Tooltip>
  );

  return (
    <div className="back w-full relative bg-cover bg-gray-400 h-96 bg-center top-0">
      <div className="container relative top-8 flex flex-col items-center text-center">
        <div className="main">
          <img
            className="m-auto rounded-3xl .shadow-xl w-40 h-56"
            src="https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX150.jpg"
            alt=""
          />
        </div>
        <div className="movieInfo">
          <div className="title text-white text-5xl whitespace-normal font-bold mb-8 mt-8">Frozen</div>
          <div className="score text-white flex justify-between w-full ">
            {/* map 표현 하기 */}
            <OverlayTrigger placement="top" overlay={tooltip}>
              <div className="movieDatabase btn btn-outline-warning rounded-3xl  cursor-default text-lg">I 7.84</div>
            </OverlayTrigger>
            <div className="tomatoes btn btn-outline-warning rounded-3xl cursor-default text-lg ">R 9.0</div>
            <div className="metacritic btn btn-outline-warning rounded-3xl cursor-default text-lg">M 10.0</div>
            <div className="metascore btn btn-outline-warning rounded-3xl cursor-default text-lg">M 9.0</div>
          </div>
          <br />
          <br />
          {/* FLEX AROUND로 확실한 간격마다 줄을 긋기 위해 line이라는 클래스 추가 */}
          <div className="info  w-full text-gray-400 flex justify-around">
            <div className=" type uppercase">movie</div>
            <div className="line">l</div>
            <div className="released"> 27 Nov 2013</div>
            <div className="line">l</div>
            <div className="runTime">102 min</div>
          </div>
          <div className="plot text-white whitespace-normal">
            <br />
            <br />
            When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up
            with a mountain man, his playful reindeer, and a snowman to change the weather condi
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
