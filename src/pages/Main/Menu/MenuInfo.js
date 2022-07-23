import React from 'react';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MenuInfo.scss';
import { useNavigate } from 'react-router-dom';

const MenuInfo = ({ id, name, serving, price, image }) => {
  const navigate = useNavigate();

  const goToDetail = id => {
    navigate(`/products/${id}`);
  };

  return (
    <div key={id} className="menuInfo" onClick={() => goToDetail(id)}>
      <div className="menuPhotoBox">
        <img className="menuPhoto" src={image} alt="salad" />
      </div>
      <div className="menuData">
        <div className="menuName">{name}</div>
        <div className="menuPrice">
          {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} /{' '}
          <span>{serving}인분</span>
        </div>
      </div>
      <div className="menuCart">
        <FontAwesomeIcon icon={faCartShopping} />
      </div>
    </div>
  );
};

export default MenuInfo;
