import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import '../../components/Review/BestReview.scss';

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
      <ul className="bestSilderWarp">
        {slider.map(({ id, title, imgSrc, imgAlt, userId, userReview }) => (
          <li key={id} className="reviewSilder">
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
      {/* TODO : 슬라이드 페이지네이션 구현 */}
      <div className="pagination">
        <button className="paginationBtn">
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        {/* 현재페이지 / 페이지합계 */}
        <span className="pagenation">1 / 5</span>
        <button className="paginationBtn">
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </section>
  );
};

export default BestReview;
