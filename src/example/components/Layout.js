import React from 'react'
import { Link, IndexLink } from 'react-router'

class Layout extends React.Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-fixed-top navbar-light bg-faded'>
          <div className='container'>
            <IndexLink className='navbar-brand' to='/'>
              LeanJS
            </IndexLink>
            <ul className='nav navbar-nav'>
              <li className='nav-item'>
                <IndexLink className='nav-link' to='/' activeClassName='active'>
                  Home
                </IndexLink>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/about' activeClassName='active'>
                  About
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className='container'>
          <div className='row'>
            {this.props.children}
          </div>
        </div>

        <hr />

        <footer>
          <p>
            This is a sample project that can be used as a base. Each libraries used or re-used is subject to its own
            license, the glue is beerware.
          </p>
        </footer>
      </div>
    )
  }
}

Layout.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ])
};

Layout.defaultProps = {
  children: []
};

export default Layout
