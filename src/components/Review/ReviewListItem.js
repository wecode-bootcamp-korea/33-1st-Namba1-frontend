import React from 'react';
import ReviewImg from './ReviewImg';
import TipBox from './TipBox';
import '../../components/Review/ReviewListItem.scss';

const ReviewListItem = ({ reviewTitle, date, userId, userInput, imageSrc }) => {
  return (
    <li className="reviewlistitem">
      <div className="reviewHead">
        <h3 className="reviewMenu">{reviewTitle}</h3>
        <span>{date}</span>
      </div>
      <div className="starBox">
        <span className="star">★★★★★</span>
        <span>|</span>
        <span>{userId}</span>
      </div>

      {imageSrc ? (
        <div className="reviewBoxWrap">
          <ReviewImg imageSrc={imageSrc} />
          <div>
            {userInput}
            <TipBox />
          </div>
        </div>
      ) : (
        <div className="reviewBoxWrap">
          <div>{userInput}</div>
        </div>
      )}
    </li>
  );
};

export default ReviewListItem;
