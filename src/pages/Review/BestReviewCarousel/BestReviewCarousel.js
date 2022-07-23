import React, { useEffect, useState, useRef } from 'react';
import Arrows from './BestReviewArrows';
import './BestReviewCarousel.scss';

const BestReviewCarousel = () => {
  const [slider, setSlider] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideRef = useRef(null);
  const TotalSlides = slider.length;

  const nextSlide = () => {
    if (currentSlide >= TotalSlides - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TotalSlides - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    fetch('/data/bestReview.json')
      .then(res => res.json())
      .then(data => {
        setSlider(data);
      });
  }, []);

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide * 568}px)`;
  }, [currentSlide]);

  return (
    <section className="bestReviewCarousel">
      <ul className="bestReviewCarouselUl">
        <div ref={slideRef} className="bestReviewCarouselWarp">
          {slider.map(({ id, title, imgSrc, userId, userReview }) => (
            <li key={id} className="bestReviewItem">
              <div className="bestReviewImgBox">
                <div className="bestReviewBg">
                  <span className="bestTag">Best</span>
                </div>
                <img className="bestReviewImg" src={imgSrc} alt={title} />
              </div>
              <h2 className="bestReviewTitle">{title}</h2>
              <div className="scopeWarp">
                <span className="star">★★★★★</span>
                <span className="userId">{userId}</span>
              </div>
              <p className="bestReviewDesc">{userReview}</p>
            </li>
          ))}
        </div>
      </ul>
      <Arrows
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        currentSlide={currentSlide}
      />
    </section>
  );
};

export default BestReviewCarousel;
