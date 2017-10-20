import React, { Component } from 'react';
import './PostContainer.css';
import TextPost from '../components/textPost/TextPost';
import Comment from '../components/comment/Comment';
import NewCommentContainer from './NewCommentContainer';
import fetchHelper from '../helpers/fetchHelper';

class PostContainer extends Component {
  constructor() {
    super();
    this.state = {
      post: {
        comments: []
      }
    };
    this.getCurrentPostId = this.getCurrentPostId.bind(this);
    this.createComment = this.createComment.bind(this);
    this.voteOnComment = this.voteOnComment.bind(this);
  }

  getCurrentPostId() {
    return this.props.location.pathname.split('/')[2];
  }

  componentWillMount() {
    let postId = this.getCurrentPostId();
    fetchHelper(`/api/posts/${ postId }`).then(myPost => {
      this.setState({ post: myPost })
    });
  }

  createComment(comment) {
    let postId = this.getCurrentPostId();
    fetchHelper(`/api/posts/${ postId }/comments`, 'POST', JSON.stringify(comment)).then(res => {
      fetchHelper(`/api/posts/${ postId }`).then(updatedPost => {
        this.setState({ post: updatedPost });
      })
    })
  }

  voteOnComment(comment_id, newVotes) {
    return () => {
      let payload = JSON.stringify({ votes: newVotes });
      fetchHelper(`/api/comments/${ comment_id }`, 'PUT', payload).then(res => {
        let postId = this.getCurrentPostId();
        fetchHelper(`/api/posts/${ postId }`).then(updatedPost => {
          this.setState({ post: updatedPost });
        });
      });
    }
  }
  
  render() {
    return (
      <div className="PostContainer">
        <div className="PostContainer-content">
          <TextPost { ...this.state.post } />
          
          <h3>Comments</h3>
          <NewCommentContainer onSubmit={ this.createComment } />
          { this.state.post.comments.map(comment => {
            return <Comment
              key = { comment._id }
              vote={ this.voteOnComment }
              { ...comment } />
          }) }
        </div>
      </div>
    );
  }
}

export default PostContainer;
