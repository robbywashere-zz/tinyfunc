import { injectGlobal } from 'styled-components'
import './reset';
injectGlobal`
  * { box-sizing: border-box; }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    text-rendering: optimizeLegibility;
  }
  @font-face {
    font-family: "SF Mono";
    src: url("/fonts/sfmono-light-webfont.woff") format('woff');
  }
  @font-face {
    font-family: "Helvetica Neue";
    src: url("/fonts/helveticaneue-light.woff") format('woff');
  }
`
