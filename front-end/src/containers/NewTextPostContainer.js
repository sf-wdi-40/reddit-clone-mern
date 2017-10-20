import React, { Component } from 'react';
import './NewTextPostContainer.css'

class TextPostNewContainer extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      content: '',
      thumbnail_image_url: '',
      votes: 0
    };
    
    this.updateField = this.updateField.bind(this);
  }

  updateField(e, field) {
    this.setState({ [field]: e.target.value });
  }

  render() {
    return (
      <div className={`TextPostNewContainer ${ this.props.visible ? '' : 'hide'}` }>
        <div className="TextPostNewContainer-content">
          <button onClick={ this.props.hide }>Close</button>
          <form onSubmit={ () => { this.props.onSubmit(this.state) } }>
            <input onChange={ e => { this.updateField(e, 'title') } } type="text" placeholder="Title"/>
            <input onChange={ e => { this.updateField(e, 'content') } } type="text" placeholder="Content"/>
            <input onChange={ e => { this.updateField(e, 'thumbnail_image_url') } } type="text" placeholder="Thumbnail Image URL"/>
            <input type="submit"/>
          </form>
        </div>
      </div>
    );
  }
}

export default TextPostNewContainer;
