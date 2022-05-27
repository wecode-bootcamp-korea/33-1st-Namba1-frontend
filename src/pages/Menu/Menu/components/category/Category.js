import React, { useState } from 'react';
import Checkbox from './Checkbox';
import Searchbox from './Searchbox';
import './Category.scss';

const Category = () => {
  const [isCheckboxOpen, setIsCheckboxOpen] = useState(false);
  const [isSearchboxOpen, setIsSearchboxOpen] = useState(false);

  const checkboxHandler = () => {
    setIsCheckboxOpen(true);
    setIsSearchboxOpen(false);
  };

  const searchboxHandler = () => {
    setIsSearchboxOpen(true);
    setIsCheckboxOpen(false);
  };

  return (
    <div className="category">
      <h1 className="menuTitle">NAMBA1KIT 메뉴</h1>
      <div className="menuNav">
        <div className="flexLeft">
          <button
            type="button"
            className={`menuBtn ${isCheckboxOpen ? 'active' : ''}`}
            onClick={checkboxHandler}
          >
            테마별
          </button>
          <button
            type="button"
            className={`menuBtn ${isSearchboxOpen ? 'active' : ''}`}
            onClick={searchboxHandler}
          >
            메뉴검색
          </button>
        </div>
        <div className="flexRight">
          {isCheckboxOpen ? <Checkbox /> : null}
          {isSearchboxOpen ? <Searchbox /> : null}
        </div>
      </div>
    </div>
  );
};

export default Category;
