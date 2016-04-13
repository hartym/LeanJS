import React from 'react'
import ReadTheDocs from './ReadTheDocs'

const About = () => (
  <div className="jumbotron">
    <h1 className="display-3">About</h1>
    <p className="lead">
      LeanJS is written by Romain Dorgueil, taking inspiration from the bazillion starter kits
      available out there.
    </p>
    <p className="lead">
      «Same Same but Different.»
    </p>
    <p className="lead">
      Leaner, mostly.
    </p>
    <p>
      <ReadTheDocs />
    </p>
  </div>
)

export default About
