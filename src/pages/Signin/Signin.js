import React from 'react';
import './Signin.scss';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

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
    fetch('http://10.58.1.230:8000/user/login', {
      method: 'POST',
      body: JSON.stringify({
        email: inputId,
        password: inputPw,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.Token) {
          console.log(result.Token);
          localStorage.setItem('Token', result.Token);
        } else {
          alert('로그인 실패!');
        }
      });

    navigate('/쿡킷메인페이지');
  };

  const idCondition =
    /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

  const pwCondition = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;

  const isValidId = idCondition.test(inputId);
  const isValidPw = pwCondition.test(inputPw);
  const valid = isValidId && isValidPw;

  return (
    <div>
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

        <div className="saveId">
          <input type="checkbox" />
          <span className="isSaveIdCheck">아이디 저장</span>
        </div>

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
    </div>
  );
};

export default Signin;
