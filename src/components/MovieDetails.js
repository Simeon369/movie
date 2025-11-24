import { useParams, useNavigate } from 'react-router-dom';
import { Star, ArrowLeft } from 'lucide-react';

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Movie Not Found</h2>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors mb-6"
        >
          <ArrowLeft size={20} />
          Back to Movies
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img 
                src={movie.posterURL} 
                alt={movie.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">{movie.title}</h1>
              
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    className={i < movie.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                  />
                ))}
                <span className="ml-2 text-lg text-gray-600">({movie.rating}/5)</span>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Description</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{movie.description}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Trailer</h2>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={movie.trailerURL}
                    title={`${movie.title} Trailer`}
                    className="w-full h-64 md:h-96 rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;