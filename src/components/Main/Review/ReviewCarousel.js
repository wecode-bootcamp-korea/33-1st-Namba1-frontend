import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './ReviewCarousel.scss';

const ReviewCarousel = () => {
  const TOTAL_SLIDES = REVIEW_LIST.length - 1;
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
    <div className="reviewCarousel">
      <div className="reviewDisplay" ref={slideRef}>
        {REVIEW_LIST.map(({ id, name, content, src, alt }) => {
          return (
            <div key={id} className="reviewBox">
              <div className="reviewContentBox">
                <div className="reviewContentTitle">{name}</div>
                <div className="reviewContentText">{content}</div>
              </div>
              <div className="reviewImgBox">
                <img className="reviewImg" src={src} alt={alt} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="carouselBtns">
        <button className="recommendBtn">
          <FontAwesomeIcon icon={faArrowLeft} onClick={prevSlide} />
        </button>
        {currentSlide + 1} / {REVIEW_LIST.length}
        <button className="recommendBtn">
          <FontAwesomeIcon icon={faArrowRight} onClick={nextSlide} />
        </button>
      </div>
    </div>
  );
};

const REVIEW_LIST = [
  {
    id: 1,
    name: '소고기듬뿍잡채',
    content: '대박대박대박마싯ㅇ어용',
    src: '/images/main/lunch.jpg',
    alt: 'lunch',
  },
  {
    id: 2,
    name: '소고기듬뿍잡채',
    content: '야용',
    src: '/images/main/lunch.jpg',
    alt: 'lunch',
  },
  {
    id: 3,
    name: '소고기듬뿍잡채',
    content: '대박대박대박마싯ㅇ어용',
    src: '/images/main/lunch.jpg',
    alt: 'lunch',
  },
];

export default ReviewCarousel;
