import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import { useNavigate } from "react-router-dom";

const MovieDetail = () => {
  // recuperiamo l'id passato alla rotta
  const { id } = useParams();

  const navigate = useNavigate();

  // // definisco variabile di stato
  // const [movie, setMovie] = useState({
  //   reviews: [],
  // });

  const [movie, setMovie] = useState({});

  // definisco il metodo che mi effettua la chiamata ajax per recuperare il libro attraverso l'id
  const fetchMovie = () => {
    axios
      .get(`http://localhost:3000/api/movies/${id}`)
      .then((resp) => {
        setMovie(resp.data);
      })
      .catch(() => navigate(`/not-found`, {replace: true}));
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
              <h2>Recensioni utenti:</h2>
              {movie.reviews ? (
                movie.reviews.map((review) => {
                  return <ReviewCard key={review.id} review={review} />;
                })
              ) : (
                <h2>
                  <em>Non ci sono ancora recensioni per questo libro</em>
                </h2>
              )}
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
