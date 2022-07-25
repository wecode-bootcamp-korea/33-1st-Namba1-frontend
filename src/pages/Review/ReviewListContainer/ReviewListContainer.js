import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons/faCircleCheck';
import ReviewListSearchBox from './ReviewListSearchBox/ReviewListSearchBox';
import ReviewWrite from './ReviewWrite/ReviewWrite';
import ReviewList from './ReviewList/ReviewList';
import ReviewListPagination from './ReviewListPagination/ReviewListPagination';
import './ReviewListContainer.scss';
import API from '../../../config';

const ReviewListContainer = () => {
  const [reviewList, setReviewList] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [reviewWriteForm, setReviewWriteForm] = useState(false);
  const [reviewValue, setreviewValue] = useState([]);
  const [selectMenu, setSelectMenu] = useState([]);
  const [imageSrc, setImageSrc] = useState('');
  const [selectMenuId, setSelectMenuId] = useState([]);
  const [totalReview, setTotalReview] = useState(0);
  const [isPhotoFilter, setIsPhotoFilter] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const limit = 10;

  const saveReviewInput = e => {
    setreviewValue(e.target.value);
  };

  const saveReviewMenu = target => {
    setSelectMenu(target);
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

  const onCreateReview = e => {
    fetch(`${API.review}`, {
      method: 'POST',
      body: JSON.stringify({
        title: selectMenu,
        product_id: selectMenuId,
        userInput: reviewValue,
      }),
    })
      .then(res => res.json())
      .then(data => {
        setReviewList(data);
      });
  };

  const isReviewAdd = () => {
    setReviewWriteForm(true);
  };

  useEffect(() => {
    fetch(`${API.review}${location.search}`)
      .then(res => res.json())
      .then(data => {
        setTotalReview(data.total_review);
        setReviewList(data.review_list);
      });
  }, [location.search]);

  const getButtonIndex = buttonIndex => {
    const offset = (buttonIndex - 1) * limit;
    const queryString = `?offset=${offset}&limit=${limit}`;
    navigate(queryString);
  };

  useEffect(() => {
    fetch(`${API.review}${location.search}`)
      .then(res => res.json())
      .then(data => {
        setReviewList(data.review_list);
      });
  }, [location.search]);

  const getSearchInput = Input => {
    setSearchInput(Input);
  };

  const getSearchInputValue = e => {
    e.preventDefault();
    const queryString = `?search=${searchInput}`;
    navigate(queryString);
  };

  useEffect(() => {
    fetch(`${API.review}${location.search}`)
      .then(res => res.json())
      .then(data => {
        setReviewList(data.review_list);
      });
  }, [location.search]);

  const handlePhotoFilter = e => {
    e.preventDefault();
    setIsPhotoFilter(!isPhotoFilter);
    if (!location.search) {
      const queryString = `?photo=http`;
      navigate(queryString);
    } else {
      navigate('/review');
    }
  };

  return (
    <section className="reviewbox">
      <ReviewListSearchBox
        getSearchInput={getSearchInput}
        getSearchInputValue={getSearchInputValue}
      />

      <div className="reviewListHead">
        <h2 className="reviewSum">리뷰 {totalReview}건</h2>
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

      {reviewWriteForm && (
        <ReviewWrite
          reviewAdd={reviewWriteForm}
          isReviewAdd={setReviewWriteForm}
          setReview={setReviewList}
          reviewValue={reviewValue}
          setreviewValue={setreviewValue}
          saveReviewInput={saveReviewInput}
          onCreateReview={onCreateReview}
          saveReviewMenu={saveReviewMenu}
          imageSrc={imageSrc}
          isRemoveImg={isRemoveImg}
          encodeFileToBase64={encodeFileToBase64}
          selectMenu={selectMenu}
          saveMenuId={saveMenuId}
        />
      )}

      <ReviewList review={reviewList} />

      <ReviewListPagination
        total={totalReview}
        limit={limit}
        getButtonIndex={getButtonIndex}
      />
    </section>
  );
};

export default ReviewListContainer;
