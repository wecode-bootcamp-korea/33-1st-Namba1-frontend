import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../../components/Review/SearchBox.scss';

const SearchBox = () => {
  return (
    <section className="searchBox">
      {/* TODO : 검색어 필터 구현 */}
      <form className="searchForm">
        <input
          className="search"
          type="text"
          placeholder="검색어를 입력해주세요"
        />
        <button class="searchBtn">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
        </button>
      </form>
    </section>
  );
};

export default SearchBox;
