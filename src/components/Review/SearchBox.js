import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../../components/Review/SearchBox.scss';

const SearchBox = ({ searchUser, searchReview }) => {
  return (
    <section className="searchBox">
      <form className="searchForm">
        <input
          onChange={searchUser}
          className="search"
          type="text"
          placeholder="검색어를 입력해주세요"
        />
        <button className="searchBtn" onClick={searchReview}>
          <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
        </button>
      </form>
    </section>
  );
};

export default SearchBox;
