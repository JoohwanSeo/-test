import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {register} from "../api/auth";

const SignUp = () => {
  const [inputId, setInputId] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputNickName, setInputNickName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!inputId || inputId.length <= 4) {
      return alert("아이디는 최소 4글자 이상이어야 합니다.");
    }
    if (!inputPassword || inputPassword.length <= 4) {
      return alert("비밀번호는 최소 4글자 이상이어야 합니다.");
    }
    if (!inputNickName || inputNickName.length <= 2) {
      return alert("닉네임은 최소 2글자 이상이어야 합니다.");
    }
    if (!inputId || !inputPassword) {
      return alert("빈 칸을 모두 채워주세요!");
    } else {
    }

    const res = await register({
      id: inputId,
      password: inputPassword,
      nickname: inputNickName,
    })
    if (res) {
      confirm('회원가입이 완료됐습니다!')
      navigate('/login')
    }
  };

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPassword(e.target.value);
  };

  const handleInputNick = (e) => {
    setInputNickName(e.target.value);
  };

  const handleBackNavigate = () => {
    navigate("/login");
  };
 

  return (
    <LoginWrapper>
      <LoginForm onSubmit={handleSubmit}>
        <InputContainer>
          <label htmlFor="id">ID</label>
          <input
            type="text"
            placeholder="ID"
            value={inputId}
            onChange={handleInputId}
          />
          <label htmlFor="password">PW</label>
          <input
            type="password"
            placeholder="Password"
            value={inputPassword}
            onChange={handleInputPw}
          />
          <label htmlFor="nickname">Nick</label>
          <input
            type="text"
            placeholder="Nickname"
            value={inputNickName}
            onChange={handleInputNick}
          />
        </InputContainer>

        <BtnContainer>
          <SignUpBtn type="submit">생성</SignUpBtn>
          <BackLoginBtn type="button" onClick={handleBackNavigate}>
            뒤로가기
          </BackLoginBtn>
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
`;

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

  &:hover {
    background-color: #1679ab;
    transform: scale(1);
  }
`;

const BackLoginBtn = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #7b7672;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 13px;

  &:hover {
    background-color: #2c1700;
    transform: scale(1);
  }
`;

export default SignUp;
