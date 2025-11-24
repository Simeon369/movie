import { useState } from 'react';
import Filter from './Filter';
import MovieList from './MovieList';
import AddMovieModal from './AddMovieModal';
import { Plus } from 'lucide-react';

const Home = ({ movies, onAddMovie }) => {
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const filteredMovies = movies.filter(movie => {
    const matchesTitle = movie.title.toLowerCase().includes(titleFilter.toLowerCase());
    const matchesRating = movie.rating >= ratingFilter;
    return matchesTitle && matchesRating;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">My Movie Collection</h1>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
          >
            <Plus size={20} />
            Add Movie
          </button>
        </div>

        <Filter
          titleFilter={titleFilter}
          setTitleFilter={setTitleFilter}
          ratingFilter={ratingFilter}
          setRatingFilter={setRatingFilter}
        />

        <MovieList movies={filteredMovies} />

        {showModal && (
          <AddMovieModal
            onAddMovie={onAddMovie}
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Home;