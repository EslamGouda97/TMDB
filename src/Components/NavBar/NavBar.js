import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import LanguageContext from '../../context/languages';
import { navbarTranslations } from './NavLanguages';

function AppNavBar() {
  const favoritesCount = useSelector((state) => state.favorites.count);
  const { lang, setLang } = useContext(LanguageContext);

  const handleLangSelect = (eventKey) => {
    setLang(eventKey);
  };

  return (
    <Navbar bg="dark" variant="dark" className="sticky-top">
    <Navbar.Brand as={Link} to="/">
      <img
        src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
        height="30"
        width='154'
        className="d-inline-block align-top px-4"
        alt="Logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-nav" />
    <Navbar.Collapse id="navbar-nav">
      <Nav className="px-4">
        <Nav.Link as={Link} to="/movies">{navbarTranslations[lang].movies}</Nav.Link>
        <Nav.Link as={Link} to="/favorites">{navbarTranslations[lang].favorites} ({favoritesCount})</Nav.Link>
        <div > <NavDropdown title={navbarTranslations[lang].lang} className="lang-dropdown" onSelect={handleLangSelect}>
          <NavDropdown.Item eventKey="en">{navbarTranslations[lang].english}</NavDropdown.Item>
          <NavDropdown.Item eventKey="ar">{navbarTranslations[lang].arabic}</NavDropdown.Item>
          <NavDropdown.Item eventKey="es">{navbarTranslations[lang].spanish}</NavDropdown.Item>
        </NavDropdown></div>
        <Nav.Link as={Link} to="/register">{navbarTranslations[lang].register}</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>


  );
}

export default AppNavBar;