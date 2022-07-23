import React from 'react';
import Nav from '../../components/Nav/Nav';
import BestReview from './BestReview/BestReview';
import ReviewBox from './ReviewListContainer/ReviewContainer';
import Footer from '../../components/Footer/Footer';
import './Review.scss';

function Review() {
  return (
    <>
      <div className="review">
        <Nav />
        <h1 className="reviewHeader">리뷰</h1>
        <hr />
        <BestReview />
        <ReviewBox />
      </div>
      <Footer />
    </>
  );
}

export default Review;
