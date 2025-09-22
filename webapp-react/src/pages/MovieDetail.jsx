import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MovieDetail = () => {
  // recuperiamo l'id passato alla rotta
  const { id } = useParams();

  // definisco variabile di stato
  const [movie, setMovie] = useState({
    reviews: [],
  });

  // definisco il metodo che mi effettua la chiamata ajax per recuperare il libro attraverso l'id
  const fetchMovie = () => {
    axios
      .get(`http://localhost:3000/api/movies/${id}`)
      .then((resp) => {
        setMovie(resp.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(fetchMovie, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="detail-card">
              <div className="d-flex">
                <div className="cover-image">
                  <img src={`/img/${movie.image}`} alt={movie.title} />
                </div>
                <div className="text-details">
                  <h1 className="title">{movie.title}</h1>
                  <p className="abstract">{movie.abstract}</p>
                  <p className="genre">{movie.genre}</p>
                  <p className="year">
                    <em>{movie.release_year}</em>
                  </p>
                  <h4 className="director">{movie.director}</h4>
                </div>
              </div>
            </div>
            <div className="reviews">
              {movie.reviews.map((review) => {
                return (
                  <div className="review-card" key={review.id}>
                    <h3>{review.name}</h3>
                    <p>{review.vote}</p>
                    <p>{review.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="to-home-btn">
        <Link className="square-btn-to-home" to="/" title="Torna alla homepage">
          <i className="fas fa-house"></i>
        </Link>
      </div>
    </>
  );
};

export default MovieDetail;
