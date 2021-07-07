import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

const Header: FC = () => (
  <header className="container-header">
    <nav className="nav-bar">
      <div className="logo"><Link to="/" /></div>
      <ul className="nav-bar-menu">
        <li className="menu-item cinema">
          <Link to="/">cinema</Link>
          <ul className="non-visible-wrap">
            <li><Link to="/">family</Link></li>
            <li><Link to="/">colecciones</Link></li>
            <li><Link to="/">top populares</Link></li>
            <li><Link to="/">todos los géneros</Link></li>
          </ul>
        </li>

        <li className="nav-bar menu-item">
          <p>gratis</p>
        </li>
        <li className="nav-bar menu-item">
          <p>suscripciones</p>
        </li>
      </ul>
      <div className="search-container">
        <div className="search-bar">
          <i className="fas fa-search" />
          <input className="search" placeholder="buscar" />
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
