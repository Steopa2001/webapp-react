import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";

const Home = () => {

    //definisco variabili di stato
    const [movies, setMovies] = useState([]);

    //funzione che recupera i film attraverso la chiamata ajax
    const fetchMovies = () => {
        axios.get('http://localhost:3000/api/movies').then((resp) => {
            setMovies(resp.data);
            console.log(resp.data)
        }).catch((err) => console.log(err));
    };

    //utilizzo useEffect per recuperare la lista dei film
    useEffect(fetchMovies, []);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Home</h1>
        </div>
        </div>
        <div className="row">
            {movies.map((movie) => {
                return (
        <div className="col-12 col-md-6 col-lg-4" key={movie.id}>
            <div className="card-movie">
                <img src={`/img/${movie.image}`} className="cover-movie-card" alt={movie.title} />
                <div className="overlay">
                    <h2>{movie.title}</h2>
                    <p><em>{movie.director}</em></p>
                    <p>{movie.genre}</p>
                </div>
            </div>
        </div>
                )
            })}
        </div>
      </div>
  );
};

export default Home;
