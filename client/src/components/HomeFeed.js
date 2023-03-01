import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import { COLORS } from "../Constants";
import Error from "./Error";
import TweetContainerInput from "./TweetContainerInput";
import SmallTweet from "./SmallTweet";

const HomeFeed = () => {
  const [content, setContent] = useState({});
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetch("/api/me/home-feed")
      .then((res) => res.json())
      .then((data) => {
        setContent(data);
        setStatus("idle");
      })
      .catch((error) => {
        console.log(error);
        setStatus("error");
      });
  }, [setContent, setStatus]);

  return (
    <HoldMe>
      <>
        <H1>Home</H1>
        <Wrapper>
          <TweetContainerInput />
        </Wrapper>
        {status === "error" ? (
          <Error />
        ) : status === "loading" ? (
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        ) : (
          <div>
            {content.tweetIds.map((tweetId) => {
              const tweet = content.tweetsById[tweetId];

              return <SmallTweet tweet={tweet} key={tweet.id} />;
            })}
          </div>
        )}
      </>
    </HoldMe>
  );
};
const HoldMe = styled.div`
  border-right: 2px solid ${COLORS.border};
  width: var(--max-content-width);
  border-left: 2px solid ${COLORS.border};
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 5px solid ${COLORS.border};
`;

const H1 = styled.h1`
  font-size: 30px;
  font-weight: bold;
  padding: 20px;
  border-bottom: 2px solid ${COLORS.border};
`;

export default HomeFeed;
