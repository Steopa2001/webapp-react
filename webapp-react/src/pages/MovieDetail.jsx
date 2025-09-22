import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const MovieDetail = () => {
  // recuperiamo l'id passato alla rotta
  const { id } = useParams();

  // definisco variabile di stato
  const [movie, setMovie] = useState({});

  // definisco il metodo che mi effettua la chiamata ajax per recuperare il libro attraverso l'id
  const fetchMovie = () => {
    axios.get(`http://localhost:3000/api/movies/${id}`).then((resp) => {
      setMovie(resp.data);
    }).catch(err => console.log(err));
  }

  useEffect(fetchMovie, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="detail-card">
            <div className="d-flex">
              <div className="cover-image">
                <img src={`/img/${movie.image}`} alt={movie.title} />
              </div>
              <div className="text-details">
                <h1>{movie.title}</h1>
                <p>{movie.abstract}</p>
                <p>{movie.genre}</p>
                <p>{movie.release_year}</p>
                <p>{movie.director}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
