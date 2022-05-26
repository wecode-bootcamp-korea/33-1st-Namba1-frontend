import React from 'react';
import './Review.scss';

const Review = () => {
  return (
    <div className="reviewContents">
      <div className="reviewContentBox">
        <div className="reviewContentTitle">소고기듬뿍잡채</div>
        <div className="reviewContent">
          "일단 육즙이 팡 터지구요 존맛탱구리에요"
        </div>
      </div>
      <div className="reviewPhoto">
        <img className="reviewImg" src="/images/main/lunch.jpg" alt="lunch" />
      </div>
    </div>
  );
};

export default Review;
