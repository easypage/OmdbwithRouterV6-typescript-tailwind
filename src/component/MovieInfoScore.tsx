import { OverlayTrigger, Tooltip } from 'react-bootstrap';

type MovieInfoScoreProps = {
  title: string;
  value: string;
};

function MovieInfoScoreLi({ title, value }: MovieInfoScoreProps) {
  const tooltip = (
    <Tooltip id="tooltip">
      <strong>{title}</strong>
    </Tooltip>
  );
  const img: string = `/img/${title}.png `;
  return (
    <OverlayTrigger placement="top" overlay={tooltip}>
      <li className="btn btn-outline-warning  flex items-center rounded-3xl cursor-default text-lg xl:text-3xl">
        <img src={img} className="w-6 mr-2 rounded-3xl " alt="" />
        <p> {value}</p>
      </li>
    </OverlayTrigger>
  );
}

export default MovieInfoScoreLi;
