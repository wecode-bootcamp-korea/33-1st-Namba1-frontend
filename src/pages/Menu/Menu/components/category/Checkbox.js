import React from 'react';
import './Checkbox.scss';

function Checkbox() {
  return (
    <div className="checkbox">
      <ul className="menuCategory">
        <button id="menuAll" className="catBtn">
          전체
        </button>
        <button className="catBtn">KIDS</button>
        <button className="catBtn">신메뉴</button>
        <button className="catBtn">한식</button>
        <button className="catBtn">매운맛</button>
      </ul>
    </div>
  );
}

export default Checkbox;
