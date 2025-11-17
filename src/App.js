import { useState } from 'react';
import { Star, Plus, X } from 'lucide-react';

// MovieCard Component
const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <img 
        src={movie.posterURL} 
        alt={movie.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{movie.title}</h3>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < movie.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
            />
          ))}
          <span className="ml-2 text-sm text-gray-600">({movie.rating}/5)</span>
        </div>
        <p className="text-gray-600 text-sm line-clamp-3">{movie.description}</p>
      </div>
    </div>
  );
};

// Filter Component
const Filter = ({ titleFilter, setTitleFilter, ratingFilter, setRatingFilter }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Filter Movies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Search by Title
          </label>
          <input
            type="text"
            value={titleFilter}
            onChange={(e) => setTitleFilter(e.target.value)}
            placeholder="Enter movie title..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Minimum Rating
          </label>
          <select
            value={ratingFilter}
            onChange={(e) => setRatingFilter(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value={0}>All Ratings</option>
            <option value={1}>1+ Stars</option>
            <option value={2}>2+ Stars</option>
            <option value={3}>3+ Stars</option>
            <option value={4}>4+ Stars</option>
            <option value={5}>5 Stars</option>
          </select>
        </div>
      </div>
    </div>
  );
};

// MovieList Component
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

// Main App Component
const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Shawshank Redemption",
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterURL: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&h=600&fit=crop",
      rating: 5
    },
    {
      id: 2,
      title: "The Dark Knight",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest tests.",
      posterURL: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop",
      rating: 5
    },
    {
      id: 3,
      title: "Inception",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea.",
      posterURL: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
      rating: 4
    }
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 5
  });

  const filteredMovies = movies.filter(movie => {
    const matchesTitle = movie.title.toLowerCase().includes(titleFilter.toLowerCase());
    const matchesRating = movie.rating >= ratingFilter;
    return matchesTitle && matchesRating;
  });

  const handleAddMovie = () => {
    if (newMovie.title && newMovie.description && newMovie.posterURL) {
      setMovies([...movies, { ...newMovie, id: Date.now() }]);
      setNewMovie({ title: "", description: "", posterURL: "", rating: 5 });
      setShowModal(false);
    }
  };

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
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">Add New Movie</h2>
                <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    value={newMovie.title}
                    onChange={(e) => setNewMovie({...newMovie, title: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter movie title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    value={newMovie.description}
                    onChange={(e) => setNewMovie({...newMovie, description: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter movie description"
                    rows="3"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Poster URL</label>
                  <input
                    type="text"
                    value={newMovie.posterURL}
                    onChange={(e) => setNewMovie({...newMovie, posterURL: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter poster URL"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                  <select
                    value={newMovie.rating}
                    onChange={(e) => setNewMovie({...newMovie, rating: Number(e.target.value)})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value={1}>1 Star</option>
                    <option value={2}>2 Stars</option>
                    <option value={3}>3 Stars</option>
                    <option value={4}>4 Stars</option>
                    <option value={5}>5 Stars</option>
                  </select>
                </div>

                <button
                  onClick={handleAddMovie}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors font-medium"
                >
                  Add Movie
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;