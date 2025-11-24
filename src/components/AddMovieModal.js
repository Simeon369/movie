import { useState } from 'react';
import { X } from 'lucide-react';

const AddMovieModal = ({ onAddMovie, onClose }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 5,
    trailerURL: ""
  });

  const handleAddMovie = () => {
    if (newMovie.title && newMovie.description && newMovie.posterURL && newMovie.trailerURL) {
      onAddMovie(newMovie);
      setNewMovie({ title: "", description: "", posterURL: "", rating: 5, trailerURL: "" });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Add New Movie</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
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
            <label className="block text-sm font-medium text-gray-700 mb-2">Trailer URL</label>
            <input
              type="text"
              value={newMovie.trailerURL}
              onChange={(e) => setNewMovie({...newMovie, trailerURL: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter YouTube embed URL"
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
  );
};

export default AddMovieModal;