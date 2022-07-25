import React from 'react';
import Nav from '../../components/Nav/Nav.js';
import MainCarousel from './MainCarousel/MainCarousel.js';
import Recommend from './Recommend/Recommend.js';
import NewProducts from './NewProduct/NewProducts.js';
import MainReview from './MainReview/MainReview.js';
import Menu from './Menu/Menu.js';
import Footer from '../../components/Footer/Footer.js';
import './Main.scss';

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

function Main() {
  return (
    <>
      <div className="main">
        <Nav />
        <MainCarousel />
        <Recommend />
        <NewProducts />
        <MainReview />
        <div className="allProduct">
          {MENU.map(({ id, className, title, src }) => (
            <Menu key={id} className={className} title={title} src={src} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Main;
