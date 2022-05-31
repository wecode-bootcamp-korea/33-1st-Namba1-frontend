import React, { useEffect, useState, useRef } from 'react';
import '../../components/Review/BestReview.scss';
import Arrows from './Arrows';

const BestReview = () => {
  const [slider, setSlider] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const TOTAL_SLIDES = slider.length;
  const slideRef = useRef(null);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    // DOM. card width
    slideRef.current.style.transform = `translateX(-${currentSlide * 568}px)`;
  }, [currentSlide]);

  useEffect(() => {
    fetch('/data/bestReview.json')
      .then(res => res.json())
      .then(data => {
        setSlider(data);
      });
  }, []);

  return (
    <section className="bestReview">
      <ul className="bestSliderWarp">
        <div ref={slideRef}>
          {slider.map(({ id, title, imgSrc, userId, userReview }) => (
            <li key={id} className="reviewSlider">
              <div className="bestReviewImgBox">
                <div className="bestBg">
                  <span className="bestTag">Best</span>
                </div>
                <img className="bestReviewImg" src={imgSrc} alt={title} />
              </div>
              <h2 className="reviewTitle">{title}</h2>
              <div className="starBox">
                <span className="star">★★★★★</span>
                {/* TODO : id 3글자 이후 * 처리 */}

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

export default BestReview;
