import axios from "axios";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const Home = () => {
  //definisco variabili di stato
  const [movies, setMovies] = useState([]);

  //funzione che recupera i film attraverso la chiamata ajax
  const fetchMovies = () => {
    axios
      .get("http://localhost:3000/api/movies")
      .then((resp) => {
        setMovies(resp.data);
        console.log(resp.data);
      })
      .catch((err) => console.log(err));
  };

  //utilizzo useEffect per recuperare la lista dei film
  useEffect(fetchMovies, []);

  return (
    <div className="container my-5">
      <div className="row mb-4">
        <div className="col-12 text-center">
          <h1>Home</h1>
        </div>
      </div>
      <div className="row g-4">
        {movies.map((movie) => {
          return (
            <MovieCard key={movie.id} movie={movie}/>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
