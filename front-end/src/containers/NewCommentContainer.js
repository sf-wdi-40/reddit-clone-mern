import React, { Component } from 'react';

class CommentNew extends Component {
  constructor() {
    super();
    this.state = {
      content: '',
      votes: 0
    };
    
    this.updateContent = this.updateContent.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  updateContent(e) {
    this.setState({ content: e.target.value });
  }

  onSubmit() {
    this.props.onSubmit(this.state);
    this.setState({ content: '' });
  }

  render() {
    return (
      <div className={`CommentNewContainer ${ this.props.visible ? '' : 'hide'}` }>
        <form className="CommentNewContainer-content" onSubmit={ this.onSubmit }>
          <input onChange={ this.updateContent } ref="content" type="text" placeholder="Content"/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default CommentNew;
