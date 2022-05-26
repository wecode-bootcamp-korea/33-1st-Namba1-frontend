import React from 'react';
import './SmallImages.scss';

const SmallImages = ({ source, alt }) => {
  return (
    <div className="smallImages">
      <img className="smallImage" src={source} alt={alt} />
    </div>
  );
};

export default SmallImages;
