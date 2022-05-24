import React from 'react';

const ReviewListItem = ({ reviewTitle, date, userId, userInput }) => {
  return (
    <li className="포토리뷰아님">
      {/* 포토 리뷰일 경우 & 아닐 경우 */}
      <div className="reviewHead">
        <h3 className="reviewMenu">{reviewTitle}</h3>
        <span>{date}</span>
      </div>
      <div className="starBox">
        <span className="star">★★★★★</span>
        <span>|</span>
        {/* 3글자만 보이고 별처리 */}
        <span>{userId}</span>
      </div>
      <div className="reviewBoxWrap">
        <ReviewImg />
        <div>
          {userInput}
          <TipBox />
        </div>
      </div>
    </li>
  );
};

function TipBox() {
  return (
    <div className="tipBox">
      <span className="tipHead" style={{ fontWeight: 700 }}>
        Tip
      </span>
      <p className="tipDesc">쌈채소 준비해서 같이 드세보세요</p>
    </div>
  );
}

function ReviewImg() {
  return (
    <div className="reviewImgWrap">
      <img src="/images/review/food4.jpg" alt="음식 사진 4 (임시)" />
    </div>
  );
}

export default ReviewListItem;
