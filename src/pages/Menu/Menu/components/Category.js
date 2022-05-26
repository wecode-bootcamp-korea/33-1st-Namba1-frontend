import React from 'react';
import './Category.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const Category = () => {
  return (
    <div className="category">
      <h1 className="menuTitle">NAMBA1KIT 메뉴</h1>
      <div className="menuNav">
        <div className="flexLeft">
          <h3 className="menutheme">테마별</h3>
          <h3 className="menuSearch">메뉴검색</h3>
        </div>
        <div className="flexRight">
          <h3 className="menuAll">전체</h3>
          <ul className="menuCategory">
            <li>KIDS</li>
            <li>신메뉴</li>
            <li>한식</li>
            <li>매운맛</li>
          </ul>
          <button className="categoryBtn">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="categoryBtn">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
