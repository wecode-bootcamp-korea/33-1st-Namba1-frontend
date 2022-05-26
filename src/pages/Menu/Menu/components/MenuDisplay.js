import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faHeart,
  faPepperHot,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import './MenuDisplay.scss';

const MenuDisplay = ({
  name,
  servings,
  cookTime,
  spice,
  price,
  totalReviews,
  image,
}) => {
  return (
    <div className="menuDisplay">
      <img className="image" src={image} alt={name} />
      <div className="prep">
        <p>{servings}인분</p>
        <p className="middle">조리 {cookTime}분</p>
        <p>{spice} 매운맛</p>
        <FontAwesomeIcon icon={faPepperHot} className="hot" />
      </div>
      <p className="productName">{name}</p>
      <p className="productPrice">
        <span className="price">{price}</span>원
      </p>
      <div className="customerReview">
        <div className="stars">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
        <p className="review">
          리뷰 <span className="reviewAmount">{totalReviews}</span>
        </p>
      </div>
      <div className="customerLike">
        <button className="faHeart">
          <FontAwesomeIcon icon={faHeart} className="icon" />
        </button>
        <button className="faCart">
          <FontAwesomeIcon icon={faCartShopping} className="icon" />
        </button>
      </div>
    </div>
  );
};

export default MenuDisplay;
