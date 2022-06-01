import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons/faCircleCheck';
import ReviewList from '../../components/Review/ReviewList';
import ReviewAdd from '../../components/Review/ReviewAdd';
import SearchBox from '../../components/Review/SearchBox';
import Pagination from './Pagination';
import '../../components/Review/ReviewBox.scss';

const ReviewBox = () => {
  const [review, setReview] = useState([]);
  const [filterReview, setFilterReview] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [reviewAddForm, setReviewAddForm] = useState(false);
  const [reviewValue, setreviewValue] = useState([]);
  const [selectMenu, setSelectMenu] = useState([]);
  const [imageSrc, setImageSrc] = useState('');
  const [filterPhoto, setFilterPhoto] = useState([]);
  const [isPhotoFilter, setIsFilterPhoto] = useState(false);

  const limit = 10;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const [selectMenuId, setSelectMenuId] = useState([]);

  const saveReviewInput = e => {
    setreviewValue(e.target.value);
  };

  const saveReviewMenu = e => {
    setSelectMenu(e.target.innerText);
  };

  const saveMenuId = id => {
    setSelectMenuId(id);
  };

  const isRemoveImg = () => {
    setImageSrc(false);
  };

  const encodeFileToBase64 = fileBlob => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise(resolve => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  const onCreatReview = e => {
    e.preventDefault();
    fetch('http://10.58.0.124:8000/review', {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json',
      //   Authorization: {
      //     token:
      //       'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0._pGlNZURO02GzlHrkrhDPddS5h45SazlACojxI18QcA',
      //   },                                                                  6
      // },
      body: JSON.stringify({
        title: selectMenu,
        product_id: selectMenuId,
        userInput: reviewValue,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };

  useEffect(() => {
    fetch('/data/review.json')
      .then(res => res.json())
      .then(data => {
        setReview(data);
        setFilterReview(data);
      });
  }, []);

  useEffect(() => {
    fetch('/data/photoReview.json')
      .then(res => res.json())
      .then(data => {
        setFilterPhoto(data);
      });
  }, []);

  const isReviewAdd = () => {
    setReviewAddForm(true);
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
      return review.title.includes(searchInput);
    });
    setFilterReview(result);
  };

  const handlePhotoFilter = () => {
    setIsFilterPhoto(current => !current);
  };

  return (
    <section className="reviewbox">
      <SearchBox searchUser={searchUser} searchReview={searchReview} />

      <div className="reviewListHead">
        <h2 className="reviewSum">리뷰 {review.length}건</h2>
        <div className="reviewListRight">
          <button className="reviewAdd" onClick={isReviewAdd}>
            <FontAwesomeIcon icon={faPlus} />
            <span className="reviewAddDesc">리뷰 쓰기</span>
          </button>

          <button className="reviewAdd" onClick={handlePhotoFilter}>
            <FontAwesomeIcon
              icon={isPhotoFilter ? faPlusCircle : faCircleCheck}
              size="1.5x"
            />
            <span className="reviewAddDesc">포토리뷰만 보기</span>
          </button>
        </div>
      </div>
      <hr />

      {reviewAddForm && (
        <ReviewAdd
          reviewAdd={reviewAddForm}
          isReviewAdd={setReviewAddForm}
          setReview={setReview}
          reviewValue={reviewValue}
          setreviewValue={setreviewValue}
          saveReviewInput={saveReviewInput}
          onCreatReview={onCreatReview}
          saveReviewMenu={saveReviewMenu}
          imageSrc={imageSrc}
          isRemoveImg={isRemoveImg}
          encodeFileToBase64={encodeFileToBase64}
          selectMenu={selectMenu}
          saveMenuId={saveMenuId}
        />
      )}

      {isPhotoFilter ? (
        <ReviewList
          offset={offset}
          limit={limit}
          searchReview={searchReview}
          review={filterPhoto}
          setReview={setReview}
          imageSrc={imageSrc}
        />
      ) : (
        <ReviewList
          offset={offset}
          limit={limit}
          searchReview={searchReview}
          review={searchInput === '' ? review : filterReview}
          setReview={setReview}
          imageSrc={imageSrc}
        />
      )}

      <Pagination
        total={review.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </section>
  );
};

export default ReviewBox;
