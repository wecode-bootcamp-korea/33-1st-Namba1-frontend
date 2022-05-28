import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import RecommendDrop from './RecommendDrop.js';
import './Recommend.scss';

const Recommend = () => {
  const TOTAL_SLIDES = RECOMMEND_PHOTO.length - 1;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 1.0s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <div className="recommend">
      <div className="recommendContent">
        <RecommendDrop />
        <div className="recommendMsg">메뉴</div>
        <div className="recommendMsg">추천드려요 :D</div>
        <div className="recommendCarouselBtns">
          <button className="recommendBtn" onClick={prevSlide}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <span className="currentSlide">
            {currentSlide + 1}/{RECOMMEND_PHOTO.length}
          </span>
          <button className="recommendBtn" onClick={nextSlide}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
      <div className="recommendPhoto">
        <div className="recommendPhotoDisplay" ref={slideRef}>
          {RECOMMEND_PHOTO.map(({ id, src, alt }) => {
            return <img key={id} src={src} alt={alt} />;
          })}
        </div>
      </div>
    </div>
  );
};

const RECOMMEND_PHOTO = [
  { id: 1, src: '/images/main/salad.jpg', alt: 'salad' },
  { id: 2, src: '/images/main/salad.jpg', alt: 'salad' },
  { id: 3, src: '/images/main/salad.jpg', alt: 'salad' },
];

export default Recommend;
