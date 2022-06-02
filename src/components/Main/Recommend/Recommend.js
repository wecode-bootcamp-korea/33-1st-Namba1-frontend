import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import RecommendDrop from './RecommendDrop.js';
import './Recommend.scss';
import { useLocation, useNavigate } from 'react-router-dom';

const Recommend = ({ ip }) => {
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

  // ******* MOCK DATA *******
  // useEffect(() => {
  //   fetch(`/data/newProduct.json`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setTasteImg(data.allMenu);
  //       setTotalSlide(tasteImg.length - 1);
  //     });
  // }, []);

  // ******* SERVER DATA *******
  useEffect(() => {
    fetch(`http://${ip}${location.search}`)
      .then(res => res.json())
      .then(data => {
        setTasteImg(data.product_list);
      });
  }, [location]);

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
        <div className="recommendMsg">메뉴</div>
        <div className="recommendMsg">추천드려요 :D</div>
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
