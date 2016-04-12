import React from 'react'
import Lorem from './Lorem'

const Home = () => (
  <div>
    <div className="jumbotron">
      <h1 className="display-3">Welcome to LeanJS</h1>
      <p className="lead">
        LeanJS is a simple but opinionated starter kit which is, in our opinion,
        a good base for universal react applications.
      </p>
      <p>
        <a className="btn btn-lg btn-success"
          href="https://github.com/hartym/LeanJS/blob/master/README.rst"
          target="_blank" role="button"
        >
          Read the docs
        </a>
      </p>
    </div>
    <Lorem />
  </div>
)

export default Home
