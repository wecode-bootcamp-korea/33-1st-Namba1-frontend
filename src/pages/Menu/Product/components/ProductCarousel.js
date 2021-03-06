import React, { useState } from 'react';
import CarouselItem from './CarouselItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faImages,
} from '@fortawesome/free-solid-svg-icons';
import './ProductCarousel.scss';

const ProductCarousel = ({ id, name, image }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const leftSlide = () => {
    if (currentIndex === 0) return;
    setCurrentIndex(previousIndex => previousIndex - 1);
  };

  const rightSlide = () => {
    if (currentIndex === faImages.length - 1) return;
    setCurrentIndex(previousIndex => previousIndex + 1);
  };

  return (
    <section className="productCarousel">
      <div className="productDisplay">
        {image.map((item, index) => (
          <img key={index} src={item} alt="Food Item" className="bigImage" />
        ))}
      </div>
      <div className="smallImages">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="chevronIcon"
          onClick={leftSlide}
        />
        <div className="collection">
          {image.map((item, index) => (
            <CarouselItem key={index} source={item} alt={name} />
          ))}
        </div>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="chevronIcon"
          onClick={rightSlide}
        />
      </div>
    </section>
  );
};

export default ProductCarousel;
