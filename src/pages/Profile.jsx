import React, { useState } from "react";
import styled from "styled-components";
import { updateProfile } from "../api/auth";
import { Navigate, useNavigate } from "react-router-dom";

const Profile = () => {
  const [nickname, setNickname] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleNickname = (e) => {
    setNickname(e.target.value);
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpdateProfile = async () => {
    console.log(nickname);
    console.log(image);

    const formData = new FormData();
    formData.append("nickname", nickname);
    formData.append("avatar", image);
    const res = await updateProfile(formData);
  };

  return (
    <ProfileWrapper>
      <h3>Edit Profile</h3>
      <InputContainer>
        <ProfileInput>
          <label htmlFor="nickname">Nick </label>
          <input type="text" placeholder="nickname" onChange={handleNickname} />
        </ProfileInput>
        <ProfileInput>
          <label htmlFor="avatar">IMG </label>
          <input type="file" accept="image/*" onChange={handleImage} />
        </ProfileInput>
      </InputContainer>
      <PofileImgBtn onClick={handleUpdateProfile}>업데이트 </PofileImgBtn>
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
`;
const InputContainer = styled.section`
  margin-bottom: 15px;
`;

const ProfileInput = styled.div`
  margin-bottom: 15px;

  label {
    display: flex;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
`;
const PofileImgBtn = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;
`;

export default Profile;
