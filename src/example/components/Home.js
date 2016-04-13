import React from 'react'
import Lorem from './Lorem'
import ReadTheDocs from './ReadTheDocs'

class Home extends React.Component {
  render () {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-3">Welcome to LeanJS</h1>
          <p className="lead">
            LeanJS is a simple but opinionated starter kit which is, in our opinion,
            a good base for universal react applications.
          </p>
          <p>
            <ReadTheDocs />
          </p>
        </div>
        <Lorem />
      </div>
    )
  }
}

export default Home

