import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component { 

  render () {

    const {pictures} = this.props;

    return (
      <ul className="ImageGallery">
        <ImageGalleryItem pictures={pictures} />
      </ul>
    )
  };
};

ImageGallery.propTypes = {
  // bla: PropTypes.string,
};

export default ImageGallery;
