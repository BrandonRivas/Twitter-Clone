import Logo from "./Logo";
import styled from "styled-components";
import { COLORS } from "../Constants";
import { FiHome, FiUser, FiBell, FiBookmark } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <Div>
      <LogoContainer>
        <Logo />
      </LogoContainer>

      <StyledLink to="/">
        <House />
        <H2>Home</H2>
      </StyledLink>

      <StyledLink to="/:profileId">
        <User />
        <H2>User</H2>
      </StyledLink>

      <StyledLink1 to="/notifications">
        <Notification />
        <H2>Notifications</H2>
      </StyledLink1>

      <StyledLink1 to="/bookmarks">
        <Bookmark />
        <H2>Bookmarks</H2>
      </StyledLink1>
    </Div>
  );
};
const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 250px;
  padding-left: 40px;
  padding-top: 50px;
`;

const LogoContainer = styled.div`
  padding-bottom: 0px;
`;
const StyledLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  padding: 15px;
  border-radius: 30px;
  margin-top: 10px;
  width: 100px;
  color: black;

  &:hover {
    background-color: rgba(76, 0, 255, 0.36);
    color: ${COLORS.primary};
  }
  &.active {
    color: ${COLORS.primary};
  }
`;

const StyledLink1 = styled(NavLink)`
  display: flex;
  text-decoration: none;
  padding: 15px;
  border-radius: 30px;
  margin-top: 10px;
  width: 165px;
  color: black;

  &:hover {
    background-color: rgba(76, 0, 255, 0.36);
    color: ${COLORS.primary};
  }
  &.active {
    color: ${COLORS.primary};
  }
`;

const H2 = styled.h2`
  font-size: 23px;
  width: 10px;
`;

const House = styled(FiHome)`
  font-size: 25px;
  padding-right: 15px;
`;

const User = styled(FiUser)`
  font-size: 25px;
  padding-right: 15px;
`;
const Notification = styled(FiBell)`
  font-size: 25px;
  padding-right: 15px;
`;

const Bookmark = styled(FiBookmark)`
  font-size: 25px;
  padding-right: 15px;
`;
export default Sidebar;
