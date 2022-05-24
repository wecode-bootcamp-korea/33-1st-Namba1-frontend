import React from 'react';
import './Review.scss';
import BestReview from '../../components/Review/BestReview';
import SearchBox from '../../components/Review/SearchBox';
import ReviewBox from '../../components/Review/ReviewBox';

function Review() {
  return (
    <div className="review">
      <h1 className="reviewHeader">리뷰</h1>
      <hr />
      <BestReview />
      <SearchBox />
      <ReviewBox />
      <button className="topBtn">Top</button>
    </div>
  );
}

export default Review;
