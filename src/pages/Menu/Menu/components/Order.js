import React from 'react';
import './Order.scss';

const Order = ({ title }) => {
  return (
    <div className="order">
      <h1 className="title">#{title} 추천 메뉴입니다.</h1>
      <div className="content">
        <div className="description">
          NAMBA1KIT의 주문 마감은 오전 7시입니다.
        </div>
        <ul className="filterList">
          <li>신메뉴</li>
          <li className="border">높은 가격순</li>
          <li>낮은 가격순</li>
        </ul>
      </div>
    </div>
  );
};

export default Order;
