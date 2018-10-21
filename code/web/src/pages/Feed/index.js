import React from 'react';
// import { Formik, Form, Field } from 'formik';
import { tweets } from 'utils/consts';
import NewsFeed from 'components/NewsFeed';
import 'styles/feed.css';
import Navbar from 'components/Navbar';
import CreatePost from 'components/CreatePost';

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _news: tweets,
      search_results: [],
    };
  }

  handleNewPost = values => {
    if(!values) {
      return;
    }
    this.setState(currentState => {
      var newPost = {
        title: `My post from ${Date().toLocaleString()}`,
        desc: values,
        src: '',
      };
      return {
        _news: [newPost].concat(currentState._news),
      };
    });
  };

  handleSearch = values => {
    if (!values.search) {
      return;
    }
    this.setState(currentState => {
      return {
        search_results: currentState._news.filter(_new =>
          _new.title.toLowerCase().includes(values.toLowerCase()),
        ),
      };
    });
  };

  render() {
    const { search_results: SearchResults, _news: NewsResults } = this.state;
    return (
      <div id="Feed">
        <img id="bg" src={require('assets/register_bg_Prancheta 1.png')} />
        <img id="logofeed" src={require('assets/pando_logotipo.png')} />
        <Navbar id="feednavbar" history={this.props.history} search={this.handleSearch} />
        <CreatePost post={this.handleNewPost} />
        <div id="SearchResults">
          <NewsFeed _news={SearchResults} name="Search Results" />
        </div>
        <div id="NewsFeed">
          <NewsFeed _news={NewsResults} name="News Feed" />
        </div>
      </div>
    );
  }
}
