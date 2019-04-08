import React from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import './App.css';
import Posts from './components/Posts';
import { getAuthorInvoker, getPostInvoker } from './redux/actions';

class App extends React.Component {
  componentDidMount() {
    this.props.getPosts();
    this.props.getAuthors();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {}

  render() {
    const { authors, posts } = this.props;
    if (!isEmpty(authors) && !isEmpty(posts)) {
      return <Posts authors={authors} posts={posts} />;
    }
    return <h1>Loading....</h1>;
  }
}

const mapStateToProps = state => ({
  posts: state.post.posts,
  authors: state.author.authors,
});

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPostInvoker()),
  getAuthors: () => dispatch(getAuthorInvoker()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
