import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faHeart,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import './MenuCard.scss';

const MenuCard = ({ id, name, serving, cookTime, spice, price, image }) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="menuCard">
      <img className="image" src={image} alt={name} onClick={goToDetail} />

      <div className="prep">
        <p className="first">{`${serving}인분`}</p>
        <p className="second">조리 {cookTime}분</p>
        <p className="third">{spice === true ? `${spice} 매운맛` : null}</p>
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

export default MenuCard;
