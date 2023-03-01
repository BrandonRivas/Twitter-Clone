import React, { useEffect, useState } from "react";
import TweetActions from "./TweetActions";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../Constants";
import Error from "./Error";
import Spinner from "./Spinner";
import { format } from "date-fns";

const TweetDetails = () => {
  const { tweetId } = useParams();
  const [tweet, setTweet] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetch(`/api/tweet/${tweetId}`)
      .then((res) => res.json())
      .then((data) => {
        setTweet(data.tweet);
        setStatus("idle");
      })
      .catch((error) => {
        console.log(error);
        setStatus("error");
      });
  }, [tweetId, setTweet, setStatus]);

  return (
    <Wrapper>
      <NavContainer>
        <Links to="/">
          <ArrowLeft />
        </Links>
        <H2>Meow</H2>
      </NavContainer>
      {status === "error" ? (
        <Error />
      ) : status === "loading" ? (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      ) : (
        <BigTweet>
          <HandleContainer>
            <Links to={`/${tweet.author.handle}`}>
              <ImgProfile
                src={tweet.author.avatarSrc}
                alt={`${tweet.author.avatarSrc} profile picture`}
              />
            </Links>
            <UserInfo>
              <Links to={`/${tweet.author.handle}`}>
                <Name>{tweet.author.displayName}</Name>
              </Links>{" "}
              <Links to={`/${tweet.author.handle}`}>
                <Handle>@{tweet.author.handle}</Handle>
              </Links>
            </UserInfo>
          </HandleContainer>
          <div>
            <TweetContent>{tweet.status}</TweetContent>
            {tweet.media.map((m) => {
              return <ImgContent key={m.url} src={m.url} />;
            })}

            <TimeInfo>
              <span>{format(new Date(tweet.timestamp), "p")}</span>{" "}
              <span>•</span>{" "}
              <span>{format(new Date(tweet.timestamp), "MMM d yyyy")} </span>
              <span>•</span> <span>Critter web app</span>
            </TimeInfo>
          </div>
          <TweetActions numLikes={tweet.numLikes} />
        </BigTweet>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-right: 2px solid ${COLORS.border};
  width: var(--max-content-width);
  border-left: 2px solid ${COLORS.border};
`;
const NavContainer = styled.div`
  border-bottom: 2px solid ${COLORS.border};
  display: flex;
  align-items: center;
  padding-left: 20px;
`;

const ArrowLeft = styled(FiArrowLeft)`
  font-size: 30px;
  color: black;
`;
const BigTweet = styled.div`
  padding-left: 70px;
  border-bottom: 2px solid ${COLORS.border};
`;

const H2 = styled.h2`
  font-size: 30px;
  font-weight: bold;
  padding: 20px;
`;
const HandleContainer = styled.div`
  display: flex;
  padding-bottom: 10px;
  padding-top: 10px;
`;

const UserInfo = styled.div`
  padding-left: 10px;
`;
const Name = styled.p`
  font-weight: bold;
`;
const Handle = styled.p`
  padding-top: 5px;
  color: grey;
`;
const ImgProfile = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const TweetContent = styled.p`
  font-size: 20px;
  padding-bottom: 10px;
`;
const ImgContent = styled.img`
  width: 900px;
  border-radius: 10px;
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TimeInfo = styled.div`
  margin-top: 10px;
  color: #666464;
`;

const Links = styled(Link)`
  text-decoration: none;
  color: black;
`;
export default TweetDetails;
