import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './NewProducts.scss';

const NewProduct = () => {
  const [newProduct, setNewProduct] = useState([]);

  useEffect(() => {
    fetch('/data/newProduct.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setNewProduct(data);
      });
  });

  return (
    <div className="newProducts">
      {newProduct.map(
        ({ id, productName, productPrice, productImg, servings }) => {
          return (
            <div key={id} className="newProduct">
              <div className="productImgBox">
                <img className="productImg" src={productImg} alt="meat" />
              </div>
              <div className="productContent">
                <div className="productInfo">
                  <div className="productName">{productName}</div>
                  <div className="productPrice">
                    {productPrice} 원
                    <span className="productServings"> / {servings}인분</span>
                  </div>
                </div>
                <button className="productCart">
                  <FontAwesomeIcon icon={faCartShopping} className="cartIcon" />
                </button>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default NewProduct;
