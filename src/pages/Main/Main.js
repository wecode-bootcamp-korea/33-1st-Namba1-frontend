import React from 'react';
import MainCarousel from '../../components/Main/MainCarousel/MainCarousel.js';
import MainReview from '../../components/Main/MainReview/MainReview.js';
import Menu from '../../components/Main/Menu/Menu.js';
import NewProducts from '../../components/Main/NewProduct/NewProducts.js';
import Recommend from '../../components/Main/Recommend/Recommend.js';
import Nav from '../../components/Nav/Nav.js';
import Footer from '../../components/Footer/Footer.js';
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
  const ipAddress = '52.14.211.193:8000';

  return (
    <>
      <div className="main">
        <Nav />
        <MainCarousel />
        <Recommend ip={ipAddress} />
        <NewProducts ip={ipAddress} />
        <MainReview ip={ipAddress} />
        <div className="allProduct">
          {MENU.map(({ id, className, title, src }) => (
            <Menu
              key={id}
              className={className}
              title={title}
              src={src}
              ip={ipAddress}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Main;
