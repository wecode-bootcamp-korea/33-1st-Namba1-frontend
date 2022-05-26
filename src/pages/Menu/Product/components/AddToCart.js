import React from 'react';
import './AddToCart.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faMinus,
  faPlus,
  faX,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

const AddToCart = () => {
  return (
    <div className="addToCart">
      <div className="flexRight">
        <p>주문마감시간 오전 7시</p>
        &nbsp;
        <FontAwesomeIcon icon={faCircleQuestion} />
      </div>
      <div className="cartBox">
        <div className="itemHeader">
          <h3 className="itemHeaderTitle">옵션</h3>
          <button className="cancelBtn">
            <FontAwesomeIcon icon={faX} className="cancelIcon" />
          </button>
        </div>
        <div className="itemInput">
          <p className="itemName">단호박크림파스타</p>
          <form className="itemForm">
            <button className="iconBtn">
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <input type="number" className="itemCount" min="1" step="1" />
            <button className="iconBtn">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </form>
          <p className="unitPrice">21,800원</p>
        </div>
      </div>
      <div className="itemTotal">
        <p className="totalAmount">수량 1개</p>
        <p className="totalPrice">21,800원</p>
      </div>
      <div className="cartButtons">
        <button className="heartBtn">
          <FontAwesomeIcon icon={faHeart} className="heartIcon" />
        </button>
        <button className="cartBtn">장바구니 담기</button>
      </div>
    </div>
  );
};

export default AddToCart;
