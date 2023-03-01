import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { COLORS } from "../Constants";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import Error from "./Error";
import { format } from "date-fns";
import { FiMapPin, FiCalendar } from "react-icons/fi";
import SmallTweet from "./SmallTweet";

const Profile = () => {
  const { profileId } = useParams();
  const [profile, setProfile] = useState(null);
  const [status, setStatus] = useState("loading");
  const [feed, setFeed] = useState({});
  const [feedStatus, setFeedStatus] = useState("loading");

  useEffect(() => {
    fetch(`/api/${profileId}/profile`)
      .then((res) => res.json())
      .then((data) => {
        setProfile(data.profile);
        setStatus("idle");
      })
      .catch((error) => {
        console.log(error);
        setStatus("error");
      });
  }, [profileId, setProfile, setStatus]);

  useEffect(() => {
    fetch(`/api/${profileId}/feed`)
      .then((res) => res.json())
      .then((data) => {
        setFeed(data);
        setFeedStatus("idle");
      })
      .catch((error) => {
        console.log(error);
        setFeedStatus("error");
      });
  }, [profileId, setFeed, setFeedStatus]);
  const follow = profile?.isFollowingYou;
  const following = profile?.isBeingFollowedByYou;
  console.log(profile);
  return (
    <Wrapper>
      {status === "error" ? (
        <Error />
      ) : status === "loading" ? (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      ) : (
        <>
          <Banner url={profile.bannerSrc} />
          <BioContainer>
            <Avatar
              src={profile.avatarSrc}
              alt={`${profile.avatarSrc} profile picture`}
            />
            {following ? <Button>Following</Button> : null}

            <DisplayName>{profile.displayName}</DisplayName>
            <HandleContainer>
              <Handle>@{profile.handle}</Handle>
              {follow ? (
                <Follow>
                  <span>Follows You</span>
                </Follow>
              ) : null}
            </HandleContainer>

            <BioText>{profile.bio}</BioText>
            <LocationDate>
              {!profile.location ? null : (
                <span>
                  <FiMapPin /> {profile.location}
                </span>
              )}
              <span>
                <FiCalendar /> Joined{" "}
                {format(new Date(profile.joined), "MMMM yyyy")}
              </span>
            </LocationDate>
            <FollowerInfo>
              <span>
                <Bold>{profile.numFollowing}</Bold> Following
              </span>
              <span>
                <Bold>{profile.numFollowers}</Bold> Followers
              </span>
            </FollowerInfo>
          </BioContainer>
          <TabDiv>
            <TweetTab>Tweets</TweetTab>
            <MediaTab>Media</MediaTab>
            <LikesTab>Likes</LikesTab>
          </TabDiv>
        </>
      )}

      {feedStatus === "error" ? (
        <Error />
      ) : feedStatus === "loading" ? (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      ) : (
        <div>
          {feed.tweetIds.map((tweetId) => {
            const tweet = feed.tweetsById[tweetId];
            return <SmallTweet tweet={tweet} key={tweet.id} />;
          })}
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-right: 2px solid ${COLORS.border};
  width: var(--max-content-width);
  border-left: 2px solid ${COLORS.border};
`;

const BioContainer = styled.div`
  padding: 20px 20px 0 20px;
`;

const Banner = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${(props) => props.url});
  background-position: center;
  background-size: cover;
`;

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  margin-top: -100px;
  border-radius: 50%;
  border: 5px solid white;
`;

const DisplayName = styled.h2`
  font-weight: bold;
  font-size: 23px;
  padding-bottom: 5px;
`;

const Handle = styled.p`
  color: gray;
`;

const BioText = styled.p`
  padding-bottom: 10px;
`;

const LocationDate = styled.div`
  color: gray;
  padding-bottom: 10px;
  & > * {
    padding-right: 10px;
  }
`;

const FollowerInfo = styled.div`
  & > * {
    padding-right: 10px;
  }
`;

const Bold = styled.span`
  font-weight: bold;
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Follow = styled.div`
  background-color: ${COLORS.border};
  width: 80px;
  font-size: 14px;
  padding-left: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 10px;
  margin-left: 5px;
`;

const HandleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  background-color: ${COLORS.primary};
  color: white;
  padding: 15px 20px;
  font-size: 20px;
  border-radius: 40px;
  width: 200px;
  position: absolute;
  margin-left: 500px;
`;
const TabDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  font-size: 18px;
`;

const TweetTab = styled.div`
  color: ${COLORS.primary};
  font-weight: bold;
  border-bottom: 3px solid ${COLORS.primary};
  width: 33.3%;
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`;

const MediaTab = styled.div`
  width: 33.3%;
  border-bottom: 2px solid ${COLORS.border};
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`;

const LikesTab = styled.div`
  width: 33.3%;
  border-bottom: 2px solid ${COLORS.border};
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`;
export default Profile;
