import React from 'react';
import MenuInfo from '../../components/Main/MenuInfo';
import './Menu.scss';

const MdMenu = () => {
  return (
    <div className="menu">
      <img
        className="menuLogoPhoto"
        src="/images/main/market.jpg"
        alt="market1"
      />
      <div className="menuList">
        <div className="menuTitle">남바완 메뉴보기</div>
        <MenuInfo />
        <MenuInfo />
      </div>
    </div>
  );
};

export default MdMenu;
