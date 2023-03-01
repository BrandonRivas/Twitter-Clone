import React, { useState } from "react";
import styled from "styled-components";
import { FiMessageCircle, FiRepeat, FiHeart, FiShare } from "react-icons/fi";

const TweetActions = ({ numRetweets, numLikes }) => {
  const [like, setLike] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    if (like) {
      setLike(false);
    } else {
      setLike(true);
    }
  };

  return (
    <Div>
      <MessageCircle />
      <Repeat />
      <Button onClick={(event) => handleClick(event)}>
        <Heart value={like} />
        <span style={{ color: like ? "black" : "transparent" }}>
          {like ? numLikes + 1 : numLikes}
        </span>
      </Button>
      <Share />
    </Div>
  );
};

const Heart = styled(FiHeart)`
  color: ${(props) => (props.value ? "red" : "black")};
  fill: ${(props) => (props.value ? "red" : "transparent")};
  font-size: 20px;
`;

const MessageCircle = styled(FiMessageCircle)`
  font-size: 20px;
`;

const Repeat = styled(FiRepeat)`
  font-size: 20px;
`;

const Share = styled(FiShare)`
  font-size: 20px;
`;
const Div = styled.div`
  display: flex;
  padding: 15px;
  justify-content: space-between;
  align-items: center;
  width: 700px;
`;

const Button = styled.button`
  border: none;
  background: none;
`;

export default TweetActions;
