import React from 'react';
import './Review.scss';
import { Link } from 'react-router-dom';
import ReviewCarousel from './ReviewCarousel';

const Review = () => {
  return (
    <div className="review">
      <h1 className="reviewTitle">생생한 리뷰</h1>
      <Link to="/review" className="reviewAll">
        View All
      </Link>
      <ReviewCarousel />
    </div>
  );
};

export default Review;
