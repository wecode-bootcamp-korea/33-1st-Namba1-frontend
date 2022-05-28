import React, { useState, useEffect } from 'react';
import './NewProduct.scss';

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
    <ul className="newProduct">
      {newProduct.map(
        ({ id, productName, productPrice, productImg, servings }) => {
          return (
            <li key={id}>
              <div className="productItem">
                <img className="productImg" src={productImg} alt="meat" />
                <div className="productName">{productName}</div>
                <div className="productPrice">
                  {productPrice}
                  <span className="productServings"> / {servings}</span>
                </div>
              </div>
            </li>
          );
        }
      )}
    </ul>
  );
};

export default NewProduct;
