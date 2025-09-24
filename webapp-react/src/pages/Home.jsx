import axios from "axios";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

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
      <Loader/>
      <div className="row mb-4">
        <div className="col-12 text-center lista-libri">
          <h1>Lista Film</h1>
        </div>
        <div className="col-12 text-end">
          <Link to="/movies/create" className="btn btn-primary">
            Aggiungi nuovo film
          </Link>
        </div>
      </div>
      <div className="row g-4">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default Home;
