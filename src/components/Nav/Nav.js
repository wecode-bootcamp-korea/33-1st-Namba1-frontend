import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Nav.scss';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav">
      <h1 className="logo">
        <Link to="/" className="logoLink">
          남바완
        </Link>
      </h1>
      <ul className="pageMenu">
        {PAGENAV_LIST.map(menu => {
          return (
            <li key={menu.id}>
              <Link to={menu.url} className="pageLink">
                {menu.page}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="myMenu">
        <ul>
          {MYNAV_LIST.map(myMenu => {
            return (
              <li key={myMenu.id}>
                <Link to={myMenu.url} className="myLink">
                  {myMenu.page}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

const PAGENAV_LIST = [
  { id: 1, page: '메뉴', url: '/menu' },
  { id: 2, page: '리뷰', url: '/review' },
  { id: 3, page: '마이페이지', url: 'mypage' },
];

const MYNAV_LIST = [
  { id: 1, page: '로그인', url: '/signin' },
  {
    id: 2,
    page: <FontAwesomeIcon icon={faCartShopping} className="cart" />,
    url: '/cart',
  },
];

export default Nav;
