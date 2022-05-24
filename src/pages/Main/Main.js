import React from 'react';
import './Main.scss';

function Main() {
  return (
    <div className="main">
      {/* NAV바 컴포넌트 넣는 부분 */}
      <div className="slideBar">
        <img src="/images/main/meat.jpg" alt="meat" />
      </div>
      <div className="recommend">
        <div className="recommendDrop">
          <div className="drop">
            <select name="taste" id="taste">
              <option value="매콤한맛">매콤한맛</option>
              <option value="매콤한맛">짭짤한맛</option>
              <option value="매콤한맛">새콤한맛</option>
              <option value="매콤한맛">담백한맛</option>
              <option value="매콤한맛">이국적인맛</option>
              <option value="매콤한맛">얼큰한맛</option>
            </select>
          </div>
          <div className="recommendMsg">메뉴</div>
          <div className="recommendMsg">추천드려요</div>
        </div>
        <div className="recommendPhoto">
          <img src="/images/main/salad.jpg" alt="salad" />
        </div>
      </div>
      <div className="newProducts">
        <div className="newProductTitle">신메뉴</div>
        <div className="newProduct">
          <ul className="productItems">
            <li>
              <div>dd</div>
            </li>
            <li>
              <div>dd</div>
            </li>
            <li>
              <div>dd</div>
            </li>
            <li>
              <div>dd</div>
            </li>
            <li>
              <div>dd</div>
            </li>
            <li>
              <div>dd</div>
            </li>
          </ul>
        </div>
      </div>
      <div className="review">리뷰 작성하는 곳입니다.</div>
      <div className="product">
        <div className="menu">남바완 메뉴 들어가는 곳</div>
        <div className="mdMenu">한구님 추천 메뉴 들어가는 곳</div>
      </div>
    </div>
  );
}

export default Main;
