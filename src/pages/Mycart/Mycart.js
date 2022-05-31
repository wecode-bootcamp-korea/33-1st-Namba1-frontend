import React from 'react';
import './Mycart.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faReceipt,
  faMinus,
  faPlus,
  faEquals,
} from '@fortawesome/free-solid-svg-icons';
import {
  faCircleCheck,
  faCreditCard,
} from '@fortawesome/free-regular-svg-icons';
import MyCartForm from '../../components/MyCartForm';
const Mycart = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="container">
          <header>
            <div className="myCart">장바구니</div>

            <div className="cartIcon">
              <div className="myCartIcon">
                <div className="background">
                  <span className="icons">
                    <FontAwesomeIcon icon={faCartShopping} />
                  </span>
                </div>
                <p>장바구니</p>
              </div>

              <div className="paymentIcon">
                <div className="background2">
                  <span className="icons">
                    <FontAwesomeIcon icon={faCreditCard} />
                  </span>
                </div>
                <p>주문결제</p>
              </div>
              <div className="checkAccount">
                <div className="background3">
                  <span className="icons">
                    <FontAwesomeIcon icon={faReceipt} />
                  </span>
                </div>
                <p>주문완료</p>
              </div>
            </div>
          </header>
          <div className="content">
            <p className="checkCount">
              <FontAwesomeIcon icon={faCircleCheck} />
              <span className="deleteItem">
                <button className="deleteBtn">
                  <span>선택삭제</span>
                </button>
                <button className="deleteBtn2">
                  <span>품절/마감 삭제</span>
                </button>
              </span>
            </p>
            <p className="deliveryDate">
              <FontAwesomeIcon icon={faCircleCheck} />
              <span className="delivery">
                <p>2022-06-30(목) 도착예정</p>
              </span>
            </p>
            <MyCartForm />
            <MyCartForm />
          </div>
          <div className="totalPayment">
            <span className="totalPrice">총 상품금액</span>
            <span className="minus">
              <FontAwesomeIcon icon={faMinus} />
            </span>
            <span className="discount">총 할인금액</span>
            <span className="plus">
              <FontAwesomeIcon icon={faPlus} />
            </span>
            <span className="deliveryFee">총 배송비</span>
            <span className="equal">
              <FontAwesomeIcon icon={faEquals} />
            </span>
            <span className="total">총 결제예정금액</span>
          </div>
          <div className="paymentArea">
            <span className="priceArea">10,000원</span>
            <span className="discountArea">2,000원</span>
            <span className="deliveryArea">3,000원</span>
            <span className="totalCount">11,000원</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mycart;
