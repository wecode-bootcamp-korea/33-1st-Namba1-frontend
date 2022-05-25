import React, { useEffect, useState } from 'react';
import '../../components/Review/BestReview.scss';
import Arrows from './Arrows';

const BestReview = () => {
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    fetch('/data/bestReview.json')
      .then(res => res.json())
      .then(data => {
        setSlider(data);
      });
  }, []);

  return (
    <section className="bestReview">
      {/* TODO : 수동 슬라이드 기능 구현 */}
      <ul className="bestSliderWarp">
        {slider.map(({ id, title, imgSrc, imgAlt, userId, userReview }) => (
          <li key={id} className="reviewSlider">
            <div className="bestReviewImgBox">
              <div className="bestBg">
                <span className="bestTag">Best</span>
              </div>
              <img className="bestReviewImg" src={imgSrc} alt={imgAlt} />
            </div>
            <h2 className="reviewTitle">{title}</h2>
            <div className="starBox">
              <span className="star">★★★★★</span>
              {/* TODO : id 3글자 이후 * 처리 */}

              <span>{userId}</span>
            </div>
            <p className="bestReviewDesc">{userReview}</p>
          </li>
        ))}
      </ul>
      <Arrows />
    </section>
  );
};

export default BestReview;
