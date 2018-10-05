/*

    const hnapi = 'https://hacker-news.firebaseio.com/v0/'
    axios
      .get(`${hnapi}topstories.json`)
      .then(({ data }) => data.slice(0, 10))
      .then(storyIds =>
        Promise.all(
          storyIds.map(id => axios.get(`${hnapi}item/${id}.json`).then(({ data }) => data ))
        ).then(storyData => {
          const stories = storyData.map(story => {
            try {
              story.time = new Date(story.time*1000); 
              story.host = story.url ? url.parse(story.url).host : null;
              return story
            } catch(e) {
              console.error(e);
            }
          })
          this.setState({ stories })
        })
      )
  */
