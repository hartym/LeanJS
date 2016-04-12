import test from 'tape'
import routes from '../src/routes'

test('A passing test', (assert) => {
  assert.true(routes, 'routes.js loadable in tests.')
  assert.end()
})

