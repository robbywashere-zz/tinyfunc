import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { themeGet, bg, color } from 'styled-system'
//import axios from 'axios'
//import timeago from 'timeago'
//import TimeAgo from 'timeago-react'; // var TimeAgo = require('timeago-react');

import 'whatwg-fetch'
import { lifecycle, mapProps } from 'recompose'
import voteArrow from '../img/grayarrow.gif'
import { lighten } from 'polished'
import url from 'url'
import STORIES from './stories-fixture.json'
import tcolor from '../lib/tcolor'

const lightenUp = amt => colorFn => props => lighten(amt, colorFn(props))

const HNHeading = styled.h3`
  margin-top: 0;
  background-color: ${tcolor('hnOrange')};
  color: ${tcolor('black')};
  padding: 0.25em;
  font-family: Verdana, Geneva, sans-serif;
  line-height: 15px;
  width: 100%;
  &:before {
    content: 'Y';
    padding: 10px;
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-right: 10px;
    text-align: center;
    color: #fff;
    border: 1px solid white;
  }
`

const StorySub = styled.div`
  padding: 5px 5px 5px 25px;
  font-size: 0.75em;
  color: ${lightenUp(0.5)(tcolor('black'))};
`

const VArrow = styled.img.attrs({
  src: voteArrow,
})`
  width: 18px;
  height: 12px;
  padding: 0 3px 0 3px;
  margin-top: 1px;
`

const StoryRanked = styled.div`
  color: black;
  font-size: 1.5em;
  padding: 0 0 8px 0;

  line-height: 1rem;
  vertical-align: middle;
  &:nth-child(n + 2) {
    padding: 0 0 4px 0;
    color: gray;
    font-size: 1em;
  }
`
const RankArrow = styled(({ children, ...props })=>(<span {...props}>
  {children}.
  <VArrow />
</span>)
)`

  display:inline-block;
  text-align: right;
  width: 3rem;
  overflow: hidden;
  margin-left: -1rem;
`
const Story = ({
  title,
  points,
  host,
  rank,
  time_ago,
  id,
  comments_count,
  user,
}) => (
  <StoryRanked>
    <RankArrow>{rank}</RankArrow>
    {title}
    <small> { host ? `(${host})` : "" }</small>
    <StorySub>
      {`${points} points by ${user} ${time_ago} | hide | ${comments_count} comments `}
    </StorySub>
  </StoryRanked>
)

const withHNStories = lifecycle({
  state: { stories: [] },
  componentDidMount() {
    window.fetch('https://api.hackerwebapp.com/news?page=1')
      .then(r=>r.json())
      .then(stories=>stories.map(s=>({ ...s, host: url.parse(s.url).host })).slice(0,9))
      .then(stories=>this.setState({ stories }))
  },
})

const StoriesList = ({ stories }) =>
  stories.map((story, i) => <Story key={i} rank={i + 1} {...story} />)

const withMyStory = mapProps(({ myStory, stories }) => ({
  stories: [myStory, ...stories],
}))(StoriesList)

const MyStories = withHNStories(withMyStory)

const StoriesContainer = styled.div`
  padding: 0 1em 0 1em;
`

const HNContainer = styled.div`
  width: 100%;
  background-color: ${tcolor('hnBeige')};
  &:after {
   position: absolute;
   box-shadow: #FFF 0px -100px 200px 75px
   width: 100%;
   content: " ";
   height: 100px;

  }
`

const Hackernews = ({ children, myStory }) => {
  return (
    <HNContainer>
      <HNHeading>{children}</HNHeading>
      <StoriesContainer>
        <MyStories myStory={myStory} />
      </StoriesContainer>
    </HNContainer>
  )
}

export default Hackernews
