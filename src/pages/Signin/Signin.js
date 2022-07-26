import React from 'react';
import './Signin.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import API from '../../config';

const Signin = () => {
  const [inputLogin, setInputLogin] = useState({
    email: '',
    password: '',
  });

  const { email, password } = inputLogin;

  const handleLogin = e => {
    const { name, value } = e.target;
    setInputLogin({ ...inputLogin, [name]: value });
  };

  const navigate = useNavigate();
  const goToSignUp = e => {
    e.preventDefault();
    fetch(`${API.signIn}`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.Token) {
          localStorage.setItem('Token', result.Token);
          localStorage.setItem('USER_NAME', result.USER_NAME);
          navigate('/');
        } else {
          alert('이메일 또는 비밀번호를 정확히 입력해 주세요!');
        }
      });
  };

  const idCondition =
    /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

  const pwCondition = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;

  const isValidId = idCondition.test(email);
  const isValidPw = pwCondition.test(password);
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
            onChange={handleLogin}
            name="email"
            className="userName"
            type="email"
            placeholder="아이디"
          />
          <input
            onChange={handleLogin}
            name="password"
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
