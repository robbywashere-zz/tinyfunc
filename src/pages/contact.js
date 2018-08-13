import React from "react";
import styled from "styled-components";
import Home from './index';
import Link, { push } from 'gatsby-link';
import { Fixed, Modal, Heading } from 'rebass'; 
import { lifecycle } from 'recompose';


export default (props) => (
  <React.Fragment>
    <Home { ...props } />
    <ContactModal />
  </React.Fragment>
);



export class ContactModal  extends React.Component {

  hotKeys({ keyCode }){
    (keyCode===27) && push('/') 
  }

  componentDidMount(){
    document.addEventListener('keydown',this.hotKeys, false);
  }

  componentWillUnmount(){
    document.removeEventListener('keydown',this.hotKeys, false);
  }

  render() { 
    return (<div>
      <Fixed
        top={0}
        right={0}
        bottom={0}
        left={0}
      />
      <Modal width={256}>
        <Heading>Contact Me</Heading>
        <Link to='/'>Close</Link>
      </Modal>
    </div> 
    );
  }
}


export const query = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        title
        calendly
        github
      }
    }
  }
`
