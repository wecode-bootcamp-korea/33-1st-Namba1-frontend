import React from 'react';
import './Signup.scss';

const Signup = () => {
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
              placeholder="영문, 숫자 포함 5자 이상 입력해주세요."
            />
          </div>
          <div className="emailContent">
            <span className="title">이메일 *</span>
            <input className="userEmail" type="text" />
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
              placeholder="8자 이상 입력해주세요."
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
          <div className="userInfo">
            <span className="userSex">성별 *</span>
            <div className="maleFemale">
              <input className="selectInfo" type="checkbox" />
              <span className="male">남성</span>
              <input className="selectInfo" type="checkbox" />
              <span className="female">여성</span>
            </div>
          </div>

          <div className="birth">
            <span className="title">생년월일</span>
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
        </form>
      </div>
    </div>
  );
};

export default Signup;