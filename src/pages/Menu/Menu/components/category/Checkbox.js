import React, { useState } from 'react';
import './Checkbox.scss';

function Checkbox({ titleHandler }) {
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
  };

  const kidsBtnHandler = event => {
    setIsKidsOpen(true);
    setIsMenuAllOpen(false);
    setIsNewOpen(false);
    setIsKoreanOpen(false);
    setIsSpicyOpen(false);
    titleHandler(event);
  };

  const newBtnHandler = event => {
    setIsNewOpen(true);
    setIsMenuAllOpen(false);
    setIsKidsOpen(false);
    setIsKoreanOpen(false);
    setIsSpicyOpen(false);
    titleHandler(event);
  };

  const koreanBtnHandler = event => {
    setIsKoreanOpen(true);
    setIsMenuAllOpen(false);
    setIsKidsOpen(false);
    setIsNewOpen(false);
    setIsSpicyOpen(false);
    titleHandler(event);
  };

  const spicyBtnHandler = event => {
    setIsSpicyOpen(true);
    setIsMenuAllOpen(false);
    setIsKidsOpen(false);
    setIsNewOpen(false);
    setIsKoreanOpen(false);
    titleHandler(event);
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
        >
          KIDS
        </button>
        <button
          className={`catBtn ${isNewOpen ? 'activated' : ''}`}
          onClick={newBtnHandler}
        >
          신메뉴
        </button>
        <button
          className={`catBtn ${isKoreanOpen ? 'activated' : ''}`}
          onClick={koreanBtnHandler}
        >
          한식
        </button>
        <button
          className={`catBtn ${isSpicyOpen ? 'activated' : ''}`}
          onClick={spicyBtnHandler}
        >
          매운맛
        </button>
      </ul>
    </div>
  );
}

export default Checkbox;
