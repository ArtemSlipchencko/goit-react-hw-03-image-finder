import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './ImageGalleryItem.styles';

class ImageGalleryItem extends Component { 

  state = {
    obj: {}
  };

  setObj = (el) => {
    this.setState({obj: el});
    this.props.openModal(el);
  }

  render () {
    
    const {pictures} = this.props;

    return (
      pictures.map(el => 
      <li key={el.id} className="ImageGalleryItem" onClick={() => {this.setObj(el)}}>
        <img src={el.webformatURL} alt="" className="ImageGalleryItem-image" />
      </li>)
    )
  }
}

ImageGalleryItem.propTypes = {
  picture: PropTypes.object.isRequired,
};

export default ImageGalleryItem;
