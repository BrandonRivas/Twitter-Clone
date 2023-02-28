import React, { useState } from "react";
import styled from "styled-components";
import { FiMessageCircle, FiRepeat, FiHeart, FiShare } from "react-icons/fi";

const TweetActions = ({ numRetweets, numLikes }) => {
  const [like, setLike] = useState(false);

  const handleClick = () => {
    if (like) {
      setLike(false);
    } else {
      setLike(true);
    }
  };

  return (
    <Div>
      <MessageCircle />
      <Button>
        <Repeat />
        {numRetweets}
      </Button>

      <Button onClick={handleClick}>
        <Heart value={like} />
        {like ? numLikes + 1 : numLikes}
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
