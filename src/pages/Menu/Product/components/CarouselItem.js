import React from 'react';
import './CarouselItem.scss';

const CarouselItem = ({ source, alt }) => {
  return (
    <div className="smallImages">
      <img className="smallImage" src={source} alt={alt} />
    </div>
  );
};

export default CarouselItem;
