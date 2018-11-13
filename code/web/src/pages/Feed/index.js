import React from 'react';
import Navbar from 'components/Navbar';
import NewsFeed from 'components/NewsFeed';
import CreatePost from 'components/CreatePost';
// import 'styles/feed.css';
import { tweets } from 'utils/consts';
import { getTweets, postToTwitter } from 'utils/api';

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      search_results: [],
    };

    getTweets(20)
      .then(data => {
        // remover duplicados
        const ids = Array.from(new Set(data.data));
        this.setState({
          news: ids,
        });
      })
      .catch(console.log);
  }

  handleNewPost = values => {
    if (!values) {
      return;
    }
    postToTwitter(values);
  };

  handleSearch = values => {
    if (!values.search) {
      return;
    }
    this.setState(currentState => {
      return {
        search_results: currentState.news.filter(_new =>
          _new.title.toLowerCase().includes(values.toLowerCase()),
        ),
      };
    });
  };

  render() {
    const { search_results: SearchResults, news: NewsResults } = this.state;
    return (
      <div class="container">
        <Navbar
          id="feednavbar"
          history={this.props.history}
          search={this.handleSearch}
        />
        <CreatePost post={this.handleNewPost} />
        <div id="SearchResults">
          <NewsFeed news={SearchResults} name="Search Results" />
        </div>
        <div id="NewsFeed">
          <NewsFeed news={NewsResults} name="News Feed" />
        </div>
      </div>
    );
  }
}
