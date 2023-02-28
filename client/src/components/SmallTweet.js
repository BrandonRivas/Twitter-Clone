import React from "react";
import { format } from "date-fns";
import styled from "styled-components";
import TweetActions from "./TweetActions";

const SmallTweet = ({ tweet }) => {
  return (
    <Wrapper>
      {tweet.retweetFrom ? (
        <Retweet>{tweet.retweetFrom.displayName} Remeowed</Retweet>
      ) : null}
      <Container>
        <div>
          <Img
            src={tweet.author.avatarSrc}
            alt={`${tweet.author.handle} profile picture`}
          />
        </div>
        <div>
          <Bold>{tweet.author.displayName}</Bold>{" "}
          <span>@{tweet.author.handle}</span> <span>•</span>{" "}
          <span>{format(new Date(tweet.timestamp), "MMM d")}</span>
          <TweetText>{tweet.status}</TweetText>
          {tweet.media.map((m) => {
            return <ImgTweet key={m.url} src={m.url} />;
          })}
          <TweetActions
            numRetweets={tweet.numRetweets}
            numLikes={tweet.numLikes}
          />
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 15px;
`;

const Container = styled.div`
  display: flex;
`;

const Retweet = styled.p`
  padding: 20px 40px;
  color: gray;
  font-weight: bold;
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
`;

export default SmallTweet;
