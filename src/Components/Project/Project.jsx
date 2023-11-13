import "./Porject.css";
import Movies from "../PhotoPorject/React App - Google Chrome 10_28_2023 1_13_24 PM.png";
import PhotoMovies1 from "../PhotoPorject/1.png";
import PhotoMovies2 from "../PhotoPorject/2.png";
import PhotoMovies3 from "../PhotoPorject/3.png";
import PhotoMovies4 from "../PhotoPorject/4.png";
import PhotoMovies5 from "../PhotoPorject/5.png";
import PhotoMovies6 from "../PhotoPorject/6.png";
import PhotoMovies7 from "../PhotoPorject/7.png";
import PhotoMovies8 from "../PhotoPorject/8.png";
import PhotoMovies9 from "../PhotoPorject/9.png";
import { useState } from "react";

export default function Project() {
  const [shohw , setshohw] = useState('d-none')
  return (
    <div>
      <div className="container cards position-relative">
        <div className="row services">
          <div className="col-md-4 col-12 content content-1 rounded-3 rounded-3">
            <button onClick={()=>(setshohw('d-block'))} className="rounded-3">
              <img className="w-100" src={Movies} alt="000" />
            </button>

            <h2>Noxe Movies</h2>
            <p>HTML,Bootstrap,React.js</p>
            <div>
              <div className="showCode">
                <a href="https://github.com/A7medIbra56/Noxe.git">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://a7medibra56.github.io/Noxe/">
                  <i className="fa-solid fa-eye"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 content content-1 rounded-3">
            <i className="fa-solid fa-diagram-project"></i>

            <h2>Weather-API</h2>
            <p>HTML,css,javascript</p>
            <div>
              <div className="showCode">
                <a href="https://github.com/A7medIbra56/Weather-API.git">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://a7medibra56.github.io/Weather-API/">
                  <i className="fa-solid fa-eye"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 content content-1 rounded-3">
            <i className="fa-solid fa-diagram-project"></i>

            <h2>Crud-system-2</h2>
            <p>HTML,css,javascript</p>
            <div>
              <div className="showCode">
                <a href="https://github.com/A7medIbra56/Crud-system-2.git">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://a7medibra56.github.io/Crud-system-2/">
                  <i className="fa-solid fa-eye"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 content content-1 rounded-3">
            <i className="fa-solid fa-diagram-project"></i>

            <h2>MOVIES-Api</h2>
            <p>HTML,css,javascript</p>
            <div>
              <div className="showCode">
                <a href="https://github.com/A7medIbra56/MoviseApi.git">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://a7medibra56.github.io/MoviseApi/">
                  <i className="fa-solid fa-eye"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 content content-1 rounded-3">
            <i className="fa-solid fa-diagram-project"></i>

            <h2>BookMarker</h2>
            <p>HTML,css,javascript</p>
            <div>
              <div className="showCode">
                <a href="https://github.com/A7medIbra56/BookMarker.git">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://a7medibra56.github.io/BookMarker/">
                  <i className="fa-solid fa-eye"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 content content-1 rounded-3">
            <i className="fa-solid fa-diagram-project"></i>

            <h2>Simone</h2>
            <p>HTML,css,javascript</p>
            <div>
              <div className="showCode">
                <a href="https://github.com/A7medIbra56/Simone.git">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://a7medibra56.github.io/Simone/">
                  <i className="fa-solid fa-eye"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    <div className={`slide position-fixed top-0 start-0 bottom-0 end-0 ${shohw} `}>
    <div className=" mx-auto">
<h4 className="t text-center"><button onClick={()=>(setshohw('d-none'))} type="button" className="btn-close text-bg-danger" aria-label="Close"></button></h4>
      </div>
    <div id="carouselExample" className="carousel  container ">
          <div className="carousel-inner">
        
            <div className="carousel-item active">
              <img src={PhotoMovies1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item active">
              <img src={PhotoMovies2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item active">
              <img src={PhotoMovies3} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item active">
              <img src={PhotoMovies4} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item active">
              <img src={PhotoMovies5} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item active">
              <img src={PhotoMovies6} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item active">
              <img src={PhotoMovies7} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={PhotoMovies8} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={PhotoMovies9} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

    </div>
       
     
    </div>
  );
}
