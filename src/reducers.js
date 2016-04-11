/**
 * Reducers.
 *
 * @see redux
 */


/**
 * Foo reducer (that's an example, of course).
 *
 * @param state
 * @param action
 * @returns {{foo: string}}
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
