import React from 'react'
import { Link, IndexLink } from 'react-router'

export default function Layout({ children }) {
  return (
    <div>
      <nav className="navbar navbar-fixed-top navbar-light bg-faded">
        <div className="container">
          <a className="navbar-brand" href="#">LeanJS</a>
          <ul className="nav navbar-nav">
            <li className="nav-item"><IndexLink className="nav-link" to="/" activeClassName="active">index</IndexLink></li>
            <li className="nav-item"><Link className="nav-link" to="/about" activeClassName="active">about</Link></li>
          </ul>
        </div>
      </nav>

      <div className="container">
        <div className="row row-offcanvas row-offcanvas-right">
          {children}
        </div>
      </div>

      <hr />

      <footer>
        <p>This is a sample project that can be used as a base. Each libraries used or re-used is subject to its own license, the glue is beerware.</p>
      </footer>
    </div>
  );
}
