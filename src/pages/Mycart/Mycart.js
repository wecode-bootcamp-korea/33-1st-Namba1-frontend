import React from 'react';
import './Mycart.scss';
import { useState, useEffect } from 'react';
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
import MyCartForm from './MyCartForm';
const Mycart = () => {
  const [count, setCount] = useState(1);
  const [productList, setProductList] = useState();

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleCountMinus = () => {
    setCount(count - 1);
  };
  useEffect(() => {
    fetch('/data/mycart.json')
      .then(res => res.json())
      .then(data => {
        setProductList(data);
      });
  }, []);

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

            <MyCartForm
              productList={productList}
              handleCountMinus={handleCountMinus}
              count={count}
              handleCountUpdate={handleCountUpdate}
            />
            <MyCartForm
              productList={productList}
              handleCountMinus={handleCountMinus}
              count={count}
              handleCountUpdate={handleCountUpdate}
            />
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

const MYCART_LIST = [
  {
    id: '1',
    img: 'https://images.unsplash.com/photo-1545247181-516773cae754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    price: '28,000원',
    count: '1',
  },
];

export default Mycart;
