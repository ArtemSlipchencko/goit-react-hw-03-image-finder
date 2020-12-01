import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component { 

  render () {

    const {pictures, openModal} = this.props;

    return (
      <ul className="ImageGallery">
        <ImageGalleryItem openModal={this.props.openModal} pictures={pictures} />
      </ul>
    )
  };
};

ImageGallery.propTypes = {
  pictures: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
