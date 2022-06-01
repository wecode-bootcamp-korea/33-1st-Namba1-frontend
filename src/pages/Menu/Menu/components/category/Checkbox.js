import React, { useState } from 'react';
import './Checkbox.scss';

function Checkbox({ titleHandler, getCategoryIdx }) {
  const [isMenuAllOpen, setIsMenuAllOpen] = useState(false);
  const [isKidsOpen, setIsKidsOpen] = useState(true);
  const [isNewOpen, setIsNewOpen] = useState(false);
  const [isKoreanOpen, setIsKoreanOpen] = useState(false);
  const [isSpicyOpen, setIsSpicyOpen] = useState(false);

  const menuAllBtnHandler = event => {
    setIsMenuAllOpen(true);
    setIsKidsOpen(false);
    setIsNewOpen(false);
    setIsKoreanOpen(false);
    setIsSpicyOpen(false);
    titleHandler(event);
    getCategoryIdx(event.target.value);
  };

  const kidsBtnHandler = event => {
    setIsKidsOpen(true);
    setIsMenuAllOpen(false);
    setIsNewOpen(false);
    setIsKoreanOpen(false);
    setIsSpicyOpen(false);
    titleHandler(event);
    getCategoryIdx(event.target.value);
  };

  const newBtnHandler = event => {
    setIsNewOpen(true);
    setIsMenuAllOpen(false);
    setIsKidsOpen(false);
    setIsKoreanOpen(false);
    setIsSpicyOpen(false);
    titleHandler(event);
    getCategoryIdx(event.target.value);
  };

  const koreanBtnHandler = event => {
    setIsKoreanOpen(true);
    setIsMenuAllOpen(false);
    setIsKidsOpen(false);
    setIsNewOpen(false);
    setIsSpicyOpen(false);
    titleHandler(event);
    getCategoryIdx(event.target.value);
  };

  const spicyBtnHandler = event => {
    setIsSpicyOpen(true);
    setIsMenuAllOpen(false);
    setIsKidsOpen(false);
    setIsNewOpen(false);
    setIsKoreanOpen(false);
    titleHandler(event);
    getCategoryIdx(event.target.value);
  };

  return (
    <div className="checkbox">
      <ul className="menuCategory">
        <button
          id="menuAll"
          className={`catBtn ${isMenuAllOpen ? 'active' : ''}`}
          onClick={menuAllBtnHandler}
        >
          전체
        </button>
        <button
          className={`catBtn ${isKidsOpen ? 'activated' : ''}`}
          onClick={kidsBtnHandler}
          value="1"
        >
          KIDS
        </button>
        <button
          className={`catBtn ${isNewOpen ? 'activated' : ''}`}
          onClick={newBtnHandler}
          value="2"
        >
          신메뉴
        </button>
        <button
          className={`catBtn ${isKoreanOpen ? 'activated' : ''}`}
          onClick={koreanBtnHandler}
          value="3"
        >
          한식
        </button>
        <button
          className={`catBtn ${isSpicyOpen ? 'activated' : ''}`}
          onClick={spicyBtnHandler}
          value="4"
        >
          매운맛
        </button>
      </ul>
    </div>
  );
}

// const CATEGORY_LIST = [
//   { id: 1, name: 'KIDS', btnHandler: 'kidsBtnHandler' },
//   { id: 2, name: '신메뉴', btnHandler: 'newBtnHandler' },
//   { id: 3, name: '한식', btnHandler: 'koreanBtnHandler' },
//   { id: 4, name: '매운맛', btnHandler: 'spicyBtnHandler' },
//   { id: 5, name: '전체', btnHandler: 'menuAllBtnHandler' },
// ];

export default Checkbox;
