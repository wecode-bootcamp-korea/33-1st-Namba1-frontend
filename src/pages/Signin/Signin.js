import React from 'react';
import './Signin.scss';
// import { Navigate, useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';

const Signin = () => {
  // const [inputId, setInputId] = useState('');
  // const [inputPw, setInputPassword] = useState('');

  // const handleIdInput = e => {
  //   setInputId(e.target.value);
  // };
  // const handlePwInput = e => {
  //   setInputPassword(e.target.value);
  // };

  // const navigate = useNavigate();
  // const goToMain = e => {
  //   e.preventDefault();

  //   fetch('주소', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: inputId,
  //       password: inputPw,
  //       name: 'hyesu',
  //       mobile_number: '010-4816-4270',
  //       date_of_birth: '2022-05-18',
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(result => {});

  //   navigate('/main-hyesu');
  // };

  // const disable = inputId.includes('@') && inputPw.length >= 1 ? true : false;

  return (
    <div>
      <div className="loginForm">
        <div className="logIn">
          <h2 className="accountTitle">로그인</h2>
        </div>
        <form className="userForm">
          <input
            // onChange={handleIdInput}
            className="userName"
            type="text"
            placeholder="아이디"
          />
          <input
            // onChange={handlePwInput}
            className="password"
            type="password"
            placeholder="비밀번호"
          />
        </form>

        <div className="saveId">
          <input type="checkbox" />
          <span className="isSaveIdCheck">아이디 저장</span>
        </div>

        <button
          // onClick={goToMain}
          type="button"
          className="loginBtn"
          // disabled={!disable}
        >
          로그인
        </button>

        <ul className="footerText">
          <li>회원가입</li>
          <li>아이디 찾기</li>
          <li>비밀번호 찾기</li>
        </ul>
      </div>
    </div>
  );
};

export default Signin;
