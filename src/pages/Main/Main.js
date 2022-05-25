import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Main.scss';
import Menu from '../../components/Main/Menu';

function Main() {
  const [newProduct, setNewProduct] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/newProduct.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setNewProduct(data);
      });
  });

  return (
    <div className="main">
      {/* NAV바 컴포넌트 넣는 부분 */}
      <div className="slideBar">
        <img src="/images/main/meat.jpg" alt="meat" />
      </div>
      <div className="recommend">
        <div className="recommendDrop">
          <div className="drop">
            <button type="button" id="taste">
              매콤한맛
            </button>
            {/* <select name="taste" id="taste">
              <option value="매콤한맛">매콤한맛</option>
              <option value="매콤한맛">짭짤한맛</option>
              <option value="매콤한맛">새콤한맛</option>
              <option value="매콤한맛">담백한맛</option>
              <option value="매콤한맛">이국적인맛</option>
              <option value="매콤한맛">얼큰한맛</option>
            </select> */}
          </div>
          <div className="recommendMsg">메뉴</div>
          <div className="recommendMsg">추천드려요</div>
        </div>
        <div className="recommendPhoto">
          <img src="/images/main/salad.jpg" alt="salad" />
        </div>
      </div>
      <div className="newProducts">
        <h1 className="newProductTitle">신메뉴</h1>
        <div className="newProduct">
          <ul className="productItems">
            {newProduct.map(newProduct => {
              return (
                <li key={newProduct.id}>
                  <div className="productItem">
                    <img
                      className="productImg"
                      src={newProduct.productImg}
                      alt="meat"
                    />
                    <div className="productName">{newProduct.productName}</div>
                    <div className="productPrice">
                      {newProduct.productPrice}
                      <span className="productServings">
                        {' '}
                        / {newProduct.servings}
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="review">
        <h1 className="reviewTitle">생생한 리뷰</h1>
        <Link to="/review" className="reviewAll">
          View All
        </Link>
        <div className="reviewContents">
          <div className="reviewContentBox">
            <div className="reviewContentTitle">소고기듬뿍잡채</div>
            <div className="reviewContent">
              "일단 육즙이 팡 터지구요 존맛탱구리에요"
            </div>
          </div>
          <div className="reviewPhoto">
            <img
              className="reviewImg"
              src="/images/main/lunch.jpg"
              alt="lunch"
            />
          </div>
        </div>
      </div>
      <div className="product">
        <Menu />
        <div className="empty" />
        <Menu />
      </div>
    </div>
  );
}

export default Main;
