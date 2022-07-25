import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './NewProducts.scss';
import { useNavigate } from 'react-router-dom';
import API from '../../../config';

const NewProduct = () => {
  const [newProduct, setNewProduct] = useState([]);
  const navigate = useNavigate();

  const goToDetail = id => {
    navigate(`/products/${id}`);
  };

  useEffect(() => {
    fetch(`${API.products}?is_new=1&sort=-id`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setNewProduct(data.product_list);
      });
  }, [API]);

  return (
    <div className="newProducts">
      <h1 className="newProductsTitle">신메뉴</h1>
      <div className="newProductsContainer">
        {newProduct.map(({ id, name, serving, price, image }) => {
          return (
            <div key={id} className="newProduct" onClick={() => goToDetail(id)}>
              <div className="productImgBox">
                <img className="productImg" src={image} alt="meat" />
              </div>
              <div className="newProductContent">
                <div className="newProductInfo">
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
