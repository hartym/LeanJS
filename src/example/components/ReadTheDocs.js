import React from 'react'

class ReadTheDocs extends React.Component {
  render () {
    return (
      <a
        className="btn btn-lg btn-success"
        href="https://github.com/hartym/LeanJS/blob/master/README.rst"
        target="_blank" role="button"
      >
        <i className="fa fa-book" />{' '}Read the docs
      </a>
    )
  }
}

export default ReadTheDocs
