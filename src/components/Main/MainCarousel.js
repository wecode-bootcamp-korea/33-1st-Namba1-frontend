import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './MainCarousel.scss';

const MainCarousel = () => {
  const TOTAL_SLIDES = 3;
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
    <div className="slideBox">
      <div className="slideDisplay" ref={slideRef}>
        {MAIN_SLIDE.map(({ id, src, alt }) => {
          return <img key={id} className="mainSlide" src={src} alt={alt} />;
        })}
      </div>
      <button className="prevButton" type="button" onClick={prevSlide}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button className="nextButton" type="button" onClick={nextSlide}>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

const MAIN_SLIDE = [
  { id: 1, src: '/images/main/meat.jpg', alt: 'meat' },
  { id: 2, src: '/images/main/dinner.jpg', alt: 'dinner' },
  { id: 3, src: '/images/main/salad.jpg', alt: 'salad' },
  { id: 4, src: '/images/main/dinner.jpg', alt: 'dinner' },
];

export default MainCarousel;
