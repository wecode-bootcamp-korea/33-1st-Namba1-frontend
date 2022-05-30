import React from 'react';
import MenuInfo from '../../components/Main/MenuInfo';
import './Menu.scss';

const Menu = ({ title, src, className }) => {
  return (
    <div className="menu">
      <img className="menuLogoPhoto" src={src} alt="market" />
      <div className="menuList">
        <div className="menuTitle">{title}</div>
        {/* TO DO : 백엔드 데이터에 따라서 다른 내용을 보이고 싶음 */}
        {className === 'menu1' ? (
          <MenuInfo mockdataName="allMenu" />
        ) : (
          <MenuInfo mockdataName="product_list" />
        )}
      </div>
    </div>
  );
};

export default Menu;
