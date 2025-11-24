import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="block">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 cursor-pointer">
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
    </Link>
  );
};

export default MovieCard;