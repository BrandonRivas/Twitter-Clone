import React from "react";
import { format } from "date-fns";
import styled from "styled-components";
import TweetActions from "./TweetActions";
import { FiRepeat } from "react-icons/fi";
import { COLORS } from "../Constants";
import { Link } from "react-router-dom";
const SmallTweet = ({ tweet }) => {
  return (
    //this needs to be fixed aka the links
    // <Link to={`/tweet/${tweet.id}`}>
      <Wrapper>
        {tweet.retweetFrom ? (
          <Retweet>
            <Repeat />
            {tweet.retweetFrom.displayName} Remeowed
          </Retweet>
        ) : null}
        <Container>
          <div>
            <Links to={`/${tweet.author.handle}`}>
              <Img
                src={tweet.author.avatarSrc}
                alt={`${tweet.author.handle} profile picture`}
              />
            </Links>
          </div>
          <div>
            <Links to={`/${tweet.author.handle}`}>
              <Bold>{tweet.author.displayName}</Bold>{" "}
            </Links>
            <Links to={`/${tweet.author.handle}`}>
              <span>@{tweet.author.handle}</span>
            </Links>
            <span> • </span>
            <span>{format(new Date(tweet.timestamp), "MMM d")}</span>
            <TweetText>{tweet.status}</TweetText>
            {tweet.media.map((m) => {
              return <ImgTweet key={m.url} src={m.url} />;
            })}
            <TweetActions
              numLikes={tweet.numLikes}
            />
          </div>
        </Container>
      </Wrapper>
    // </Link>
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

const Links = styled(Link)`
  text-decoration: none;
  color: black;
`;

export default SmallTweet;
