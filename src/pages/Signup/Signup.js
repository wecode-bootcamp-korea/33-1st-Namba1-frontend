import React from 'react';
import { useState, useEffect } from 'react';
import './Signup.scss';
import SignUpForm from '../../components/SignUpForm';

// 중복

const Signup = () => {
  const [numberInputValue, setNumberInputValue] = useState('');
  const [birthInputValue, setBirthInputValue] = useState('');

  // state ?
  // 1.

  // age, terms, marketingCheck all
  // const [allCheck, setAllCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [termsCheck, setTermsCheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);

  // TODO
  //const [agreement, setAgreement] = useState({
  //  age: false,
  //  terms: false,
  //  marketing: false,
  //});

  //const allCheck = Object.value(agreement).every(value => value === true);

  const [inputValue, setInputValue] = useState({
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
  });

  const { email, name, password, passwordConfirm } = inputValue;

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const goSignUp = () => {
    fetch('http://10.58.5.168:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        name: name,
        password: password,
        passwordConfirm: passwordConfirm,
        phoneNumber: numberInputValue,
        birth: birthInputValue,
      }),
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          alert('이메일과 비밀번호를 다시 한번 확인해주세요!');
        }
      })
      .then(result => {
        navigator('/login');
        // localStorage.setItem(‘TOKEN’, result.access_token);
      });
  };

  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^~*+=-])(?=.*[0-9]).{8,}$/;
  const passwordCondition =
    passwordRegex.test(inputValue.password) && password === passwordConfirm;
  const emailCondition = email.includes('@') && email.includes('.');
  const isValid =
    (passwordCondition &&
      emailCondition &&
      allCheck &&
      ageCheck &&
      termsCheck) ||
    (ageCheck && termsCheck && passwordCondition && emailCondition);

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

  const birthPress = e => {
    const regex2 = /^[0-9\b -]{0,13}$/;
    if (regex2.test(e.target.value)) {
      setBirthInputValue(e.target.value);
    }
  };

  useEffect(() => {
    if (birthInputValue.length === 8) {
      setBirthInputValue(
        birthInputValue.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3')
      );
    }
    if (birthInputValue.length === 8) {
      setBirthInputValue(
        birthInputValue
          .replace(/-/g, '')
          .replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3')
      );
    }
  }, [birthInputValue]);

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

  // useEffect(() => {
  //   if (ageCheck === true && termsCheck === true && marketingCheck === true) {
  //     setAllCheck(true);
  //   } else {
  //     setAllCheck(false);
  //   }
  // }, [ageCheck, termsCheck, marketingCheck]);

  console.log('input value', inputValue);
  console.log('numberInputValue', numberInputValue);
  console.log('birthInputValue', birthInputValue);

  return (
    <div className="backgroundWrapper">
      <div className="contentWrapper">
        <header>회원 가입</header>
        <form className="signUpWrapper">
          {SIGNUP_DATA.map(input => (
            <SignUpForm
              key={input.id}
              input={input}
              placeholder={input.placeholder}
              onChange={handleInput}
            />
          ))}

          <div className="phoneNumber">
            <span className="title">휴대폰 번호 *</span>
            <input
              className="userPhoneNumber"
              type="tel"
              name="phoneNumber"
              onChange={handlePress}
              value={numberInputValue}
            />
          </div>

          <div className="birth">
            <span className="title">생년월일 *</span>
            <input
              className="userBirth"
              type="text"
              name="birth"
              onChange={birthPress}
              value={birthInputValue}
            />
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

          <button
            className="userSignUp"
            type="button"
            onClick={goSignUp}
            disabled={!isValid}
          >
            회원가입 하기
          </button>
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
    placeholder: '이메일 주소 전체를 입력해 주세요.',
  },

  {
    id: 2,
    title: '이름 *',
    type: 'text',
    name: 'name',
    placeholder: '',
    value: 'username',
  },

  {
    id: 3,
    title: '비밀번호 *',
    type: 'password',
    name: 'password',
    placeholder: '8자 이상 입력해 주세요.(특수문자,숫자,영문포함)',
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
