import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState  } from 'react';
import LanguageContext from '../context/languages';


export default function MovieCard({ movie, handleClickMovie, handleClickFav, isFavorite }) {
  const [isFav, setIsFav] = useState(isFavorite);
  const { lang } = useContext(LanguageContext);
  const handleFavClick = () => {
    handleClickFav();
    setIsFav(!isFav);
  };

  const langData = {
    en: {
      title: movie.title,
      description: movie.description,
      detailsButton: 'Go to details'
    },
    ar: {
      title: movie.title,
      description: movie.description,
      detailsButton: 'التفاصيل'
    },
    es: {
      title: movie.title,
      description: movie.description,
      detailsButton: 'Ir a detalles'
    }
  };



  return (
    <div className='card bg-light text-dark '>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        className='card-img-top'
        alt='...'
      />
      <div className='card-body '>
        <div className='d-flex justify-content-between align-items-center'>
          <h5 className='card-title'>{langData[lang].title}</h5>
          <span className='badge bg-secondary'>{movie.vote_average}</span>
        </div>
        <p className='card-text'>{langData[lang].description}</p>
        <button className='btn text-light rounded-5 bg-dark' onClick={handleClickMovie}>
          {langData[lang].detailsButton}
        </button>
        <FontAwesomeIcon
          icon={faStar}
          className={`movie-card-icon ${isFav ? 'text-warning' : 'text-light'}`}
          onClick={handleFavClick}
        />
      </div>
    </div>
  );
}
