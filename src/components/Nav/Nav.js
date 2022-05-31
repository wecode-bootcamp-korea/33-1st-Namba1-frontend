import React from 'react';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <h1 className="logo">
        <Link to="/" className="logoLink">
          <img src="/images/nav/namba1_logo.png" alt="nambaLogo" />
        </Link>
      </h1>
      <ul className="pageMenu">
        {PAGENAV_LIST.map(({ id, url, page }) => {
          return (
            <li key={id}>
              <Link to={url} className="pageLink">
                {page}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="myMenu">
        <ul>
          {MY_NAV_LIST.map(myMenu => {
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
  { id: 3, page: '마이카트', url: 'mycart' },
];

const MY_NAV_LIST = [{ id: 1, page: '로그인', url: '/signin' }];

export default Nav;
