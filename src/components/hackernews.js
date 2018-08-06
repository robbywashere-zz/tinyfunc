import React from 'react';
import Link from 'gatsby-link';
import { Base, Heading } from 'rebass';
import styled from 'styled-components';
import { color } from 'styled-system';
import axios from 'axios';
import timeago from 'timeago.js';


const HNHeading = styled.h3`
  background-color: ${({ theme: { colors }})=>colors.hnOrange};
  color: black;
  padding: 0.25em;
  font-family: Verdana, Geneva, sans-serif;
  line-height: 15px;
  width: 100%;
  &:before {
    content: "Y";
    padding: 10px;
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-right: 10px;
    text-align: center;
    color: #FFF;
    border: 1px solid white;
  }
`;

const Container = styled.div`
  width: 100%;
`

const Article = styled.article``;



class Stories extends React.Component {

  state = {
    stories: []
  }

  async componentDidMount(){
    const hnapi = 'https://hacker-news.firebaseio.com/v0/';
    const { data } = await axios.get(`${hnapi}topstories.json`);
    data.length = 10;
    const stories = await Promise.all(data.map(id => axios.get(`${hnapi}item/${id}.json`).then(r=>r.data)));

    this.setState({ stories });
  }

  static Story({ title, score, rank, time, id, descendants, by }){
    const now = new Date().getTime();
    const age = timeago(now).format(time * 1000);
    return (
      <div>
        <div>{ rank }. { title } </div>
        <span> points: { score} </span>
        <span>{ age } </span>
        <span> by: { by } </span>
        <span> comments: { descendants } </span>
      </div>
    )
  }

  render(){
    const { stories }  = this.state;
    const { Story } = this.constructor;
    return (
      <div>
        { stories.map((story,i) => <Story key={ i } rank={ i+1 } { ...story }/> ) }
      </div>
    )
  }
}

const Hackernews = ({ children })=>{
  return (
    <Container>
      <HNHeading>{ children }</HNHeading>
      <Stories />
    </Container>

  )
}


export default Hackernews;
