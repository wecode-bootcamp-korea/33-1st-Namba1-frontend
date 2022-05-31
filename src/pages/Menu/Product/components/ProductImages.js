import React from 'react';
import SmallImages from './SmallImages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import './ProductImages.scss';

const ProductImages = ({ id, name, image }) => {
  return (
    <section className="productImages">
      <img className="bigImage" key={id} src={image[0]} alt={name} />
      <div className="smallImages">
        <FontAwesomeIcon icon={faChevronLeft} className="chevronIcon" />
        {image.map((item, index) => (
          <SmallImages key={index} source={item} alt={name} />
        ))}
        <FontAwesomeIcon icon={faChevronRight} className="chevronIcon" />
      </div>
    </section>
  );
};

export default ProductImages;
