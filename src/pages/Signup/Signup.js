import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.scss';
import SignUpForm from '../../components/SignUpForm';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';

const Signup = () => {
  const [numberInputValue, setNumberInputValue] = useState('');
  const [birthInputValue, setBirthInputValue] = useState('');

  const [allCheck, setAllCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [termsCheck, setTermsCheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);

  const [agreement, setAgreement] = useState({
    age: false,
    terms: false,
    marketing: false,
  });

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
  const navigate = useNavigate();
  const goSignUp = e => {
    fetch('http://52.14.211.193:8000/user/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        name: name,
        password: password,
        phoneNumber: numberInputValue,
        birth: birthInputValue,
        agreement: {
          agreement: agreement,
        },
      }),
    })
      .then(res => {
        res.json();
      })
      .then(result => {});
    navigate('/');
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
      setAgreement(true);
      setAgeCheck(true);
      setTermsCheck(true);
      setMarketingCheck(true);
    } else {
      setAgreement(false);
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
    <>
      <Nav />
      <div className="backgroundWrapper">
        <div className="contentWrapper">
          <header>?????? ??????</header>
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
              <span className="title">????????? ?????? *</span>
              <input
                className="userPhoneNumber"
                type="tel"
                name="phoneNumber"
                onChange={handlePress}
                value={numberInputValue}
              />
            </div>

            <div className="birth">
              <span className="title">???????????? *</span>
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
                <span className="title">?????? ?????? ??????</span>
              </div>

              <div className="essentialTerms">
                <input
                  className="agreeTerms"
                  type="checkbox"
                  checked={termsCheck}
                  onChange={termsBtnEvent}
                />
                <span className="title">(??????) ?????? ????????? ???????????????.</span>
              </div>

              <div className="essentialTerms2">
                <input
                  className="agreeTerms"
                  type="checkbox"
                  checked={ageCheck}
                  onChange={ageBtnEvent}
                />
                <span className="title">(??????) ??? 14??? ???????????????.</span>
              </div>

              <div className="essentialTerms3">
                <input
                  className="agreeTerms"
                  type="checkbox"
                  checked={marketingCheck}
                  onChange={marketingBtnEvent}
                />
                <span className="title">
                  (??????) ????????? ??? SMS ????????? ?????? ????????? ???????????????.
                </span>
              </div>
            </div>

            <button
              className="userSignUp"
              type="button"
              onClick={goSignUp}
              disabled={!isValid}
            >
              ???????????? ??????
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

const SIGNUP_DATA = [
  {
    id: 1,
    title: '????????? *',
    type: 'text',
    name: 'email',
    placeholder: '????????? ?????? ????????? ????????? ?????????.',
  },

  {
    id: 2,
    title: '?????? *',
    type: 'text',
    name: 'name',
    placeholder: '',
    value: 'username',
  },

  {
    id: 3,
    title: '???????????? *',
    type: 'password',
    name: 'password',
    placeholder: '8??? ?????? ????????? ?????????.(????????????,??????,????????????)',
    value: 'password',
  },

  {
    id: 4,
    title: '???????????? ??????*',
    type: 'password',
    name: 'passwordConfirm',
    placeholder: '',
    value: 'passwordConfirm',
  },
];

export default Signup;
