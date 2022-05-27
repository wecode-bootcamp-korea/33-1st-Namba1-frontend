import React, { useState, useEffect, useRef } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './Recommend.scss';

const Recommend = () => {
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
    <div className="recommend">
      <div className="recommendDrop">
        <div className="drop">
          {/* <button type="button" className="taste">
            <span>매콤한맛</span> <FontAwesomeIcon icon={faAngleDown} />
          </button> */}
          <select name="taste" className="taste">
            <option value="매콤한맛">매콤한맛</option>
            <option value="짭짤한맛">짭짤한맛</option>
            <option value="새콤한맛">새콤한맛</option>
            <option value="담백한맛">담백한맛</option>
            <option value="이국적인맛">이국적인맛</option>
            <option value="얼큰한맛">얼큰한맛</option>
          </select>
        </div>
        <div className="recommendMsg">메뉴</div>
        <div className="recommendMsg">추천드려요 :D</div>
        <div className="recommendBtns">
          <button onClick={prevSlide}>좌측</button>
          <button onClick={nextSlide}>우측</button>
        </div>
      </div>
      <div className="recommendPhoto" ref={slideRef}>
        {RECOMMEND_PHOTO.map(({ id, src, alt }) => {
          return <img key={id} src={src} alt={alt} />;
        })}
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
