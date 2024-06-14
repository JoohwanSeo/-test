import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { userInfo } from "../api/auth";

const Layout = ({ users, setUsers }) => {
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
        handleLogout();
      }
    });
  }, []);

  const handleLogout = () => {
    setUsers(null);
    navigate("/login");
    localStorage.clear();
  };

  return (
    <>
      <LayoutNavigation>
        <LoginContainer>
          <LoginItem to="/">Home</LoginItem>
          <LoginItem to="/profile">Profile</LoginItem>
        </LoginContainer>
        <UserProfile>
          {users && (
            <>
              <UserAvatar src={users.avatar} alt="User Avatar" />
              <UserName>{users.nickname}</UserName>
              <LogoutBtn onClick={handleLogout}>로그아웃</LogoutBtn>
            </>
          )}
        </UserProfile>
      </LayoutNavigation>
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </>
  );
};

const LayoutNavigation = styled.nav`
  background-color: black;
  color: white;
  padding: 10px 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: calc(100% -1rem);
  top: 0;
  z-index: 1000;
  max-width: 1300px;
  border-radius: 3px;
`;

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LoginItem = styled(Link)`
  color: white;
  margin: 0 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
`;

const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40%;
  margin-right: 5px;
`;

const UserName = styled.span`
  color: white;
  margin-right: 15px;
`;
const LogoutBtn = styled.button`
  padding: 8px 12px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #b8425d;
  }
`;
const OutletContainer = styled.div`
padding: 6rem 2rem;
`
export default Layout;
