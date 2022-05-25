import React from 'react';
import './MenuInfo.scss';

const MenuInfo = () => {
  return (
    <div className="itemInfo">
      <div className="menuPhotoBox">
        <img className="menuPhoto" src="/images/main/salad.jpg" alt="salad" />
      </div>
      <div className="menuInfo">
        <div className="menuName">단호박크림파스타</div>
        <div className="menuPrice">
          22800 / <span>1</span>
        </div>
      </div>
    </div>
  );
};

export default MenuInfo;
