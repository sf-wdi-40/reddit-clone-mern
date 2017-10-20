import React, { Component } from 'react';
import './TextPostLink.css';
import { Link } from 'react-router-dom';

class TextPostLink extends Component {
  render() {
    let votes      = this.props.votes,
        votesLabel = votes === 1 ? 'Vote' : 'Votes';

    return (
      <div className="TextPostLink">
        <div>
          <div>{ `${ votes } ${ votesLabel }` }</div>
          <button onClick={ this.props.vote(this.props._id, votes + 1) }>Upvote</button>
          <button onClick={ this.props.vote(this.props._id, votes - 1) }>Downvote</button>
        </div>
        <Link to={ `/posts/${this.props._id}` } className="TextPostLink-content">
          <img src={ this.props.thumbnail_image_url }/>
          <h2>{ this.props.title }</h2>
        </Link>
      </div>
    );
  }
}

export default TextPostLink;
