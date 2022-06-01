import React, { useState } from 'react';
import './Order.scss';

const Order = ({ title, getOrderIdx }) => {
  const [newBtn, setNewBtn] = useState(true);
  const [highBtn, setHighBtn] = useState(false);
  const [lowBtn, setLowBtn] = useState(false);

  const newHandler = e => {
    setNewBtn(true);
    setHighBtn(false);
    setLowBtn(false);
    getOrderIdx(e.target.innerHTML);
  };

  const hPriceHandler = e => {
    setHighBtn(true);
    setNewBtn(false);
    setLowBtn(false);
    getOrderIdx(e.target.innerHTML);
  };

  const lPriceHandler = e => {
    setLowBtn(true);
    setNewBtn(false);
    setHighBtn(false);
    getOrderIdx(e.target.innerHTML);
  };

  return (
    <div className="order">
      <h1 className="title">#{title} 추천 메뉴입니다.</h1>
      <div className="content">
        <div className="description">
          NAMBA1KIT의 주문 마감은 오전 7시입니다.
        </div>
        <ul className="filterList">
          <button
            type="button"
            onClick={newHandler}
            className={`button ${newBtn ? 'active' : ''}`}
          >
            신메뉴
          </button>
          <button
            type="button"
            className={`button border ${highBtn ? 'active' : ''}`}
            onClick={hPriceHandler}
          >
            높은 가격순
          </button>
          <button
            type="button"
            className={`button ${lowBtn ? 'active' : ''}`}
            onClick={lPriceHandler}
          >
            낮은 가격순
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Order;
