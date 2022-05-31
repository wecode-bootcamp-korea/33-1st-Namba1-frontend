import React from 'react';
import Nav from '../../components/Nav/Nav.js';
import MainCarousel from '../../components/Main/MainCarousel';
import Recommend from '../../components/Main/Recommend';
import Menu from '../../components/Main/Menu';
import NewProducts from '../../components/Main/NewProducts';
import MainReview from '../../components/Main/Review/MainReview.js';
import './Main.scss';

function Main() {
  const MENU = [
    {
      id: 1,
      className: 'menu1',
      title: '남바완 메뉴 보기',
      src: '/images/main/market.jpg',
    },
    {
      id: 2,
      className: 'menu2',
      title: '한정 수량 MD의 추천',
      src: '/images/main/market2.jpg',
    },
  ];

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
      <MainReview />
      <div className="product">
        {MENU.map(({ id, className, title, src }) => (
          <Menu key={id} className={className} title={title} src={src} />
        ))}
      </div>
    </div>
  );
}

export default Main;
