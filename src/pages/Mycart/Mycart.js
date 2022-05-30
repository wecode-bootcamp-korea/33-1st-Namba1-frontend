import React from 'react';
import './Mycart.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faReceipt } from '@fortawesome/free-solid-svg-icons';
import {
  faCreditCard,
  faCircleCheck,
} from '@fortawesome/free-regular-svg-icons';
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
                <div className="background">
                  <span className="icons">
                    <FontAwesomeIcon icon={faCreditCard} />
                  </span>
                </div>
                <p>주문결제</p>
              </div>
              <div className="checkAccount">
                <div className="background">
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
            <div class="foodContent">
              <p className="foodList">
                <FontAwesomeIcon icon={faCircleCheck} />
              </p>
              <div className="firstItem">
                <img
                  className="foodPhoto"
                  src="/images/menu/쿵팟퐁커리.png"
                  alt="curry"
                />
                <div className="food1">
                  <p>품절임박 6개</p>
                  <p>햇반과 쿵팟퐁커리</p>
                  <p>27,800원</p>
                </div>
              </div>
            </div>
            {/* <div className="boxBtn">
              <button type="button" class="btnAmountMinus" />
              <button type="button" class="btnAmountPlus" />
            </div> */}
            {/* <div className="foodPrice">
              <p>27,800원</p>
            </div> */}

            <p className="foodList2">
              <FontAwesomeIcon icon={faCircleCheck} />
              <span className="secondItem">
                <img
                  className="foodPhoto2"
                  src="/images/menu/쿵팟퐁커리.png"
                  alt="curry"
                />
              </span>
              <div className="food2">
                <p>품절임박 6개</p>
                <p>햇반과 쿵팟퐁커리</p>
                <p>27,800원</p>
              </div>
              <div className="boxBtn">
                <button type="button" class="btnAmountMinus" />
                <button type="button" class="btnAmountPlus" />
              </div>
              <div className="foodPrice">
                <p>27,800원</p>
              </div>
            </p>
          </div>
          <div className="totalPayment">
            <span>
              총 상품금액 <strong>18,800원</strong>
            </span>
            <span className="minus">빼기</span>
            <span className="discount">
              총 할인금액 <strong>0원</strong>
            </span>
            <span className="plus">더하기</span>
            <span className="deliveryFee">
              총 배송비 <strong>3,000원</strong>
            </span>
            <span className="equal">는</span>
            <span className="total">
              총 결제예정금액 <strong>21,800원</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mycart;
