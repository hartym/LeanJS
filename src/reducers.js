function foo(state = {}, action) {
  return {
    ...state,
    foo: 'bar',
  };
}

export default {
  foo
};
