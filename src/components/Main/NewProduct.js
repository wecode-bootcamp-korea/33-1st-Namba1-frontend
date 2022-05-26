import React, { useState, useEffect } from 'react';
import './NewProduct.scss';

const NewProduct = () => {
  const [newProduct, setNewProduct] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/newProduct.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setNewProduct(data);
      });
  });

  return (
    <ul className="productItems">
      {newProduct.map(newProduct => {
        return (
          <li key={newProduct.id}>
            <div className="productItem">
              <img
                className="productImg"
                src={newProduct.productImg}
                alt="meat"
              />
              <div className="productName">{newProduct.productName}</div>
              <div className="productPrice">
                {newProduct.productPrice}
                <span className="productServings">
                  {' '}
                  / {newProduct.servings}
                </span>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default NewProduct;
