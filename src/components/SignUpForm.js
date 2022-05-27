import React, { useEffect, useState } from 'react';
import './SignUpForm.scss';

const SignUpForm = ({ id, title, type, name, placeholder, value }) => {
  const [inputValue, setInputValue] = useState({
    email: '',
    name: '',
    password: '',
    passwordConfirm: '', //백엔드 보낼때는 안보내도됨
    phoneNumber: '', //- 있는걸로 보내야함
    birth: '', //- 있는걸로 보내야함
    agreement: { sns: true }, //객체안에 객체가 있는 형태로 보내야함
  });

  // const { email, username, password, passwordConfirm, phoneNumber, birth } =
  //   inputValue;

  // const handleInput = e => {
  //   const { name, value } = e.target;
  //   setInputValue({
  //     ...inputValue,
  //     [name]: value,
  //   });
  // };

  return (
    <div>
      <div className="signUpForm" key={id}>
        <span className="title">{title}</span>
        <input
          className="userId"
          type={type}
          name={name}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default SignUpForm;
