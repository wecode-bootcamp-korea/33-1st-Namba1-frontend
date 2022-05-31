import React, { useEffect, useState, useRef } from 'react';
import '../../components/Review/BestReview.scss';
import Arrows from './Arrows';

const BestReview = () => {
  const [slider, setSlider] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideRef = useRef(null);

  // const TOTAL_SLIDES = slider.length;

  // 1. 원래 배열에서 앞에는 맨 마지막 슬라이드를 복제, 뒤에는 맨 첫번째 슬라이드를 복제하는 함수
  // const slideFirst = slider[0];
  // const slideLast = slider[slider.length - 1];
  // const modifiedArray = [slideFirst, ...slider, slideLast];

  //2. 맨 마지막 슬라이드에서 더 갈 경우에 moveToNthSlide 함수를 실행시킴
  const nextSlide = () => {
    const nextCurr = currentSlide + 1;
    setCurrentSlide(nextCurr);

    if (nextCurr === 5) {
      moveToNthSlide(0);
    }
  };

  //3. 맨 처음 슬라이드에서 더 갈 경우에 moveToNthSlide 함수를 실행시킴
  const prevSlide = () => {
    const prevCurr = currentSlide - 1;
    setCurrentSlide(prevCurr);

    if (prevCurr === -1) {
      moveToNthSlide(5);
    }
  };

  //4. n번째 슬라이드로 이동하는 함수.
  const moveToNthSlide = num => {
    setTimeout(() => {
      slideRef.current.style.transition = null;
      // → 2. transition을 모두 지워주고
      setCurrentSlide(num);
      // → 3. 캐러셀 이동
    }, 500);
    // 1. 하지만 그냥 이동하지 않고 transition이 일어나기까지 기다렸다가
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide * 50}%)`;
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
