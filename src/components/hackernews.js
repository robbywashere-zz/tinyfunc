import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { themeGet, bg, color } from 'styled-system';
import axios from 'axios';
import timeago from 'timeago.js';
import { lifecycle, withProps, mapProps, compose, withState } from 'recompose';
import voteArrow from '../img/grayarrow.gif';
import { lighten } from 'polished';
import url from 'url';
import STORIES from './stories-fixture.json';
import tcolor from '../lib/tcolor';



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

const StoryRanked = styled.div` 
  color: black;
  font-size: 1.5em;
  &:nth-child(n+2){
    color: gray;
    font-size: 1em;
  }
`
const Story = ({ title, score, host, age, rank, time, id, descendants, by })=>(
  <StoryRanked>
    { rank }.
    <VArrow />
    { title }
    <small> ({ host}) </small>
    <StorySub> 
      { `${score} points by ${by} ${age} | hide | ${descendants} comments ` }
    </StorySub>
  </StoryRanked>
)




const withHNStories = lifecycle({
  state: { stories: [] },
  async componentDidMount(){
    this.setState({ stories: STORIES });
    return;
    const hnapi = 'https://hacker-news.firebaseio.com/v0/';
    const storyIds = await axios.get(`${hnapi}topstories.json`).then(({ data })=>data.slice(0,10))
    const stories = (await Promise.all(storyIds.map(id => axios.get(`${hnapi}item/${id}.json`).then(r=>r.data)))).map(story => {
      const { time, url: storyUrl  } = story;
      const now = new Date().getTime();
      story.age = timeago(now).format(time * 1000);
      story.host = url.parse(storyUrl).host;
      return story;
    })

    this.setState({ stories });
  }
});


const StoriesList = ({ stories }) => 
  stories.map((story,i) => 
    <Story key={ i } rank={ i+1 } { ...story }/> 
  )

const withMyStory = mapProps(({ myStory, stories }) => 
  ({ stories: [ myStory, ...stories ] }))(StoriesList);


const MyStories = withHNStories(withMyStory);


const StoriesContainer = styled.div`
  padding: 0 1em 0 1em;
`;


const HNContainer = styled.div`
  width: 100%;
  background-color: ${tcolor('hnBeige')};
`

const Hackernews = ({ children, myStory })=>{
  return (
    <HNContainer>
      <HNHeading>{ children }</HNHeading>
      <StoriesContainer>
        <MyStories myStory={ myStory } />
      </StoriesContainer>
    </HNContainer>

  )
}


export default Hackernews;
