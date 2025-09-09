import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <ul className="list-unstyled d-flex">
            <li className="me-3">
              <a href="/">Homepage</a>
            </li>
            <li className="me-3">
              <a href="/">Chi siamo</a>
            </li>
            <li className="me-3">
              <a href="/">Pagina prodotti</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
