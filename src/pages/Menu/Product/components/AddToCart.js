import React, { useState } from 'react';
import './AddToCart.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faMinus,
  faPlus,
  faX,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

const AddToCart = ({ price, name }) => {
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const closeHandler = () => {
    setIsOptionOpen(false);
  };

  const decreaseQuantity = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity(previous => previous - 1);
  };

  const increaseQuantity = () => {
    setQuantity(previous => previous + 1);
  };

  return (
    <div className="addToCart">
      <div className="flexRight">
        <p>주문마감시간 오전 7시</p>
        &nbsp;
        <FontAwesomeIcon icon={faCircleQuestion} />
      </div>
      <div className="cartBox">
        <div
          className={`itemHeader ${isOptionOpen ? 'active' : ''}`}
          onClick={() => setIsOptionOpen(true)}
        >
          <h3 className="itemHeaderTitle">옵션</h3>
          <button className="cancelBtn">
            <FontAwesomeIcon
              icon={faX}
              className="cancelIcon"
              onClick={closeHandler}
            />
          </button>
        </div>
        <div className="itemInput">
          <p className="itemName">{name}</p>
          <form className="itemForm">
            <div className="iconBtn" onClick={decreaseQuantity}>
              <FontAwesomeIcon icon={faMinus} />
            </div>
            <input
              type="text"
              className="itemCount"
              value={quantity}
              onChange={event => setQuantity(event.target.value)}
            />
            <div className="iconBtn" onClick={increaseQuantity}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </form>
          <p className="unitPrice">{price}원</p>
        </div>
      </div>
      <div className="itemTotal">
        <p className="totalAmount">수량 1개</p>
        <p className="totalPrice">{price}원</p>
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
