import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons/faCircleCheck';
import ReviewList from '../../components/Review/ReviewList';
import ReviewAdd from '../../components/Review/ReviewAdd';
import '../../components/Review/ReviewBox.scss';

const ReviewBox = () => {
  return (
    <section className="reviewbox">
      <div className="reviewListHead">
        <h2 className="reviewSum">리뷰 190,004건(임의)</h2>
        <div className="reviewListRight">
          {/* TODO : Link로 리뷰 만들기 창 이동하게 할 것 */}
          <button className="reviewAdd">
            <FontAwesomeIcon icon={faPlus} />
            <span className="reviewAddDesc">리뷰 쓰기</span>
          </button>

          <ReviewAdd />

          <button className="reviewAdd">
            <FontAwesomeIcon icon={faCircleCheck} size="1.5x" />
            <span className="reviewAddDesc">포토리뷰만 보기</span>
          </button>
        </div>
      </div>
      <hr />

      {/* TODO : Component화 */}
      <ReviewList />
      <div className="pagination">
        <button>
          <FontAwesomeIcon icon={faAngleLeft} size="1.5x" />
        </button>
        {/* TODO : 현재페이지 / 페이지합계 기능 구형 할 것 */}
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
