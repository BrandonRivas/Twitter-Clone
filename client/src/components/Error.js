import styled from "styled-components";
import { FaBomb } from "react-icons/fa";
import { COLORS } from "../Constants";
const Error = () => {
  return (
    <ErrorDiv>
      <Bomb />
      <H2Error>An unknown error has occurred...</H2Error>
      <ErrorMessage>
        Please try refreshing the page, or <a href="#">contact support</a> if
        the problem persists.
      </ErrorMessage>
    </ErrorDiv>
  );
};

const ErrorDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 200px;
  align-items: center;
  border-right: 2px solid ${COLORS.border};
  width: var(--max-content-width);
`;
const Bomb = styled(FaBomb)`
  font-size: 80px;
  margin-bottom: 20px;
`;

const H2Error = styled.h2`
  font-size: 25px;
  font-weight: bold;
  padding-bottom: 10px;
`;

const ErrorMessage = styled.p`
font-size: 18px;
`
export default Error;
