import React, { useState, useEffect } from 'react';
import MenuInfo from './MenuInfo.js';
import './Menu.scss';

const Menu = ({ title, src, className, ip }) => {
  const [allMenuList, setAllMenuList] = useState([]);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch(`http://${ip}/products`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setAllMenuList(data.product_list);
      });
  }, [ip]);

  useEffect(() => {
    fetch('/data/newProduct.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductList(data.product_list);
      });
  }, []);

  return (
    <div className="allMenu">
      <img className="menuLogoPhoto" src={src} alt="market" />
      <div className="menuList">
        <div className="menuTitle">{title}</div>
        {className === 'menu1'
          ? allMenuList.map(({ id, name, serving, price, image }) => (
              <MenuInfo
                key={id}
                id={id}
                name={name}
                serving={serving}
                price={price}
                image={image}
              />
            ))
          : productList.map(({ id, name, serving, price, image }) => (
              <MenuInfo
                key={id}
                id={id}
                name={name}
                serving={serving}
                price={price}
                image={image}
              />
            ))}
      </div>
    </div>
  );
};

export default Menu;
