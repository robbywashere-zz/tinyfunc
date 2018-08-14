import { injectGlobal } from 'styled-components'
import { g } from '../lib/utils'
import theme from '../styles/theme'
injectGlobal`
  * { box-sizing: border-box; }
  html {
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    margin: 0;
  }
  @font-face {
    font-family: "SF Mono";
    src: url("/fonts/sfmono-light-webfont.woff") format('woff');
  }
  @font-face {
    font-family: "Helvetica Neue";
    font-weight: 200;
    src: url("/fonts/helveticaneue-light.woff") format('woff');
  }
  @font-face {
    font-family: "Helvetica Neue";
    font-weight: 400;
    src: url("/fonts/helveticaneue-medium.woff") format('woff');
  }
  @font-face {
    font-family: "Helvetica Neue";
    font-weight: bold;
    src: url("/fonts/helveticaneue-bold.woff") format('woff');
  }
`
