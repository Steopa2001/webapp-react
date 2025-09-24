import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import NotFound from "./pages/NotFound";
import CreateMovie from "./pages/CreateMovie";
import GlobalContext from "./contexts/globalContext";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <GlobalContext.Provider value={{isLoading, setIsLoading}}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
            <Route path="/movies/create" element={<CreateMovie />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
