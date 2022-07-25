import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RecommendDrop from './RecommendDrop.js';
import './Recommend.scss';
import API from '../../../config.js';

const Recommend = () => {
  const [tasteOption, setTasteOption] = useState('매콤한맛');
  const [tasteImg, setTasteImg] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlide = tasteImg.length - 1;
  const slideRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    location.search === '' ? navigate('/?themeId=8&sort=-id') : navigate('/');
  }, []);

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
    fetch(`${API.products}${location.search}`)
      .then(res => res.json())
      .then(data => {
        setTasteImg(data.product_list);
      });
  }, [tasteOption, API, location]);

  const getTasteBtn = tasteOption => {
    const queryString = `?themeId=${tasteOption}&sort=-id`;
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
        <div className="recommendMsg">
          메뉴
          <br />
          추천드려요
        </div>
        <p className="recommendMsgDesc">
          맛취향에 따라 딱맞는 맛있는 메뉴를 추천드려요!
        </p>
        <div className="recommendCarouselBtns">
          <button className="recommendBtn" onClick={prevSlide}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <span className="currentSlide">
            {currentSlide + 1}/{tasteImg.length}
          </span>
          <button className="recommendBtn" onClick={nextSlide}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
      <div className="recommendPhoto">
        <div className="recommendPhotoDisplay" ref={slideRef}>
          {tasteImg.map(({ id, name, image }) => {
            return (
              <div key={id} className="imgBox">
                <img src={image} alt={name} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Recommend;
