import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import RecommendDrop from './RecommendDrop.js';
import './Recommend.scss';
import { useLocation, useNavigate } from 'react-router-dom';

const Recommend = () => {
  const totalSlide = RECOMMEND_PHOTO.length - 1;
  const [tasteOption, setTasteOption] = useState('매콤한맛');
  const [tasteImg, setTasteImg] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  console.log(location.search);

  const nextSlide = () => {
    if (currentSlide >= totalSlide) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(totalSlide);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 1.0s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  useEffect(() => {
    fetch(`/data/newProduct.json${location.search}`)
      .then(res => res.json())
      .then(data => {
        setTasteImg(data.allMenu);
      });
  }, [location.search]);

  const getTasteBtn = tasteOption => {
    const queryString = `?taste=${tasteOption}`;
    navigate(`${queryString}`);
  };

  return (
    <div className="recommend">
      <div className="recommendContent">
        <RecommendDrop
          getTasteBtn={getTasteBtn}
          taste={tasteOption}
          setTaste={setTasteOption}
        />
        <div className="recommendMsg">메뉴</div>
        <div className="recommendMsg">추천드려요 :D</div>
        <div className="recommendCarouselBtns">
          <button className="recommendBtn" onClick={prevSlide}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <span className="currentSlide">
            {currentSlide + 1}/{tasteOption.length}
          </span>
          <button className="recommendBtn" onClick={nextSlide}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
      <div className="recommendPhoto">
        <div className="recommendPhotoDisplay" ref={slideRef}>
          {tasteImg.map(({ id, name, image }) => {
            return <img key={id} src={image} alt={name} />;
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
