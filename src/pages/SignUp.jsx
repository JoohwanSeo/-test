import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SignUp = () => {
  const [inputId, setInputId] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputNickName, setInputNickName] = useState('')

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault()

    if(!inputId || !inputPassword) {
      return alert('빈 칸을 모두 채워주세요!')
    }

    navigate('/')
  }

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPassword(e.target.value);
  };

  const handleInputNick = (e) => {
    setInputNickName(e.target.value)
  }

  

  return (
    <LoginWrapper>
      <LoginForm onSubmit={handleSubmit}>
        <InputContainer>
          <label htmlFor="id">User-ID</label>
          <input
            type="text"
            placeholder="ID"
            value={inputId}
            onChange={handleInputId}
          />
          <label htmlFor="password">User-PW</label>
          <input
            type="password"
            placeholder="Password"
            value={inputPassword}
            onChange={handleInputPw}
          />
          <label htmlFor="nickname">User-Nickname</label>
          <input
            type="text"
            placeholder="Nickname"
            value={inputNickName}
            onChange={handleInputNick}            
          />
        </InputContainer>

        <BtnContainer>
          <SignUpBtn
           type="submit"
          >
          생성
          </SignUpBtn>
        </BtnContainer>
      </LoginForm>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 5px;
  font-weight: bold;
`;

const LoginForm = styled.form`
display: contents;
`

const InputContainer = styled.section`
  margin-bottom: 15px;

  label {
    display: block;
    margin: 5px 0 5px 0;
  }

  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
`;

const BtnContainer = styled.section`
  width: 100%;
`;

const SignUpBtn = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #0c1844;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 13px;

  &:disabled {
    background-color: #1679ab;
  }
`;

export default SignUp;
