import React, { useEffect, useRef, useState } from 'react';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ReviewCarousel.scss';
import { Link } from 'react-router-dom';

const ReviewCarousel = () => {
  const TOTAL_SLIDES = 4;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [review, setReview] = useState([]);
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

  useEffect(() => {
    fetch('/data/bestReview.json')
      .then(res => res.json())
      .then(data => {
        setReview(data);
      });
  }, []);

  return (
    <div className="reviewCarousel">
      <div className="reviewContentDisplay">
        <Link to="/review" className="reviewLink">
          {review.map(({ id, title, userReview }) => {
            return (
              <div
                key={id}
                className={`reviewContentBox ${
                  id - 1 === currentSlide ? 'active' : 'hidden'
                }`}
              >
                <div className="reviewContentTitle">{title}</div>
                <div className="reviewContentText">{userReview}</div>
              </div>
            );
          })}
        </Link>
      </div>
      <div className="reviewImgDisplay">
        <div className="reviewImgContainer" ref={slideRef}>
          {review.map(({ id, imgSrc, imgAlt }) => {
            return (
              <div key={id} className="reviewImgBox">
                <img className="reviewImg" src={imgSrc} alt={imgAlt} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="carouselBtns">
        <button className="recommendBtn">
          <FontAwesomeIcon icon={faArrowLeft} onClick={prevSlide} />
        </button>
        {currentSlide + 1} / {review.length}
        <button className="recommendBtn">
          <FontAwesomeIcon icon={faArrowRight} onClick={nextSlide} />
        </button>
      </div>
    </div>
  );
};

export default ReviewCarousel;
