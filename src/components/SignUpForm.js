import React, { useEffect, useState } from 'react';
import './SignUpForm.scss';

const SignUpForm = ({ input, handleInput }) => {
  const { name, value } = input;
  return (
    <div>
      <div className="signUpForm" key={input.id}>
        <span className="title">{input.title}</span>
        <input
          className="userId"
          type={input.type}
          value={value}
          name={name}
          // placeholder={input.placeholder}
          onChange={handleInput}
        />
      </div>
    </div>
  );
};

export default SignUpForm;
