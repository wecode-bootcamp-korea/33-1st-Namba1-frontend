import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Searchbox.scss';

function Searchbox({ updateSearchTerms }) {
  const [searchItem, setSearchItem] = useState('');

  const onChangeSearch = event => {
    setSearchItem(event.currentTarget.value);
    updateSearchTerms(event.currentTarget.value);
  };

  return (
    <div className="categorySearchBox">
      <input
        className="searchInput"
        type="text"
        placeholder="메뉴명으로 검색해 주세요."
        value={searchItem}
        onChange={onChangeSearch}
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
    </div>
  );
}

export default Searchbox;
