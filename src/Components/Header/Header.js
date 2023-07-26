import React from 'react';

function Header() {
  return (
    <header className="header" >
      <div className="overlay" ></div>
      <div className="container" >
        <div className="row">
          <div className="col-md-12">

        <img
          src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
          height="100%"
          width='100%'
          className="d-inline-block align-top px-4"
          alt="Logo"
        />
            <form className="header__form mt-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control header__input"
                  placeholder="Search for movies..."
                  aria-label="Search for movies"
                  aria-describedby="button-addon2"
                />
                <button className="btn btn-primary" type="button" id="button-addon2">Search</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;