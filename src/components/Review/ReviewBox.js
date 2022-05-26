import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons/faCircleCheck';
import ReviewList from '../../components/Review/ReviewList';
import ReviewAdd from '../../components/Review/ReviewAdd';
import SearchBox from '../../components/Review/SearchBox';
import '../../components/Review/ReviewBox.scss';

const ReviewBox = () => {
  const [review, setReview] = useState([]);
  const [filterReview, setFilterReview] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [reviewAdd, setReviewAdd] = useState(false);

  useEffect(() => {
    fetch('/data/review.json')
      .then(res => res.json())
      .then(data => {
        setReview(data);
        setFilterReview(data);
      });
  }, []);

  const isReviewAdd = () => {
    setReviewAdd(true);
  };

  const searchUser = e => {
    setSearchInput(e.target.value);
    if (searchInput === '') {
      setFilterReview(review);
    }
  };

  const searchReview = e => {
    e.preventDefault();
    const result = filterReview.filter(review => {
      return review.reviewTitle.includes(searchInput);
    });
    setFilterReview(result);
  };

  return (
    <section className="reviewbox">
      <SearchBox searchUser={searchUser} searchReview={searchReview} />

      <div className="reviewListHead">
        <h2 className="reviewSum">리뷰 190,004건(임의)</h2>
        <div className="reviewListRight">
          <button className="reviewAdd" onClick={isReviewAdd}>
            <FontAwesomeIcon icon={faPlus} />
            <span className="reviewAddDesc">리뷰 쓰기</span>
          </button>

          <button className="reviewAdd">
            <FontAwesomeIcon icon={faCircleCheck} size="1.5x" />
            <span className="reviewAddDesc">포토리뷰만 보기</span>
          </button>
        </div>
      </div>
      <hr />

      {reviewAdd && (
        <ReviewAdd reviewAdd={reviewAdd} isReviewAdd={setReviewAdd} />
      )}

      <ReviewList
        searchReview={searchReview}
        review={searchInput === '' ? review : filterReview}
        setReview={setReview}
      />

      <div className="pagination">
        <button>
          <FontAwesomeIcon icon={faAngleLeft} size="1.5x" />
        </button>
        <span className="pages">
          <button className="current">1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
        </span>
        <button>
          <FontAwesomeIcon icon={faAngleRight} size="1.5x" />
        </button>
      </div>
    </section>
  );
};

export default ReviewBox;
