import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import Spinner from "./Spinner";
import { COLORS } from "../Constants";
import Error from "./Error";

const HomeFeed = () => {
  const [Content, setContent] = useState({});
  const { currentUser } = useContext(CurrentUserContext);

  const [text, setText] = useState("");
  const [characterLimit, setCharacterLimit] = useState(280);

  const handleChange = (event) => {
    const input = event.target.value;
    setText(event.target.value);
    setCharacterLimit(280 - input.length);
  };

  useEffect(() => {
    fetch("/api/me/home-feed")
      .then((res) => res.json())
      .then((data) => {
        setContent(data);
      })
      .catch((error) => {
        console.log(error);
        <Error />; // ask sean about error page :D
      });
  }, []);

  return (
    <HoldMe>
      <H1>Home</H1>
      {!currentUser ? (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      ) : (
        <>
          <Wrapper>
            <TweetContainer>
              <Img src={currentUser.avatarSrc} alt="picture of a black cat" />
              <label htmlFor="usertweet">
                <Textarea
                  name="usertweet"
                  cols="90"
                  rows="6"
                  placeholder="What's happening?"
                  value={text}
                  onChange={handleChange}
                />
              </label>
            </TweetContainer>
            <ButtonContainer>
              <P value={characterLimit}>{characterLimit}</P>
              <Button2 value={characterLimit} disabled={characterLimit < 0}>
                Meow
              </Button2>
            </ButtonContainer>
          </Wrapper>
        </>
      )}
    </HoldMe>
  );
};
const HoldMe = styled.div`
  border-right: 2px solid ${COLORS.border};
  width: var(--max-content-width);
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 5px solid ${COLORS.border};
  border-top: 2px solid #dddae3;
`;
const TweetContainer = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
  margin-right: 20px;
`;
const Img = styled.img`
  border-radius: 50%;
  height: 70px;
  width: 70px;
`;

const P = styled.p`
  padding-right: 10px;
  color: ${({ value }) =>
    value < 0 ? "red" : value <= 55 ? "#fcba03" : `${COLORS.border}`};
`;
const Button2 = styled.button`
  font-size: 18px;
  background-color: ${({ value }) =>
    value < 0 ? "rgba(76, 0, 255, 0.36)" : `${COLORS.primary}`};
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 50px;
`;

const H1 = styled.h2`
  font-size: 30px;
  font-weight: bold;
  padding: 20px;
`;

const Textarea = styled.textarea`
  resize: none;
  border: none;
  outline: none;
  font-family: sans-serif;
  font-size: 18px;
  margin-left: 20px;
`;
export default HomeFeed;
