import React from 'react';
import SmallImages from './SmallImages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import './ProductImages.scss';

const ProductImages = () => {
  return (
    <section className="productImages">
      <img
        className="bigImage"
        src="/images/menu/sweetPumpkinCreamPasta.jpg"
        alt="Sweet Pumpkin Cream Pasta"
      />
      <div className="smallImages">
        <FontAwesomeIcon icon={faChevronLeft} className="chevronIcon" />
        {IMAGE_LIST.map(({ id, source, alt }) => (
          <SmallImages key={id} source={source} alt={alt} />
        ))}
        <FontAwesomeIcon icon={faChevronRight} className="chevronIcon" />
      </div>
    </section>
  );
};

export default ProductImages;

const IMAGE_LIST = [
  {
    id: 'img1',
    source: '/images/menu/sweetPumpkinCreamPasta1.jpg',
    alt: 'Sweet Pumpkin Cream Pasta',
  },
  {
    id: 'img2',
    source: '/images/menu/sweetPumpkinCreamPasta2.jpg',
    alt: 'Sweet Pumpkin Cream Pasta',
  },
  {
    id: 'img3',
    source: '/images/menu/sweetPumpkinCreamPasta3.jpg',
    alt: 'Sweet Pumpkin Cream Pasta',
  },
  {
    id: 'img4',
    source: '/images/menu/sweetPumpkinCreamPasta4.jpg',
    alt: 'Sweet Pumpkin Cream Pasta',
  },
  {
    id: 'img5',
    source: '/images/menu/sweetPumpkinCreamPasta5.jpg',
    alt: 'Sweet Pumpkin Cream Pasta',
  },
];
