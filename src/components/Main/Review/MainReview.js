import React from 'react';
import './MainReview.scss';
import { Link } from 'react-router-dom';
import ReviewCarousel from './ReviewCarousel';

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
