import React from 'react';
import SmallImages from './SmallImages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import './ProductImages.scss';

const ProductImages = ({ image }) => {
  return (
    <section className="productImages">
      <img
        className="bigImage"
        src={image[0]}
        alt="Sweet Pumpkin Cream Pasta"
      />
      <div className="smallImages">
        <FontAwesomeIcon icon={faChevronLeft} className="chevronIcon" />
        {image.map(({ id, source, alt }) => (
          <SmallImages key={id} source={source} alt={alt} />
        ))}
        <FontAwesomeIcon icon={faChevronRight} className="chevronIcon" />
      </div>
    </section>
  );
};

export default ProductImages;
