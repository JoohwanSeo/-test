import React, { useEffect } from "react";
import styled from "styled-components";
import { Outlet, useNavigate } from "react-router-dom";
import { userInfo } from "../api/auth";

const Layout = ({ setUsers }) => {
  const navigate = useNavigate();

  useEffect(() => {
    userInfo().then((res) => {
      if (res) {
        setUsers({
          userId: res.id,
          nickname: res.nickname,
          avatar: res.avatar,
        });
      } else {
        handleLogout()
      }
    });
  }, []);

  const handleLogout = () => {
    setUsers(null);
        navigate("/login");
        localStorage.clear();
  }

  return (
    <>
      <LayoutWrapper>
        <h3>헤더입니다.</h3>
        <LogoutBtn onClick={handleLogout}>로그아웃</LogoutBtn>
      </LayoutWrapper>
      <Outlet />
    </>
  );
};

const LayoutWrapper = styled.section``;

const LogoutBtn = styled.button``

export default Layout;
