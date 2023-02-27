import Logo from "./Logo";
import styled from "styled-components";
import { COLORS } from "../Constants";
import { FiHome, FiUser, FiBell, FiBookmark } from "react-icons/fi";
const Sidebar = () => {
  return (
    <div>
      <Logo />
      <Div>
        <House />
        <H2>Home</H2>
      </Div>
      <Div>
        <FiUser />
        <H2>User</H2>
      </Div>
      <Div>
        <FiBell />
        <H2>Notifications</H2>
      </Div>
      <Div>
        <FiBookmark />
        <H2>Bookmarks</H2>
      </Div>
    </div>
  );
};

const Div = styled.div`
  display: Flex;
`;
const H2 = styled.h2`
  color: ${COLORS.primary};
`;

const House = styled(FiHome)``;
export default Sidebar;
