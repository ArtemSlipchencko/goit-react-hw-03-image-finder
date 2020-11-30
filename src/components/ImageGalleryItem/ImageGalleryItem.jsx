import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './ImageGalleryItem.styles';

class ImageGalleryItem extends PureComponent { 

  render () {
    
    const {pictures} = this.props;

    return (
      pictures.map(el => 
      <li key={el.id} className="ImageGalleryItem">
        <img src={el.webformatURL} alt="image" className="ImageGalleryItem-image" />
      </li>)
    )
  }
}

ImageGalleryItem.propTypes = {
  // bla: PropTypes.string,
};

export default ImageGalleryItem;
