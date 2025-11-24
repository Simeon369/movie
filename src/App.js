import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';

// Main App Component
const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Shawshank Redemption",
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency. The film tells the story of banker Andy Dufresne, who is sentenced to life in Shawshank State Penitentiary for the murders of his wife and her lover, despite his claims of innocence. Over the following two decades, he befriends a fellow prisoner, contraband smuggler Ellis 'Red' Redding, and becomes instrumental in a money-laundering operation led by the prison warden.",
      posterURL: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&h=600&fit=crop",
      rating: 5,
      trailerURL: "https://www.youtube.com/embed/6hB3S9bIaco"
    },
    {
      id: 2,
      title: "The Dark Knight",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice. With the help of allies Lt. Jim Gordon and DA Harvey Dent, Batman has been making a dent in organized crime in Gotham, but a new wave of terror led by the Joker throws the city into chaos.",
      posterURL: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop",
      rating: 5,
      trailerURL: "https://www.youtube.com/embed/EXeTwQWrcwY"
    },
    {
      id: 3,
      title: "Inception",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O. Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction: stealing valuable secrets from deep within the subconscious during the dream state when the mind is at its most vulnerable.",
      posterURL: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
      rating: 4,
      trailerURL: "https://www.youtube.com/embed/YoHD9XEInc0"
    }
  ]);

  const addMovie = (newMovie) => {
    setMovies(prevMovies => [...prevMovies, { ...newMovie, id: Date.now() }]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home movies={movies} onAddMovie={addMovie} />} />
        <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
      </Routes>
    </Router>
  );
};

export default App;