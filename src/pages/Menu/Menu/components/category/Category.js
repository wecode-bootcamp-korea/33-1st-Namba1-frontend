import React, { useState } from 'react';
import Checkbox from './Checkbox';
import Searchbox from './Searchbox';
import './Category.scss';

const Category = () => {
  const [currentTab, setCurrentTab] = useState(false);

  const currentTabHandler = () => {
    setCurrentTab(true);
  };

  return (
    <div className="category">
      <h1 className="menuTitle">NAMBA1KIT 메뉴</h1>
      <div className="menuNav">
        <div className="flexLeft">
          <button
            type="button"
            className={`menuBtn ${currentTabHandler ? 'active' : ''}`}
            onClick={currentTab}
          >
            테마별
          </button>
          <button
            type="button"
            className={`menuBtn ${currentTabHandler ? 'active' : ''}`}
            onClick={currentTab}
          >
            메뉴검색
          </button>
        </div>
        <div className="flexRight">
          {currentTab ? <Checkbox /> : null}
          {currentTab ? <Searchbox /> : null}
        </div>
      </div>
    </div>
  );
};

export default Category;
