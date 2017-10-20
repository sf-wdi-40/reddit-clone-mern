import React, { Component } from 'react';
import TextPostLink from '../components/textPost/TextPostLink';
import NewTextPostContainer from './NewTextPostContainer';
import fetchHelper from '../helpers/fetchHelper';

class PostsContainer extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      showModal: false
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.createPost = this.createPost.bind(this);
    this.sortAndSetPosts = this.sortAndSetPosts.bind(this);
    this.vote = this.vote.bind(this);
  }

  componentWillMount() {
    fetchHelper('/api/posts').then(myPosts => {
      this.sortAndSetPosts(myPosts);
    });
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal })
  }

  sortAndSetPosts(posts) {
    let sortedPosts = posts.sort((a, b) => {
      if (a.votes === b.votes) { 
        return a.updatedAt < b.updatedAt ? 1 : -1;
      }
      return a.votes < b.votes ? 1 : -1;
    });
    this.setState({ posts: sortedPosts });
  }

  createPost(post) {
    var component = this;
    fetchHelper('/api/posts', 'POST', JSON.stringify(post)).then(res => {
      fetchHelper('/api/posts').then(postsResponse => {
        component.sortAndSetPosts(postsResponse);
        component.toggleModal();
      });
    });
  }

  vote(postId, newVotes) {
    return () => {
      let payload = JSON.stringify({ votes: newVotes });
      fetchHelper(`/api/posts/${postId}`, 'PUT', payload).then(res => {
        fetchHelper('/api/posts').then(postsResponse => {
          this.sortAndSetPosts(postsResponse);
        });
      });
    }
  }

  render() {
    return (
      <div className="PostsContainer">
        <button onClick={ this.toggleModal }>Create Post</button>
        <NewTextPostContainer 
          visible={ this.state.showModal } 
          onSubmit={ this.createPost } 
          hide={ this.toggleModal } />

        <div className="PostsContainer-content">
          { this.state.posts.map(post => {
            return <TextPostLink 
              key  = { post._id } 
              vote = { this.vote } 
              { ... post } />
          }) }
        </div>
      </div>
    );
  }
}

export default PostsContainer;
