import React, { useState } from "react";
import styled from "styled-components";
import { updateProfile } from "../api/auth";
import { Navigate, useNavigate } from "react-router-dom";

const Profile = () => {
  const [nickname, setNickname] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate()


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
    formData.append("image", image);
   const res = await updateProfile(formData);

  };

  return (
    <ProfileWrapper>
      <h3>프로필 수정</h3>
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

const ProfileWrapper = styled.div``;
const InputContainer = styled.section``;
const ProfileInput = styled.div``;
const PofileImgBtn = styled.button``;

export default Profile;
