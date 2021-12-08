import { CSSProperties } from 'react';
import '../css/info.css';

function MovieInfoLoading() {
  const backLoadingCss: CSSProperties = {
    // 해상도 변환
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div>
      <div className="back relative w-full h-screen  bg-cover bg-gray-400  bg-center " style={backLoadingCss}>
        <main className="container h-screen pt-12 pb-12 relative flex flex-col items-center  justify-center text-center md:flex-row    ">
          <figure className="Poster flex-1 md:w-auto md:h-auto text-center ">
            <div className="spinner-border text-center m-auto text-white " role="status" />
          </figure>

          <section className="movieInfo flex-1 ">
            <div className="title mb-8 mt-8 text-white text-5xl whitespace-normal  font-bold  md:text-7xl"></div>

            <ul className="score  w-full h-full mb-8 mt-8 text-white flex justify-between lg:justify-around ">
              <div className="spinner-border text-center m-auto " role="status"></div>
            </ul>
            <ul className="info w-full mb-8 mt-8 text-gray-400 flex justify-around  md:justify-evenly md:text-1xl ">
              <div className="spinner-border text-center " role="status" />
              <li className="line">l</li>
              <div className="spinner-border text-center " role="status" />
              <li className="line">l</li>
              <div className="spinner-border text-center " role="status" />
            </ul>

            <article className="plot  text-white whitespace-normal">
              <div className="spinner-border text-center " role="status" />
            </article>
          </section>
        </main>
      </div>
    </div>
  );
}

export default MovieInfoLoading;
