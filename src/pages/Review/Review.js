import React from 'react';
import './Review.scss';
import BestReview from '../../components/Review/BestReview';
import ReviewBox from '../../components/Review/ReviewBox';
import Nav from '../../components/Nav/Nav';

function Review() {
  return (
    <div className="review">
      <Nav />
      <h1 className="reviewHeader">리뷰</h1>
      <hr />
      <BestReview />
      <ReviewBox />
    </div>
  );
}

export default Review;
