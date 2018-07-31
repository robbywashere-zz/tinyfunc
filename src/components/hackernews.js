import React from 'react';
import Link from 'gatsby-link';
import { Base, Heading } from 'rebass';
import styled from 'styled-components';
import { color } from 'styled-system';



const H = styled.h3`
  background-color: ${({ theme: { colors }})=>colors.hnOrange};
  color: #FFF;
  padding: 1em;
`;



export default H;
