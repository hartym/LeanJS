import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import Helmet from 'react-helmet'
import { Router, Route, IndexRoute, Link, IndexLink  } from 'react-router'

function Root({ children }) {
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

const Lorem = () => (
  <div className="col-lg-6">
    <h4>Subheading</h4>
    <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

    <h4>Subheading</h4>
    <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>

    <h4>Subheading</h4>
    <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>

    <h4>Subheading</h4>
    <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

    <h4>Subheading</h4>
    <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>

    <h4>Subheading</h4>
    <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
  </div>
)

const Index = () => (
  <div className="jumbotron">
    <h1 className="display-3">Welcome to LeanJS</h1>
    <p className="lead">
      LeanJS is a simple but opinionated starter kit which is, in our opinion,
      a good base for universal react applications.
    </p>
    <p><a className="btn btn-lg btn-success" href="#" role="button">Read the docs</a></p>
    <div className="row">
      <Lorem />
    </div>
  </div>
);

const About = () => (
  <div className="jumbotron">
    <h1 className="display-3">About</h1>
    <p className="lead">
      LeanJS is written by Romain Dorgueil, taking inspiration from the
      bazillion starter kits available out there.
    </p>
    <p><a className="btn btn-lg btn-success" href="#" role="button">Read the docs</a></p>
  </div>
);

export default function Application({store, history}) {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Root}>
          <IndexRoute component={Index}/>
          <Route path="about" component={About}/>
        </Route>
      </Router>
    </Provider>
  )
}
