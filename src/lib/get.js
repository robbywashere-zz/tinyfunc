export const get = (obj, dotPath, def) => {
  const path = dotPath.split('.')
  return path.reduce((p, n) => (p || {})[n], obj) || def
}

export default function getter(path) {
  return props => get(props, path)
}
