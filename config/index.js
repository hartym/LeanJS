const DEBUG = !!process.env.DEBUG

// TODO simplify and document this.

export default {
  DEBUG,
  VERBOSE: DEBUG,
  ENV: (DEBUG ? 'development' : 'production'),
  PRODUCTION: !DEBUG,
  DEVELOPMENT: DEBUG,
  'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
  __DEV__: DEBUG,
  PORT: 3080
}
