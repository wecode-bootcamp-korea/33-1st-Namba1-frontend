import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Searchbox.scss';

function Searchbox({ updateSearchTerms }) {
  const [searchItem, setSearchItem] = useState('');

  const onChangeSearch = event => {
    setSearchItem(event.target.value);
  };

  return (
    <form
      className="categorySearchBox"
      onSubmit={e => {
        e.preventDefault();
        updateSearchTerms(searchItem);
      }}
    >
      <input
        className="searchInput"
        type="text"
        placeholder="메뉴명으로 검색해 주세요."
        value={searchItem}
        onChange={onChangeSearch}
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
    </form>
  );
}

export default Searchbox;
