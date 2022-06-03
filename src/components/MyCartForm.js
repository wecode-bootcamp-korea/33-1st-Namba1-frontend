import React from 'react';
import './MyCartForm.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faX } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import Nav from './Nav/Nav';

function MyCartForm({
  productList,
  handleCountMinus,
  count,
  handleCountUpdate,
}) {
  return (
    <>
      <Nav />
      <div>
        <p className="foodList1">
          <FontAwesomeIcon icon={faCircleCheck} />
          <span className="firstItem">
            <img
              className="foodPhoto1"
              src={productList && productList[0].img}
              alt="curry"
            />
          </span>
          <div className="food1">
            <p className="soldOut">품절임박 6개</p>
            <p className="foodName">햇반과 쿵팟퐁커리</p>
            <p>27,800원</p>
          </div>
          <div className="boxBtn">
            <button
              type="button"
              className="btnAmountMinus"
              disabled={count === 1}
              onClick={handleCountMinus}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span className="numberCount">{count}</span>
            <button
              type="button"
              className="btnAmountPlus"
              onClick={handleCountUpdate}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <div className="foodPrice">
            <p>27,800원</p>
          </div>
          <button type="button" class="deleteBtn">
            <FontAwesomeIcon icon={faX} />
          </button>
        </p>
      </div>
    </>
  );
}

export default MyCartForm;
