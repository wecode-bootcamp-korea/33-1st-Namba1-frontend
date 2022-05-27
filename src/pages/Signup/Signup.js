import React from 'react';
import { useState, useEffect } from 'react';
import './Signup.scss';
import SignUpForm from '../../components/SignUpForm';

const Signup = () => {
  /*---회원가입 유효성 검사 기준---*/
  //2. 이메일은 '@'와 '.' 두개를 포함=====>ok
  //3. 비밀번호는 8자리 이상,특수문자 1자 이상
  //4. 비밀번호 불일치 시 alert창 뜨게함
  //5. 체크박스는 필수항목 2개 또는 전체동의 체크되어야 함
  //6. 위 5가지 항목 중 한가지 조건이라도 미충족 시 버튼 비활성화+ 경고창(...)

  // useEffect(() => {
  //   fetch('주소', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setInputValue(data);
  //     });
  // }, []);

  /*-----useState와 함수를 이용해서 input의 value값 받아오기-----*/
  // const [inputId, setInputId] = useState('');
  // const [inputPw, setInputPassword] = useState('');
  const [numberInputValue, setNumberInputValue] = useState('');
  /*-----아이디(이메일주소)와 비밀번호 조건 충족 시 로그인 버튼 활성화-----*/

  //이메일, 비밀번호 유효성 검사
  // const checkInfo = e => {
  //   const idCondition =
  //     /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

  //   const pwCondition = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;

  //   const isValidId = idCondition.test(inputId);
  //   const isValidPw = pwCondition.test(inputPw);
  //   const valid = isValidId && isValidPw;
  //   valid.test(e.target.value);

  //   const regExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
  //   const regExp2 = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
  //   regExp.test(e.target.value);
  // };

  const handlePress = e => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e.target.value)) {
      setNumberInputValue(e.target.value);
    }
  };

  useEffect(() => {
    if (numberInputValue.length === 10) {
      setNumberInputValue(
        numberInputValue.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
      );
    }
    if (numberInputValue.length === 13) {
      setNumberInputValue(
        numberInputValue
          .replace(/-/g, '')
          .replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
      );
    }
  }, [numberInputValue]);

  /*-----약관동의 체크박스 이벤트 구현-----*/
  const [allCheck, setAllCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [termsCheck, setTermsCheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);

  const allBtnEvent = () => {
    if (allCheck === false) {
      setAllCheck(true);
      setAgeCheck(true);
      setTermsCheck(true);
      setMarketingCheck(true);
    } else {
      setAllCheck(false);
      setAgeCheck(false);
      setTermsCheck(false);
      setMarketingCheck(false);
    }
  };

  const ageBtnEvent = () => {
    if (ageCheck === false) {
      setAgeCheck(true);
    } else {
      setAgeCheck(false);
    }
  };

  const termsBtnEvent = () => {
    if (termsCheck === false) {
      setTermsCheck(true);
    } else {
      setTermsCheck(false);
    }
  };

  const marketingBtnEvent = () => {
    if (marketingCheck === false) {
      setMarketingCheck(true);
    } else {
      setMarketingCheck(false);
    }
  };

  useEffect(() => {
    if (ageCheck === true && termsCheck === true && marketingCheck === true) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [ageCheck, termsCheck, marketingCheck]);

  return (
    <div className="backgroundWrapper">
      <div className="contentWrapper">
        <header>회원 가입</header>
        <form className="signUpWrapper">
          {SIGNUP_DATA.map(({ id, title, type, name, placeholder }) => (
            <SignUpForm
              key={id}
              title={title}
              type={type}
              name={name}
              placeholder={placeholder}
            />
          ))}

          <div className="phoneNumber">
            <span className="title">휴대폰 번호 *</span>
            <input
              className="userPhoneNumber"
              type="text"
              onChange={handlePress}
              value={numberInputValue}
            />
          </div>

          <div className="birth">
            <span className="title">생년월일 *</span>
            <input className="userBirth" type="text" />
          </div>
          <div className="footer">
            <div className="terms">
              <input
                className="agreeTerms"
                type="checkbox"
                checked={allCheck}
                onChange={allBtnEvent}
              />
              <span className="title">약관 전체 동의</span>
            </div>

            <div className="essentialTerms">
              <input
                className="agreeTerms"
                type="checkbox"
                checked={termsCheck}
                onChange={termsBtnEvent}
              />
              <span className="title">(필수) 이용 약관에 동의합니다.</span>
            </div>

            <div className="essentialTerms2">
              <input
                className="agreeTerms"
                type="checkbox"
                checked={ageCheck}
                onChange={ageBtnEvent}
              />
              <span className="title">(필수) 만 14세 이상입니다.</span>
            </div>

            <div className="essentialTerms3">
              <input
                className="agreeTerms"
                type="checkbox"
                checked={marketingCheck}
                onChange={marketingBtnEvent}
              />
              <span className="title">
                (선택) 이메일 및 SMS 마케팅 정보 수신에 동의합니다.
              </span>
            </div>
          </div>
          <div className="signUpBtn">
            <button className="userSignUp" type="button">
              회원가입 하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const SIGNUP_DATA = [
  {
    id: 1,
    title: '아이디 *',
    type: 'text',
    name: 'email',
    placeholder: '이메일 주소 전체를 입력해 주세요',
    value: 'email',
  },

  {
    id: 2,
    title: '이름 *',
    type: 'text',
    name: 'userName',
    placeholder: '',
    value: 'username',
  },

  {
    id: 3,
    title: '비밀번호 *',
    type: 'password',
    name: 'password',
    placeholder: '8자 이상 입력해 주세요.',
    value: 'password',
  },

  {
    id: 4,
    title: '비밀번호 확인*',
    type: 'password',
    name: 'passwordConfirm',
    placeholder: '',
    value: 'passwordConfirm',
  },
];
export default Signup;
