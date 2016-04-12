/**
 * Reducers.
 *
 * @see redux
 */

/**
 * Foo reducer (that's an example, of course).
 */
function foo (state = {}, action) {
  return {
    ...state,
    foo: 'bar'
  }
}

// Exports
export default {
  foo
}
