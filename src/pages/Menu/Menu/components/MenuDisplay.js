import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faHeart,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import './MenuDisplay.scss';
import { Link } from 'react-router-dom';

const MenuDisplay = ({
  id,
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
      <Link to={`${id}`}>
        <img className="image" src={image} alt={name} />
      </Link>

      <div className="prep">
        <p className="first">{servings}인분</p>
        <p className="second">조리 {cookTime}분</p>
        <p className="third">{!spice ? null : `${spice} 매운맛`}</p>
      </div>
      <p className="productName">{name}</p>
      <p className="productPrice">
        {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
      </p>
      <div className="itemReview">
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
