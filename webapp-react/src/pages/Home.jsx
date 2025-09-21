import React from "react";

const Home = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Home</h1>
        </div>
        </div>
        <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card-movie">
                <img src="../../public/img/inception.jpg" className="cover-movie-card" alt="film" />
                <div className="overlay">
                    <h2>Titolo movies</h2>
                    <p>Autore</p>
                </div>
            </div>
        </div>
        </div>
      </div>
  );
};

export default Home;
