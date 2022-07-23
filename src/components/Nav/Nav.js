import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  const [userName, setUserName] = useState(localStorage.getItem('USER_NAME'));

  return (
    <nav className="nav">
      <div className="navWarp">
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
            {userName ? (
              <li>
                {userName}님 환영합니다{' '}
                <button
                  className="logOutBtn"
                  onClick={() => {
                    localStorage.clear();
                    setUserName('');
                  }}
                >
                  로그아웃
                </button>
              </li>
            ) : (
              <Link to="/signin" className="myLink">
                <li>로그인</li>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
const PAGENAV_LIST = [
  { id: 1, page: '메뉴', url: '/products' },
  { id: 2, page: '리뷰', url: '/review' },
  { id: 3, page: '마이카트', url: '/mycart' },
];

export default Nav;
