import React from 'react'

const LoremColumn = ({ className }) => (
  <div className={className}>
    <h4>Subheading</h4>
    <p>
      Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.
    </p>

    <h4>Subheading</h4>
    <p>
      Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus
      sit amet fermentum.
    </p>

    <h4>Subheading</h4>
    <p>
      Maecenas sed diam eget risus varius blandit sit amet non magna.
    </p>

    <h4>Subheading</h4>
    <p>
      Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.
    </p>

    <h4>Subheading</h4>
    <p>
      Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus
      sit amet fermentum.
    </p>

    <h4>Subheading</h4>
    <p>
      Maecenas sed diam eget risus varius blandit sit amet non magna.
    </p>
  </div>
)

LoremColumn.propTypes = {
  className: React.PropTypes.string
}

export default LoremColumn
