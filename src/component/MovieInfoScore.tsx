import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

type MovieInfoScoreProps = {
  title: string;
  value: string;
};

function MovieInfoScoreLi({ title, value }: MovieInfoScoreProps) {
  const tooltip = (
    <Tooltip id="tooltip">
      <strong>{title}</strong>
      {/* 받아오기 */}
    </Tooltip>
  );
  const img: string = `/img/${title}.png `;
  return (
    <OverlayTrigger placement="top" overlay={tooltip}>
      <li className="movieDatabase btn btn-outline-warning rounded-3xl  cursor-default text-lg flex items-center">
        {/* 받아오기 */}
        <img src={img} className="w-6 rounded-3xl mr-2" alt="" />
        <p> {value}</p>
      </li>
    </OverlayTrigger>
  );
}

export default MovieInfoScoreLi;
