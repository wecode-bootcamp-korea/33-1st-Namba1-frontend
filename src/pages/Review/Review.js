import React from 'react';
import './Review.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faMagnifyingGlass,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons/faCircleCheck';

function Review() {
  return (
    <div className="review">
      <h1>리뷰</h1>
      <hr />
      <section className="bestReview">
        {/* Todo : 수동 슬라이드 기능 구현 */}
        <div className="bestSilderWarp">
          {/* silder 1 */}
          <div className="reviewSilder">
            <div className="bestReviewImg">
              <div className="bestBg">
                <span>Best</span>
              </div>
              <img src="images/review/food1.jpg" alt="d" />
            </div>
            <h2 className="reviewTitle">버섯강된장과 간장불고기(임시)</h2>
            <div className="starBox">
              <span className="star">★★★★★</span>
              {/* Todo : id 3글자 이후 * 처리 */}
              <span>lem***</span>
            </div>
            <p>
              저번에 먹고 맛있어서 재구매했어요. 조리도 간단하고 정말 맛있어요.
              쌈 싸먹기 너무 좋고 강된장이 전혀 안짜서 많이 퍼먹기 좋아요.
            </p>
          </div>
          {/* silder 2 */}
          <div className="reviewSilder">
            <div className="bestReviewImg">
              <div className="bestBg">
                <span>Best</span>
              </div>
              <img src="images/review/food2.jpg" alt="d" />
            </div>
            <h2 className="reviewTitle">버섯강된장과 간장불고기(임시)</h2>
            <div className="starBox">
              <span className="star">★★★★★</span>
              {/* Todo : id 3글자 이후 * 처리 */}
              <span>lem***</span>
            </div>
            <p>
              저번에 먹고 맛있어서 재구매했어요. 조리도 간단하고 정말 맛있어요.
              쌈 싸먹기 너무 좋고 강된장이 전혀 안짜서 많이 퍼먹기 좋아요.
            </p>
          </div>
          {/* silder 3 */}
          <div className="reviewSilder">
            <div className="bestReviewImg">
              <div className="bestBg">
                <span>Best</span>
              </div>
              <img src="images/review/food3.jpg" alt="d" />
            </div>
            <h2 className="reviewTitle">버섯강된장과 간장불고기(임시)</h2>
            <div className="starBox">
              <span className="star">★★★★★</span>
              {/* Todo : id 3글자 이후 * 처리 */}
              <span>lem***</span>
            </div>
            <p>
              저번에 먹고 맛있어서 재구매했어요. 조리도 간단하고 정말 맛있어요.
              쌈 싸먹기 너무 좋고 강된장이 전혀 안짜서 많이 퍼먹기 좋아요.
            </p>
          </div>
        </div>
        {/* Todo : 슬라이드 페이지네이션 구현 */}
        <div className="pagination">
          <button className="prev">
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          {/* 현재페이지 / 페이지합계 */}
          <span className="pagenation">1 / 5</span>
          <button className="next">
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </section>

      {/* Todo : 검색어 필터 구현 */}
      <section className="searchBox">
        <form>
          <input type="text" placeholder="검색어를 입력해주세요" />
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
          </button>
        </form>
      </section>

      <section className="reviewList">
        <div className="reviewListHead">
          <h2>리뷰 190,004건(임의)</h2>
          <div className="reviewListRight">
            {/* Todo : Link로 리뷰 만들기 창 이동하게 할 것 */}
            <button className="reviewAdd">
              <FontAwesomeIcon icon={faPlus} />
              <span>리뷰 쓰기</span>
            </button>

            <section className="revieWrite">
              <div className="reviewWriteWarp">
                <h3>리뷰 쓰기</h3>
                <select name="상품선택">
                  <option value="1">단호박크림파스타</option>
                  <option value="2">토마토비프스튜</option>
                  <option value="3">소고시듬뿍잡채</option>
                  <option value="4">매운 치즈순살찜닭</option>
                  <option value="5">수삼양지수육전골</option>
                  <option value="6">비빔국수와 양지수육</option>
                  <option value="7">닭한마리와 칼국수</option>
                  <option value="8">고추장수제비와 배추전</option>
                  <option value="9">붕장어전골과 구이</option>
                  <option value="10">장어파김치전골</option>
                  <option value="11">스파이시 치킨크림스튜</option>
                  <option value="12">눈꽃치즈닭갈비</option>
                </select>
                <form>
                  <p className="reviewFileTitle">사진 첨부 (선택)</p>
                  <p>
                    오늘의집에 올렸던 사진에서 고르거나 새로운 사진을
                    첨부해주세요. (최대 1장)
                  </p>

                  <div className="reviewFileUplode">
                    <label>사진 첨부하기</label>
                    <input type="file" />
                  </div>

                  <div className="review">
                    <label>리뷰 작성</label>
                    <textarea
                      placeholder="자세하고 솔직한 리뷰는 다른 고객에게 큰 도움이 됩니다 (최소 20자 이상)"
                      required
                      maxLenth="200"
                      minLength="20"
                    />
                  </div>

                  <button>완료</button>
                </form>

                <details>
                  <summary>Namba1 리뷰 정책</summary>
                  <div>
                    <span>
                      포인트는 최초 작성한 리뷰를 기준으로 지급됩니다.
                    </span>
                    <br />
                    <span>
                      상품과 무관한 내용이나 사진, 동일 문자 반복 등의 부적합한
                      리뷰는 사전 경고 없이 삭제 및 포인트 회수될 수 있습니다.
                    </span>
                    <br />
                    <span>
                      다음과 같은 리뷰의 경우 블라인드 및 통보 없이 삭제 될 수
                      있으며, 서비스 이용 약관 제 14조에 따라 처벌 받을 수
                      있습니다.
                    </span>
                    <br />
                    <span>
                      1. 리뷰를 작성하는 조건으로 금전적 또는 물질적 대가를
                      제공받은 경우
                    </span>
                    <br />

                    <span>
                      2. 리뷰의 대상 업체 또는 경쟁업체의 관계자이거나 해당
                      업체와 개인적/사업적으로 관련 있는 경우
                    </span>
                    <br />

                    <span>3. 해당 상품에 대한 허위의 내용을 작성한 경우</span>
                    <span>
                      <br />
                      4. 욕설, 비난 등 업체나 타인에게 불쾌한 내용을 작성한 경우
                    </span>
                  </div>
                </details>
              </div>
            </section>

            <button>
              <FontAwesomeIcon icon={faCircleCheck} size="1.5x" />
              <span>포토리뷰만 보기</span>
            </button>
          </div>
        </div>
        <hr />

        {/* Todo : Component화 */}
        <ul>
          {/* 포토 리뷰일 경우 & 아닐 경우 */}
          <li className="포토리뷰아님">
            <div className="reviewHead">
              <h3>찜양식 어복쟁반</h3>
              <span>2022-05-23</span>
            </div>
            <div className="starBox">
              <span className="star">★★★★★</span>
              <span>|</span>
              {/* 3글자만 보이고 별처리 */}
              <span>lem***</span>
            </div>
            <p>솔직히 기대안하고 주문했는데 어지간한 식당보다 맛있어요</p>
          </li>
          <li className="포토리뷰">
            <div className="reviewHead">
              <h3>찜양식 어복쟁반</h3>
              <span>2022-05-23</span>
            </div>
            <div className="starBox">
              <span className="star">★★★★★</span>
              <span>|</span>
              {/* 3글자만 보이고 별처리 */}
              <span>lem***</span>
            </div>
            <div className="reviewBoxWrap">
              <div className="reviewImgWrap">
                <img src="images/review/food4.jpg" alt="d" />
              </div>
              <div>
                맛있게 잘 먹었는데 중학생 애는 고기가 간이 안뱄다고
                별로라고해요. 약간 심심한 맛인데 안짜서 더 좋아요
                <div className="tipBox">
                  <span className="tipHead" style={{ fontWeight: 700 }}>
                    Tip
                  </span>
                  <p className="tipDesc">쌈채소 준비해서 같이 드세보세요</p>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <div className="pagination">
          <button className="prev">
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          {/* 현재페이지 / 페이지합계 */}
          <span className="pages">
            <button className="current">1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            {/* 이거 어떻게...? */}
          </span>
          <button className="next">
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </section>

      <button className="topBtn">Top</button>
    </div>
  );
}

export default Review;
