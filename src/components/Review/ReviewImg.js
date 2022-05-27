import React from 'react';
import '../../components/Review/ReviewImg.scss';

const ReviewImg = ({ imageSrc }) => {
  return (
    <div className="reviewimg">
      <img src={imageSrc} alt="음식 사진 4 (임시)" />
    </div>
  );
};

export default ReviewImg;
