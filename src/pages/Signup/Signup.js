// import React, { useCallback } from 'react';
import './Signup.scss';

const Signup = () => {
  // const [email, setEmail] = useState('');
  // const [name, setName] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setconfirmPassword] = useState('');
  // const [PhoneNumbers, setPhoneNumbers] = useState('');
  // const [Userbirth, setUserbirth] = useState('');

  return (
    <div className="backgroundWrapper">
      <div className="contentWrapper">
        <form className="signUpWrapper">
          <div className="signUpField">
            <header>회원 가입</header>
          </div>
          <div className="idContent">
            <span className="title">아이디 *</span>
            <input
              className="userId"
              type="text"
              placeholder="이메일 주소 전체를 입력해 주세요."
            />
          </div>

          <div className="nameContent">
            <span className="title">이름 *</span>
            <input className="isUserName" type="text" />
          </div>
          <div className="passwordContent">
            <span className="title">비밀번호 *</span>
            <input
              className="userPassword"
              type="text"
              placeholder="8자 이상 입력해 주세요."
            />
          </div>
          <div className="passwordCheckContent">
            <span className="title">비밀번호 확인 *</span>
            <input className="userPasswordCheck" type="text" />
          </div>
          <div className="phoneNumber">
            <span className="title">휴대폰 번호 *</span>
            <input className="userPhoneNumber" type="text" />
          </div>

          <div className="birth">
            <span className="title">생년월일 *</span>
            <input className="userBirth" type="text" />
          </div>
          <div className="footer">
            <div className="terms">
              <input className="allTerms" type="checkbox" />
              <span className="title">약관 전체 동의</span>
            </div>

            <div className="essentialTerms">
              <input className="agreeTerms" type="checkbox" />
              <span className="title">(필수) 이용 약관에 동의합니다.</span>
            </div>

            <div className="essentialTerms2">
              <input className="agreeTerms2" type="checkbox" />
              <span className="title">(필수) 만 14세 이상입니다.</span>
            </div>

            <div className="essentialTerms3">
              <input className="agreeTerms3" type="checkbox" />
              <span className="title">
                (선택) 이메일 및 SMS 마케팅 정보 수신에 동의합니다.
              </span>
            </div>
          </div>
          <div className="signupBtn">
            <button className="userSignUp">회원가입 하기</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
