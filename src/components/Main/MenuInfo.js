import React, { useEffect, useState } from 'react';
import './MenuInfo.scss';

const MenuInfo = () => {
  const [allMenu, setAllMenu] = useState([]);

  useEffect(() => {
    fetch('/data/newProduct.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setAllMenu(data.allMenu);
      });
  }, []);

  return (
    <>
      {allMenu.map(({ id, name, serving, price, image }) => {
        return (
          <div key={id} className="menuInfo">
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
          </div>
        );
      })}
    </>
  );
};

export default MenuInfo;
