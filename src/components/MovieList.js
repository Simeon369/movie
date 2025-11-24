import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  if (movies.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No movies found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;