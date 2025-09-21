import { BrowserRouter, Router, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router>
          <Route />
        </Router>
      </BrowserRouter>
    </>
  );
}

export default App;
