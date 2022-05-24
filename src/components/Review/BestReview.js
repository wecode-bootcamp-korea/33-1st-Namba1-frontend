import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const BestReview = () => {
  return (
    <section className="bestReview">
      {/* TODO : 수동 슬라이드 기능 구현 */}
      <div className="bestSilderWarp">
        {/* silder 1 */}
        <div className="reviewSilder">
          <div className="bestReviewImgBox">
            <div className="bestBg">
              <span className="bestTag">Best</span>
            </div>
            <img
              className="bestReviewImg"
              src="/images/review/food1.jpg"
              alt="음식 사진 1 (임시)"
            />
          </div>
          <h2 className="reviewTitle">버섯강된장과 간장불고기(임시)</h2>
          <div className="starBox">
            <span className="star">★★★★★</span>
            {/* TODO : id 3글자 이후 * 처리 */}
            <span>lem***</span>
          </div>
          <p className="bestReviewDesc">
            저번에 먹고 맛있어서 재구매했어요. 조리도 간단하고 정말 맛있어요. 쌈
            싸먹기 너무 좋고 강된장이 전혀 안짜서 많이 퍼먹기 좋아요.
          </p>
        </div>
        {/* silder 2 */}
        <div className="reviewSilder">
          <div className="bestReviewImgBox">
            <div className="bestBg">
              <span class="bestTag">Best</span>
            </div>
            <img
              className="bestReviewImg"
              src="/images/review/food2.jpg"
              alt="음식 사진 2 (임시)"
            />
          </div>
          <h2 className="reviewTitle">버섯강된장과 간장불고기(임시)</h2>
          <div className="starBox">
            <span className="star">★★★★★</span>
            {/* TODO : id 3글자 이후 * 처리 */}
            <span>lem***</span>
          </div>
          <p className="bestReviewDesc">
            저번에 먹고 맛있어서 재구매했어요. 조리도 간단하고 정말 맛있어요. 쌈
            싸먹기 너무 좋고 강된장이 전혀 안짜서 많이 퍼먹기 좋아요.
          </p>
        </div>
        {/* silder 3 */}
        <div className="reviewSilder">
          <div className="bestReviewImgBox">
            <div className="bestBg">
              <span class="bestTag">Best</span>
            </div>
            <img
              className="bestReviewImg"
              src="/images/review/food3.jpg"
              alt="음식 사진 3 (임시)"
            />
          </div>
          <h2 className="reviewTitle">버섯강된장과 간장불고기(임시)</h2>
          <div className="starBox">
            <span className="star">★★★★★</span>
            {/* TODO : id 3글자 이후 * 처리 */}
            <span>lem***</span>
          </div>
          <p className="bestReviewDesc">
            저번에 먹고 맛있어서 재구매했어요. 조리도 간단하고 정말 맛있어요. 쌈
            싸먹기 너무 좋고 강된장이 전혀 안짜서 많이 퍼먹기 좋아요.
          </p>
        </div>
      </div>
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
