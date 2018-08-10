import { injectGlobal } from 'styled-components'
injectGlobal`
  * { box-sizing: border-box; }
  body {
    margin: 0;
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
