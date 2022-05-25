import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Arrows = ({ prevSlide, nextSlide }) => {
  return (
    <div className="arrows">
      <button className="paginationBtn" onClick={prevSlide}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      {/* 현재페이지 */}
      <span className="pagenation">1 / 5</span>
      <button className="paginationBtn" onClick={nextSlide}>
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
};

export default Arrows;
