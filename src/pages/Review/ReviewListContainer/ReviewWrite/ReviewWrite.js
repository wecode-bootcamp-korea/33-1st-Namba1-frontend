import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import UserFileImg from './ReviewImg/UserFileImg';
import './ReviewWrite.scss';

const ReviewWrite = ({
  reviewAdd,
  isReviewAdd,
  saveReviewInput,
  saveReviewMenu,
  onCreateReview,
  imageSrc,
  isRemoveImg,
  encodeFileToBase64,
  selectMenu,
  reviewValue,
  saveMenuId,
}) => {
  const [menu, setMenu] = useState([]);
  const [menuSelect, setMenuSelect] = useState('');
  const [show, setShow] = useState(false);

  const outSection = useRef();
  const isDisabled = selectMenu === '' || reviewValue.length < 20;
  const isMenuSelectShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    const escKeyModalClose = e => {
      if (e.keyCode === 27) {
        isReviewAdd(false);
      }
    };
    window.addEventListener('keydown', escKeyModalClose);
    return () => window.removeEventListener('keydown', escKeyModalClose);
  }, [isReviewAdd]);

  useEffect(() => {
    fetch('/data/menu.json')
      .then(res => res.json())
      .then(data => {
        setMenu(data);
      });
  }, [setMenu]);

  return (
    <section className="reviewadd">
      {reviewAdd ? (
        <div
          className="reviewWriteWarp"
          ref={outSection}
          onClick={e => {
            if (outSection.current === e.target) {
              isReviewAdd(false);
            }
          }}
        >
          <div className="reviewWriteFrom">
            <h3 className="reviewWriteHead">리뷰 쓰기</h3>

            <ul
              onClick={isMenuSelectShow}
              className={show ? 'menuSelect show' : 'menuSelect'}
            >
              {menuSelect === '' ? '메뉴를 선택해주세요.' : menuSelect}
              <div className="menuSelectBox">
                {menu.map(({ id, menuName }) => (
                  <li
                    key={id}
                    onClick={e => {
                      e.preventDefault();
                      saveMenuId(id);
                      saveReviewMenu(e.target.innerText);
                      setMenuSelect(e.target.innerText);
                    }}
                  >
                    {menuName}
                  </li>
                ))}
              </div>
            </ul>

            <form className="reviewWriteForm" onSubmit={onCreateReview}>
              <p className="reviewFileTitle">사진 첨부 (선택)</p>
              <p className="reviewFileDesc">
                오늘의집에 올렸던 사진에서 고르거나 새로운 사진을 첨부해주세요.
                (최대 1장)
              </p>

              {imageSrc && (
                <UserFileImg onRemove={isRemoveImg} imageSrc={imageSrc} />
              )}

              <div className="reviewFileUplode">
                <label className="reviewFileUplodeTitle">사진 첨부하기</label>
                <input
                  className="reviewFileUplodeInput"
                  type="file"
                  onChange={e => {
                    encodeFileToBase64(e.target.files[0]);
                  }}
                />
              </div>

              <div className="reviewWrite">
                <label className="userReviewWrite">리뷰 작성</label>
                <textarea
                  onChange={saveReviewInput}
                  placeholder="자세하고 솔직한 리뷰는 다른 고객에게 큰 도움이 됩니다 (최소 20자 이상)"
                  required
                  maxLength="150"
                  minLength="20"
                />
              </div>

              <button className="reviewSubmitBtn" disabled={isDisabled && true}>
                완료
              </button>
            </form>

            <details>
              <summary>Namba1 리뷰 정책</summary>
              <div className="detailsDesc">
                {DETAILS_DESC.map(({ id, detailsDesc }) => (
                  <span key={id} className="detail">
                    {detailsDesc}
                    <br />
                  </span>
                ))}
              </div>
            </details>

            <button className="close" onClick={() => isReviewAdd(false)}>
              <FontAwesomeIcon icon={faX} />
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
};

const DETAILS_DESC = [
  {
    id: 1,
    detailsDesc: '포인트는 최초 작성한 리뷰를 기준으로 지급됩니다.',
  },
  {
    id: 2,
    detailsDesc: `상품과 무관한 내용이나 사진, 동일 문자 반복 등의 부적합한 리뷰는
    사전 경고 없이 삭제 및 포인트 회수될 수 있습니다.`,
  },
  {
    id: 3,
    detailsDesc: `다음과 같은 리뷰의 경우 블라인드 및 통보 없이 삭제 될 수 있으며,
    서비스 이용 약관 제 14조에 따라 처벌 받을 수 있습니다.`,
  },
  {
    id: 4,
    detailsDesc: `1. 리뷰를 작성하는 조건으로 금전적 또는 물질적 대가를 제공받은
    경우`,
  },
  {
    id: 5,
    detailsDesc: `2. 리뷰의 대상 업체 또는 경쟁업체의 관계자이거나 해당 업체와
    개인적/사업적으로 관련 있는 경우`,
  },
  {
    id: 6,
    detailsDesc: `3. 해당 상품에 대한 허위의 내용을 작성한 경우`,
  },
  {
    id: 7,
    detailsDesc: `4. 욕설, 비난 등 업체나 타인에게 불쾌한 내용을 작성한 경우`,
  },
];

export default ReviewWrite;
