import React, { useEffect, useState, useRef } from 'react';
import '../../components/Review/BestReview.scss';
import Arrows from './Arrows';

const BestReview = () => {
  const [slider, setSlider] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(5);

  useEffect(() => {
    fetch('/data/bestReview.json')
      .then(res => res.json())
      .then(data => {
        setSlider(data);
      });
  }, []);

  const TOTAL_SLIDES = 5;
  const transitionTime = 500;
  const transitionStyle = `all ${transitionTime}ms ease-in-out`;
  const [transition, setTranstion] = useState(transitionStyle);

  useEffect(() => {
    slideRef.current.style.transition = transition;
    slideRef.current.style.transform = `translateX(-${currentSlide * 568}px)`;
  }, [currentSlide]);

  const slideRef = useRef('');

  const replaceSlide = () => {
    setCurrentSlide(TOTAL_SLIDES * 2);
    setTimeout(() => {
      setTranstion('');
      setCurrentSlide(TOTAL_SLIDES);
    }, transitionTime);
  };

  const replaceReverseSlide = () => {
    setCurrentSlide(0);
    setTimeout(() => {
      setTranstion('');
      setCurrentSlide(TOTAL_SLIDES);
    }, transitionTime);
  };

  const nextSlide = () => {
    const nextCurr = currentSlide + 1;

    if (currentSlide > TOTAL_SLIDES * 2 - 2) {
      replaceSlide();
    } else {
      setCurrentSlide(nextCurr);
      setTranstion(transitionStyle);
    }
  };

  const prevSlide = () => {
    const prevCurr = currentSlide - 1;
    if (currentSlide === 1) {
      replaceReverseSlide();
    } else {
      setCurrentSlide(prevCurr);
      setTranstion(transitionStyle);
    }
  };

  return (
    <section className="bestReview">
      <ul className="bestSliderWarp">
        <div className="bestSliderCarousel" ref={slideRef}>
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
