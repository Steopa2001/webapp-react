import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import GlobalContext from "../contexts/globalContext";
import { useContext } from "react";
import Loader from "../components/Loader";

const Layout = () => {

  const { isLoading } = useContext(GlobalContext);
  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
      {isLoading && <Loader/>}
    </>
  );
};

export default Layout;
