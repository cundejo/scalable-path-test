import React from 'react';
import { find } from 'lodash';
import '../App.css';
import Post from './Post';

const Posts = ({ posts, authors }) => {
  return (
    <div className="App">
      {posts.map(post => {
        const author = find(authors, { id: post.userId });
        return (
          <Post
            key={post.id}
            title={post.title}
            body={post.body}
            author={author.name}
          />
        );
      })}
    </div>
  );
};

export default Posts;
