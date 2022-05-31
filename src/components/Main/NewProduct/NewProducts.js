import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './NewProducts.scss';

const NewProduct = () => {
  const [newProduct, setNewProduct] = useState([]);

  // ******* server data *******
  // useEffect(() => {
  //   fetch('http://10.58.0.209:8000/main', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setNewProduct(data.newMenu);
  //     });
  // }, []);

  // ******* mock data *******
  useEffect(() => {
    fetch('/data/newProduct.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setNewProduct(data.newMenu);
      });
  }, []);

  return (
    <div className="newProducts">
      <h1 className="newProductsTitle">신메뉴</h1>
      <div className="newProductsContainer">
        {newProduct.map(({ id, name, serving, price, image }) => {
          return (
            <div key={id} className="newProduct">
              <div className="productImgBox">
                <img className="productImg" src={image} alt="meat" />
              </div>
              <div className="productContent">
                <div className="productInfo">
                  <div className="productName">{name}</div>
                  <div className="productPrice">
                    {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 원
                    <span className="productServings"> / {serving}인분</span>
                  </div>
                </div>
                <button className="productCart">
                  <FontAwesomeIcon icon={faCartShopping} className="cartIcon" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewProduct;
