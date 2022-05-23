import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Nav.scss';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav">
      <h1 className="logo">
        <Link to="/" className="logoLink">
          남바완
        </Link>
      </h1>
      <ul className="pageMenu">
        <li>
          <Link to="/menu" className="pageLink">
            메뉴
          </Link>
        </li>
        <li>
          <Link to="/review" className="pageLink">
            리뷰
          </Link>
        </li>
        <li>
          <Link to="/mypage" className="pageLink">
            마이페이지
          </Link>
        </li>
      </ul>
      <div className="myMenu">
        <ul>
          <li>
            <Link to="/signin" className="myLink">
              로그인
            </Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faCartShopping} className="cart" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
