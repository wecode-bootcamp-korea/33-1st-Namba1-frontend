import React from 'react';
import { useState, useEffect } from 'react';
// import { Navigate, useNavigate } from 'react-router-dom';
import './Signup.scss';
import SignUpForm from '../../components/SignUpForm';

const Signup = () => {
  useEffect(() => {
    fetch('http://10.58.5.168:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: '',
        name: '',
        password: '',
        passwordConfirm: '',
        phoneNumber: '',
        birth: '',
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
  }, []);
  /*---회원가입 유효성 검사 기준---*/
  //2. 이메일은 '@'와 '.' 두개를 포함=====>ok
  //3. 비밀번호는 8자리 이상,특수문자 1자 이상
  //4. 체크박스는 필수항목 2개 또는 전체동의 체크되어야 함
  //5. 위 항목 중 한가지 조건이라도 미충족 시 버튼 비활성화

  // /*-----useState와 함수를 이용해서 input의 value값 받아오기-----*/
  // const [inputId, setInputId] = useState(''); //이메일
  // const [inputPw, setInputPassword] = useState(''); //비밀번호
  const [numberInputValue, setNumberInputValue] = useState(''); //휴대폰번호
  const [birthInputValue, setBirthInputValue] = useState(''); //생년월일

  /*-----약관동의 state----*/
  const [allCheck, setAllCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [termsCheck, setTermsCheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);

  const [inputValue, setInputValue] = useState({
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
    phoneNumber: '',
    birth: '',
  });

  const { email, name, password, passwordConfirm, phoneNumber, birth } =
    inputValue;

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  // 여기는 백엔드 통신
  const goSignUp = () => {
    fetch('http://10.58.5.168:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        name: name,
        password: password,
        passwordConfirm: passwordConfirm,
        phoneNumber: phoneNumber,
        birth: birth,
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
        // console.log(result);
      });
  };

  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^~*+=-])(?=.*[0-9]).{8,}$/;
  const passwordCondition =
    passwordRegex.test(inputValue.password) && password === passwordConfirm;
  const emailCondition = email.includes('@') && email.includes('.');
  const isValid = passwordCondition && emailCondition;

  // console.log(isValid);

  /*-----휴대폰 번호 하이픈 넣는 함수-----*/
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

  /*-----생년월일 하이픈 넣는 함수-----*/
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

  /*-----약관동의 이벤트 함수-----*/
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
          {SIGNUP_DATA.map(input => (
            <SignUpForm
              key={input.id}
              input={input}
              title={input.title}
              type={input.type}
              name={input.name}
              // placeholder={input.placeholder}
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
