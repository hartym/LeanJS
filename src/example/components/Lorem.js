import React from 'react'
import LoremColumn from './LoremColumn'

class Lorem extends React.Component {
  render () {
    return (
      <div className="row">
        <LoremColumn className="col-lg-6" />
        <LoremColumn className="col-lg-6" />
      </div>
    )
  }
}

export default Lorem
