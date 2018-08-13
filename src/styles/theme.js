
export default { 
  breakpoints: [ '576px', '768px', '992px', '1200px' ],
  space: [ 0, 4, 8, 16, 32, 64, 128 ],
  fontSizes: [ 12, 14, 16, 20, 24, 32, 48, 64, 72, 96 ],
  fontWeights: { normal: 200, bold: 400 },
  fonts:
  { 
    sans: 'Helvetica, Arial, sans-serif',
    mono: 'Menlo, monospace' },
  colors:
  { 
    black: '#000',
    white: '#fff',
    darken: 'rgba(0, 0, 0, 0.25)',
    gray: '#eee',
    blue: '#0067ee',
    indigo: '#1000ee',
    violet: '#8700ee',
    fuchsia: '#ee00de',
    pink: '#ee0067',
    red: '#ee1000',
    orange: '#ee8700',
    yellow: '#deee00',
    lime: '#67ee00',
    green: '#00ee10',
    teal: '#00ee87',
    cyan: '#00deee',
    hnOrange: '#ff6600',
    hnBeige: '#f6f6ef',
    textLight: "#FFF",
    textDark: "#000",
    primary: "rebeccapurple",
    secondary: "#67ee00",
  },
  palette: {
    primary: "rebeccapurple",
    secondary: "#67ee00",
  },
  gradients: {
    pinkish:'linear-gradient(to bottom,#fb8ad4 0,#9221ff 100%)',
    grayish:'linear-gradient(to bottom,#dbdbdb 0,#4b4b4b 100%)',
    blueish:'linear-gradient(to top,#1d77ef 0,#81f3fd 100%)',
    greenish:'linear-gradient(to bottom,#b6f9a8 0,#0cd318 100%)',
    cyanish:'linear-gradient(to bottom,#00ffc3 0,#0ab0ff 100%)',
    peachish: 'linear-gradient(to bottom,#e3e2b1 0,#cf53af 100%)'
  },
  radii: [ 0, 2, 4 ],
  shadows:
  [ 'none',
    'inset 0 0 0 1px #eee',
    'inset 0 0 0 1px #eee, 0 0 4px #eee' ] 
}
