import React from 'react';
import '../App.css';

function Post({title, author, body}) {
  return (
    <div className="post">
      <h1>{title}</h1>
      <h3>{author}</h3>
      <p>{body}</p>
    </div>
  );
}

export default Post;
