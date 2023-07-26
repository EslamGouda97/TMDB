import { useSelector, useDispatch } from 'react-redux';
import { removeFavoriteMovie } from '../../store/Slices/favoritesCounter';
import MovieCard from '../../Shared/MovieCard';

export default function Favorites() {
  const favoritesList = useSelector((state) => state.favorites.moviesList);
  const dispatch = useDispatch();

  const handleRemoveFav = (movie) => {
    dispatch(removeFavoriteMovie(movie));
  };

  return (
    <div className='row my-4'>
      {favoritesList.length > 0 ? (
        favoritesList.map((movie) => {
          return (
            <div className='col-md-4 my-3' key={movie.id}>
              <MovieCard
                movie={movie}
                handleClickFav={() => handleRemoveFav(movie)}
                isFavorite={true}
              />
            </div>
          );
        })
      ) : (
        <div className='col-md-12 my-3 text-center'>
          <h2 className='text-dark'>No favorite movies yet.</h2>
        </div>
      )}
    </div>
  );
}