import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Searchbox.scss';

function Searchbox() {
  return (
    <div className="categorySearchBox">
      <input
        className="searchInput"
        type="text"
        placeholder="메뉴명으로 검색해 주세요."
      />

      <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
    </div>
  );
}

export default Searchbox;
