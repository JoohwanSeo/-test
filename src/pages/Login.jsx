import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const [inputId, setInputId] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputId || !inputPassword) {
      return alert("빈 칸을 모두 채워주세요!");
    }
    navigate("/sign-up");
  };

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPassword(e.target.value);
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
        </InputContainer>
        <BtnContainer>
          <LoginBtn type="submit">로그인</LoginBtn>
          <span>
            <h5 style={{ margin: "5px", padding: "3px" }}>
              계정이 없으신가요?
            </h5>
            <Link to={"/sign-up"}>회원가입</Link>
          </span>
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
const LoginBtn = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #059212;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 13px;

  &:disabled {
    background-color: #9bec00;
  }
`;

export default Login;
