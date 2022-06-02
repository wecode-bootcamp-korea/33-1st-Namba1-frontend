import React, { useState } from 'react';
import './AddToCart.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faMinus,
  faPlus,
  faHeart,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';

const AddToCart = ({ price, name }) => {
  const [isOptionOpen, setIsOptionOpen] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const closeHandler = () => {
    setIsOptionOpen(!isOptionOpen);
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
        <FontAwesomeIcon icon={faCircleQuestion} className="questionIcon" />
      </div>

      <div className="cartBox">
        <div className={`itemHeader ${isOptionOpen ? 'active' : ''}`}>
          <h3 className="itemHeaderTitle">옵션</h3>
          <button className="cancelBtn" type="button" onClick={closeHandler}>
            <FontAwesomeIcon icon={faChevronDown} className="cancelIcon" />
          </button>
        </div>

        {isOptionOpen ? (
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
            <p className="unitPrice">{price.toLocaleString()}원</p>
          </div>
        ) : null}
      </div>

      <div className="itemTotal">
        <p className="totalAmount">{`수량 ${quantity}개`}</p>
        <p className="totalPrice">
          {(quantity * (price ?? 0)).toLocaleString()}원
        </p>
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
