import React from 'react';
import { Link } from 'react-router-dom';
import MdMenu from '../../components/Main/MdMenu';
import Menu from '../../components/Main/Menu';
import NewProduct from '../../components/Main/NewProduct';
import Review from '../../components/Main/Review';
import './Main.scss';

function Main() {
  return (
    <div className="main">
      <div className="slideBox">
        <div className="slideDisplay">
          {MAIN_SLIDE.map(({ id, src, alt }) => {
            return <img key={id} className="mainSlide" src={src} alt={alt} />;
          })}
        </div>
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
          <div className="recommendMsg">추천드려요 :D</div>
        </div>
        <div className="recommendPhoto">
          {RECOMMEND_PHOTO.map(({ id, src, alt }) => {
            return <img key={id} src={src} alt={alt} />;
          })}
        </div>
      </div>
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

const MAIN_SLIDE = [
  { id: 1, src: '/images/main/meat.jpg', alt: 'meat' },
  { id: 2, src: '/images/main/dinner.jpg', alt: 'dinner' },
  { id: 3, src: '/images/main/salad.jpg', alt: 'salad' },
  { id: 4, src: '/images/main/dinner.jpg', alt: 'dinner' },
];

const RECOMMEND_PHOTO = [
  { id: 1, src: '/images/main/salad.jpg', alt: 'salad' },
  { id: 2, src: '/images/main/salad.jpg', alt: 'salad' },
  { id: 3, src: '/images/main/salad.jpg', alt: 'salad' },
];
export default Main;
