import axios from "axios";
import { useState, useEffect } from "react";

const CreateMovie = () => {
  const [formData, setFormData] = useState({
    title: "",
    director: "",
    image: null,
    abstract: "",
  });

  const setFieldValue = (e) => {
    const { name, value } = e.target;
    if (name === "image")
      setFormData({ ...formData, image: e.target.files[0] });
    else setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container mt-4">
      <form>
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
              value={formData.image}
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
    </div>
  );
};

export default CreateMovie;
