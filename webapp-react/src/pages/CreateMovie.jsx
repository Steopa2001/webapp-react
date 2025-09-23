import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const CreateMovie = () => {
  const [formData, setFormData] = useState({
    title: "",
    director: "",
    image: null,
    abstract: "",
  });

  const navigate = useNavigate();

  const setFieldValue = (e) => {
    const { name, value } = e.target;
    if (name === "image")
      setFormData({ ...formData, image: e.target.files[0] });
    else setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:3000/api/movies`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((resp) => {
        console.log("Film inserito correttamente");
        navigate("/");
      });
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              onChange={setFieldValue}
              required
              value={formData.title}
              type="text"
              className="form-control"
              id="title"
              name="title"
              placeholder="Enter movie title"
            />
          </div>
          <div className="col">
            <label htmlFor="director" className="form-label">
              Director
            </label>
            <input
              onChange={setFieldValue}
              required
              value={formData.director}
              type="text"
              className="form-control"
              id="director"
              name="director"
              placeholder="Enter director name"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <label htmlFor="image" className="form-label">
              Image
            </label>
            <input
              onChange={setFieldValue}
              type="file"
              className="form-control"
              id="image"
              name="image"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <label htmlFor="abstract" className="form-label">
              Abstract
            </label>
            <textarea
              onChange={setFieldValue}
              required
              value={formData.abstract}
              className="form-control"
              id="abstract"
              name="abstract"
              rows="4"
              placeholder="Write a short abstract of the movie"
            />
          </div>
        </div>

        <div className="row">
          <div className="col text-end">
            <button type="submit" className="btn btn-primary">
              Save Movie
            </button>
          </div>
        </div>
      </form>
      <div className="to-home-btn">
        <Link className="square-btn-to-home" to="/" title="Torna alla homepage">
          <i className="fas fa-house"></i>
        </Link>
      </div>
    </div>
  );
};

export default CreateMovie;
