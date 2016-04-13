export default function logStats (prefix, stats) {
  stats.toString({ colors: true }).split('\n').map((line) => {
    console.log('[' + prefix + '] ' + line)
  })
}
