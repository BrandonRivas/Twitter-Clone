import React from "react";
import { format } from "date-fns";
import styled from "styled-components";
import TweetActions from "./TweetActions";
import { FiRepeat } from "react-icons/fi";
import { COLORS } from "../Constants";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const SmallTweet = ({ tweet }) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    navigate(`/${tweet.author.handle}`);
  };
  return (
    <Wrapper>
      <Link1 to={`/tweet/${tweet.id}`}>
        {tweet.retweetFrom ? (
          <Retweet>
            <Repeat />
            {tweet.retweetFrom.displayName} Remeowed
          </Retweet>
        ) : null}
        <Container>
          <div>
            <div onClick={handleClick}>
              <Img
                src={tweet.author.avatarSrc}
                alt={`${tweet.author.handle} profile picture`}
              />
            </div>
          </div>
          <div>
            <UserInfo>
              <div onClick={handleClick}>
                <Bold>{tweet.author.displayName}</Bold>{" "}
              </div>
              <div onClick={handleClick}>
                <span>@{tweet.author.handle}</span>
              </div>
              <span> • </span>
              <span>{format(new Date(tweet.timestamp), "MMM d")}</span>
            </UserInfo>
            <TweetText>{tweet.status}</TweetText>
            {tweet.media.map((m) => {
              return <ImgTweet key={m.url} src={m.url} />;
            })}
          </div>
        </Container>
      </Link1>
      <ActionDiv>
        <TweetActions numLikes={tweet.numLikes} />
      </ActionDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 15px;
  border-bottom: 2px solid ${COLORS.border};
`;

const Container = styled.div`
  display: flex;
`;

const Retweet = styled.p`
  padding: 20px 40px;
  color: gray;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const Repeat = styled(FiRepeat)`
  padding-right: 10px;
`;
const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 15px;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const ImgTweet = styled.img`
  border-radius: 10px;
  width: 800px;
`;

const TweetText = styled.p`
  padding-top: 10px;
  padding-bottom: 10px;
  width: 800px;
  line-height: 1.5;
`;

const Link1 = styled(Link)`
  text-decoration: none;
  color: black;
`;

const ActionDiv = styled.div`
  padding-left: 70px;
`;

const UserInfo = styled.div`
  display: flex;
  & > * {
    padding-right: 2px;
  }
`;
export default SmallTweet;
