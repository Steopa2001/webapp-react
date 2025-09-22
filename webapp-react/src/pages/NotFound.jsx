import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-100 d-flex flex-column align-items-center justify-content-center my-4">
      <h2>Pagina non trovata</h2>
      <p className="my-3">Ci dispiace ma la pagina cercata non esiste</p>
      <Link className="btn-main" to="/">
        Torna alla homepage
      </Link>
    </div>
  );
};

export default NotFound;
