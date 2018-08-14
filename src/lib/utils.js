export const get = (obj, dotPath, def) => {
  const path = dotPath.split('.')
  return path.reduce((p, n) => (p || {})[n], obj) || def
}

export const g = path => props => get(props, path)
export const tcolor = name => ({ theme: { colors } }) => colors[name]
