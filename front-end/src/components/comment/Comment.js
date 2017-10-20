import React, { Component } from 'react';
import './Comment.css';

class Comment extends Component {
  render() {
    let votes      = this.props.votes,
        votesLabel = votes === 1 ? 'Vote' : 'Votes';
    
    return (
      <div className="Comment">
        <div className="Comment-content">
          <div>
            <div>{ `${ votes } ${ votesLabel }` }</div>
            <button onClick={ this.props.vote(this.props._id, votes + 1) }>Upvote</button>
            <button onClick={ this.props.vote(this.props._id, votes - 1) }>Downvote</button>
          </div>
          <p>{ this.props.content }</p>
        </div>
      </div>
    );
  }
}

export default Comment;
