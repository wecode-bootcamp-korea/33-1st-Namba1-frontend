import React from 'react';
import './MyCartForm.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faX } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';

function MyCartForm() {
  return (
    <div>
      <p className="foodList1">
        <FontAwesomeIcon icon={faCircleCheck} />
        <span className="firstItem">
          <img
            className="foodPhoto1"
            src="/images/menu/쿵팟퐁커리.png"
            alt="curry"
          />
        </span>
        <div className="food1">
          <p className="soldOut">품절임박 6개</p>
          <p className="foodName">햇반과 쿵팟퐁커리</p>
          <p>27,800원</p>
        </div>
        <div className="boxBtn">
          <button type="button" class="btnAmountMinus">
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className="numberCount">숫자</span>
          <button type="button" class="btnAmountPlus">
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
  );
}

export default MyCartForm;
