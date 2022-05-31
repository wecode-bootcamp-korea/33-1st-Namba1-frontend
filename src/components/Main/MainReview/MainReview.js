import React from 'react';
import { Link } from 'react-router-dom';
import ReviewCarousel from './ReviewCarousel';
import './MainReview.scss';

const Review = () => {
  return (
    <div className="mainReview">
      <h1 className="reviewTitle">생생한 리뷰</h1>
      <Link to="/review" className="reviewAll">
        <button>View All</button>
      </Link>
      <ReviewCarousel />
    </div>
  );
};

export default Review;
