import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import axiosInstance from "../../Config/config";
import Footer from "../../Components/Footer/Footer";
import { langData } from "./MovieDetailsLang";
import LanguageContext from '../../context/languages';

export default function MovieDetails() {
  const [MovieDetails, setMovieDetails] = useState({});
  const params = useParams();
  const { lang } = useContext(LanguageContext);


  useEffect(() => {
    axiosInstance
      .get(`/movie/${params.id}`)
      .then((res) => setMovieDetails(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="card bg-dark text-white mb-3">
    <div className="row g-0">
      <div className="col-md-6">
        <img src={`https://image.tmdb.org/t/p/w500/${MovieDetails.backdrop_path}`} alt="..." className="card-img" />
      </div>
      <div className="col-md-6">
        <div className="card-body">
          <h2 className="card-title">{MovieDetails.title}</h2>
          <p className="card-text">{MovieDetails.overview}</p>
          <hr className="bg-white" />
          <div className="d-flex justify-content-between py-5">
              <h5 cls className="card-subtitle mb-2 ml-2">{langData[lang].releaseDate}: {MovieDetails.release_date}</h5>
              <h5 className="card-subtitle mb-2 ml-2 text-primary">{langData[lang].rating}: {MovieDetails.vote_average} {langData[lang].from}</h5>
              <h5 className="card-subtitle mb-2 ml-2 text-danger">{langData[lang].votes}: {MovieDetails.vote_count} {langData[lang].person}</h5>
            </div>
  
        </div>
      </div>
    </div>
    <Footer/>
  </div>
);
}
