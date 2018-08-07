import React from 'react';
import Link from 'gatsby-link';
import { Base, Heading } from 'rebass';
import styled from 'styled-components';
import { themeGet, bg, color } from 'styled-system';
import axios from 'axios';
import timeago from 'timeago.js';
import { lifecycle, withState } from 'recompose';
import voteArrow from '../img/grayarrow.gif';
import { lighten } from 'polished';
import url from 'url';


const tcolor = (name)=>({ theme: { colors }})=>colors[name];

const lightenUp = (amt)=>(colorFn)=>(props)=>lighten(amt,colorFn(props));

const HNHeading = styled.h3`
  margin-top: 0;
  background-color: ${tcolor('hnOrange')};
  color: ${tcolor('black')};
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
  background-color: ${tcolor('hnBeige')};
`

const Article = styled.article``;

const StoryTitle = styled.div`
  color: ${ ({ rank })=> (rank>1) ? 'gray': 'black' }
  font-size: ${ ({ rank })=> (rank>1) ? '1em': '1.5em' }
`;


const StorySub = styled.div`
  padding: 5px 5px 5px 0;
  font-size: 0.75em;
  color: ${lightenUp(0.5)(tcolor('black'))};
`;


const VArrow = styled.img.attrs({
  src: voteArrow
})`
  width: 18px;
  height: 12px;
  padding: 0 3px 0 3px;
`


const Story = ({ title, score, host, age, rank, time, id, descendants, by })=>{
  return (
    <div>
      <StoryTitle rank={ rank }>
        <VArrow />
        { title }
        <small> ({ host}) </small>
      </StoryTitle>
      <StorySub> 
        { `${score} points by ${by} ${age} | hide | ${descendants} comments ` }
      </StorySub>
      <span> </span>
    </div>
  )
}



const withHNStories = lifecycle({
  state: { stories: [] },
  async componentDidMount(){
    const hnapi = 'https://hacker-news.firebaseio.com/v0/';
    const { data } = await axios.get(`${hnapi}topstories.json`);
    data.length = 10;

    const stories = (await Promise.all(data.map(id => axios.get(`${hnapi}item/${id}.json`).then(r=>r.data)))).map(story => {
      const { time, url: storyUrl  } = story;
      const now = new Date().getTime();
      story.age = timeago(now).format(time * 1000);
      story.host = url.parse(storyUrl).host;
      return story;
    })

    this.setState({ stories });
  }
});


const Stories = withHNStories(({ stories, myStory = [] }) =>(
    <div>
    { [myStory, ...stories].map((story,i) => <Story key={ i } rank={ i+1 } { ...story }/> ) }
      </div>
));



const Hackernews = ({ children, myStory })=>{
  return (
    <Container>
      <HNHeading>{ children }</HNHeading>
      <Stories myStory={ myStory } />
    </Container>

  )
}


export default Hackernews;
