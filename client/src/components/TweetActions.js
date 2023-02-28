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
      <FiMessageCircle />
      <Button>
        <FiRepeat />
        {numRetweets}
      </Button>
      <Button onClick={handleClick}>
        <Heart like={like} />
        {like ? numLikes + 1 : numLikes}
      </Button>
      <FiShare />
    </Div>
  );
};

const Heart = styled(FiHeart)`
  color: ${(props) => (props.like ? "red" : "black")};
  fill: ${(props) => (props.like ? "red" : "transparent")};
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
