import React, { Component } from 'react';
import './TextPost.css';

class TextPost extends Component {
  render() {
    return (
      <div className="TextPost">
        <h1>{ this.props.title }</h1>
        <img src={ this.props.thumbnail_image_url } />
        <p>{ this.props.content }</p>
      </div>
    );
  }
}

export default TextPost;
