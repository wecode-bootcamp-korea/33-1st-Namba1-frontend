import React from 'react';
import Nav from '../../components/Nav/Nav.js';
import MainCarousel from '../../components/Main/MainCarousel';
import Recommend from '../../components/Main/Recommend';
import Menu from '../../components/Main/Menu';
import NewProducts from '../../components/Main/NewProducts';
import Review from '../../components/Main/Review/Review.js';
import './Main.scss';

function Main() {
  return (
    <div className="main">
      <Nav />
      <MainCarousel />
      <Recommend />
      <div className="newProductsContainer">
        <h1 className="newProductsTitle">신메뉴</h1>
        <NewProducts />
      </div>

      {/* TO DO : 리뷰 어떤 식으로 데이터 받아올지 회의 후 목데이터 작업하기 */}
      <Review />
      <div className="product">
        {/* TO DO : Menu와 MDMenu 하나의 컴포넌트로 재사용할 수 있는 방법이 있을 것 같네요! */}
        <Menu />
        <div className="empty" />
        <Menu />
      </div>
    </div>
  );
}

export default Main;
