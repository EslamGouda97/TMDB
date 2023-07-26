import { useEffect, useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MovieCard from '../../Shared/MovieCard';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../Config/config';
import { addFavoriteMovie, removeFavoriteMovie } from '../../store/Slices/favoritesCounter';
import ReactPaginate from 'react-paginate';
import LanguageContext from "../../context/languages";
import { langData } from './MoviesBodyLang';

export default function Movies() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.moviesList);
  const [moviesList, setMoviesList] = useState([]);
  const moviesPerPage = 9;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(moviesList.length / moviesPerPage);
  const [searchQuery, setSearchQuery] = useState('');
  const { lang } = useContext(LanguageContext);
  const [currentLang, setCurrentLang] = useState(lang);
  const [currentpageNo, setCurrentPageNo] = useState(1);

  const alertClickedMovie = (movie) => {
    console.log(movie);
    navigate(`/movieDetails/${movie.id}`, {

    });
  };

  const handleClickFav = (movie) => {
    if (favorites.some((m) => m.id === movie.id)) {
      dispatch(removeFavoriteMovie(movie));
    } else {
      dispatch(addFavoriteMovie(movie));
    }
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    setCurrentPageNo(selected + 1);
  };

  const handleSearch = () => {
    axiosInstance
      .get(`/search/movie?query=${searchQuery}&language=${currentLang}&page=${currentpageNo}`)
      .then((res) => {
        console.log(res.data.results);
        setMoviesList(res.data.results);
        setCurrentPage(0);
      })
      .catch((error) => console.log(error));
  };

  const moviesToDisplay = moviesList
    .filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(currentPage * moviesPerPage, (currentPage + 1) * moviesPerPage);

  useEffect(() => {
    setCurrentLang(lang);
    setCurrentPageNo(1);
  }, [lang]);

  useEffect(() => {
    if (searchQuery === '') {
      axiosInstance
        .get(`/movie/popular?language=${currentLang}&page=${currentpageNo}`)
        .then((res) => {
          console.log(res.data.results);
          setMoviesList(res.data.results);
          setCurrentPage(0);
        })
        .catch((error) => console.log(error));
    } else {
      handleSearch();
    }
  }, [currentLang, currentpageNo]);

  return (
    <>
     <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            
            <div className='input-group my-1'>
            <img
          src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
          height="100%"
          width='100%'
          className="d-inline-block align-top px-4 mb-5"
          alt="Logo"
        />
              <input
                type='text'
                className='form-control rounded-2'
                placeholder={langData[currentLang].searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                className='btn btn-outline-secondary btn-info rounded-3'
                type='button'
                onClick={handleSearch}
              >  {langData[currentLang].searchButton}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='row my-4'>
        {moviesToDisplay.map((movie) => {
          return (
            <div className='col-md-4 my-3' key={movie.id}>
              <MovieCard
                movie={movie}
                handleClickMovie={() => alertClickedMovie(movie)}
                handleClickFav={() => handleClickFav(movie)}
                isFavorite={favorites.some((m) => m.id === movie.id)}
              />
            </div>
          );
        })}
      </div>
      <div className='d-flex justify-content-center'>
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={''}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={'pagination'}
          activeClassName={'active'}
          previousClassName={'page-item'}
          nextClassName={'page-item'}
          breakClassName={'page-item'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousLinkClassName={'page-link'}
          nextLinkClassName={'page-link'}
          breakLinkClassName={'page-link'}
        />
      </div>
    </>
  );
}