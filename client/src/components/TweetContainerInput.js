import React, { useContext, useState } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import { COLORS } from "../Constants";
import styled from "styled-components";

const TweetContainerInput = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const [text, setText] = useState("");
  const [characterLimit, setCharacterLimit] = useState(280);
  const handleChange = (event) => {
    const input = event.target.value;
    setText(event.target.value);
    setCharacterLimit(280 - input.length);
  };

  return (
    <>
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
    </>
  );
};

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

const Textarea = styled.textarea`
  resize: none;
  border: none;
  outline: none;
  font-family: sans-serif;
  font-size: 18px;
  margin-left: 20px;
`;

export default TweetContainerInput;
