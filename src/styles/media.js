import { generateMedia } from 'styled-media-query';
import theme from './theme';

const [ small,medium,large, xlarge ] = theme.breakpoints;

export default generateMedia({
  small,
  medium,
  large,
  xlarge
});
