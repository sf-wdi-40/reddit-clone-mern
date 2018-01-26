import React, { Component } from 'react';
import './TextPost.css';
import Comment from '../comment/Comment';

class TextPost extends Component {
  render() {
    return (
      <div className="TextPost">
        <p className="TextPost-content">
          TextPost content
        </p>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    );
  }
}

export default TextPost;
