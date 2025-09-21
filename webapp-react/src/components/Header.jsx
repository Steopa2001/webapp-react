import style from '../modules/Header.module.css';

const Header = () => {
  return (
    <header className="container-fluid">
      <div className="row">
        <div className="col-12 d-flex align-items-center">
            <img className='logo-movies' src="../../public/img/logo-Movie.png" alt="logo" />
            <h2 className={`${style.title_style}`}>MY MOVIES</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
