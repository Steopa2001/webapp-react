import axios from "axios";
import { useState, useEffect, useContext } from "react";
import GlobalContext from "../contexts/globalContext";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";

const Home = () => {
  //definisco variabili di stato
  const [movies, setMovies] = useState([]);

  const {setIsLoading} = useContext(GlobalContext);

  //funzione che recupera i film attraverso la chiamata ajax
  const fetchMovies = () => {
    setIsLoading(true);
    axios
      .get("http://localhost:3000/api/movies")
      .then((resp) => {
        setMovies(resp.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  //utilizzo useEffect per recuperare la lista dei film
  useEffect(fetchMovies, []);

  return (
    <div className="container my-5">
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
