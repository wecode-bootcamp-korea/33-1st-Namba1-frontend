import React from 'react';
import '../../pages/Review/Review.scss';
import ReviewListItem from './ReviewListItem';
import '../../components/Review/ReviewList.scss';

const ReviewList = ({ review }) => {
  return (
    <ul className="reviewlist">
      {review.map(({ id, reviewTitle, date, userId, userInput }) => (
        <ReviewListItem
          key={id}
          reviewTitle={reviewTitle}
          date={date}
          userId={userId}
          userInput={userInput}
        />
      ))}
    </ul>
  );
};

export default ReviewList;
