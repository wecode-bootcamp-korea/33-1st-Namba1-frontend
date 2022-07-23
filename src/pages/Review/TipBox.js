import React from 'react';
import './TipBox.scss';

const TipBox = () => {
  return (
    <div className="tipBox">
      <span className="tipHead">Tip</span>
      <p className="tipDesc">
        포토 리뷰 5번 작성하시면 10% 할인쿠폰을 드립니다!
      </p>
    </div>
  );
};

export default TipBox;
