import React from 'react';
import './Signin.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';

const Signin = () => {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPassword] = useState('');

  const handleIdInput = e => {
    setInputId(e.target.value);
  };
  const handlePwInput = e => {
    setInputPassword(e.target.value);
  };

  const navigate = useNavigate();
  const goToSignUp = e => {
    e.preventDefault();
    fetch('http://10.58.5.148:8000/user/login', {
      method: 'POST',
      body: JSON.stringify({
        email: inputId,
        password: inputPw,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.Token) {
          localStorage.setItem('Token', result.Token);
          localStorage.setItem('USER_NAME', result.USER_NAME);
          navigate('/');
          // 1. token
          // 2. userName -> save, localStorage
        } else {
          alert('로그인 실패!');
        }
      });

    // TODO : 전역 상태로 바꾸기!
  };

  const idCondition =
    /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

  const pwCondition = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;

  const isValidId = idCondition.test(inputId);
  const isValidPw = pwCondition.test(inputPw);
  const valid = isValidId && isValidPw;

  return (
    <div>
      <Nav />
      <div className="loginForm">
        <div className="logIn">
          <h2 className="accountTitle">로그인</h2>
        </div>
        <form className="userForm">
          <input
            onChange={handleIdInput}
            className="userName"
            type="text"
            placeholder="아이디"
          />
          <input
            onChange={handlePwInput}
            className="password"
            type="password"
            placeholder="비밀번호"
          />
        </form>

        <button
          type="button"
          onClick={goToSignUp}
          className="loginBtn"
          disabled={!valid}
        >
          로그인
        </button>

        <ul className="footerText">
          <li>
            <a href="./signup">회원가입</a>{' '}
          </li>
          <li>아이디 찾기</li>
          <li>비밀번호 찾기</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
};

export default Signin;
