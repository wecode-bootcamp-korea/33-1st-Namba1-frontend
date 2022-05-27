import React from 'react';
import { Link } from 'react-router-dom';
import MainCarousel from '../../components/Main/MainCarousel';
import Recommend from '../../components/Main/Recommend';
import MdMenu from '../../components/Main/MdMenu';
import Menu from '../../components/Main/Menu';
import NewProduct from '../../components/Main/NewProduct';
import Review from '../../components/Main/Review';
import './Main.scss';

function Main() {
  return (
    <div className="main">
      <MainCarousel />
      <Recommend />
      <div className="newProducts">
        <h1 className="newProductTitle">신메뉴</h1>
        <div className="newProduct">
          <NewProduct />
        </div>
      </div>
      <div className="review">
        <h1 className="reviewTitle">생생한 리뷰</h1>
        <Link to="/review" className="reviewAll">
          View All
        </Link>
        <div className="reviewBox">
          {/* TO DO : 리뷰 어떤 식으로 데이터 받아올지 회의 후 목데이터 작업하기 */}
          <Review />
          <Review />
        </div>
      </div>
      <div className="product">
        <Menu />
        <div className="empty" />
        <MdMenu />
      </div>
    </div>
  );
}

export default Main;
