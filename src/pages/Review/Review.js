import React from 'react';
import Nav from '../../components/Nav/Nav';
import BestReviewCarousel from './BestReviewCarousel/BestReviewCarousel';
import ReviewListContainer from './ReviewListContainer/ReviewListContainer';
import Footer from '../../components/Footer/Footer';
import './Review.scss';

function Review() {
  return (
    <>
      <div className="review">
        <Nav />
        <h1 className="reviewHeader">리뷰</h1>
        <hr />
        <BestReviewCarousel />
        <ReviewListContainer />
      </div>
      <Footer />
    </>
  );
}

export default Review;
