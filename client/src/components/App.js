import React, { useContext } from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";

import HomeFeed from "./HomeFeed";
import Notifications from "./Notifications";
import Bookmarks from "./Bookmarks";
import TweetDetails from "./TweetDetails";
import Profile from "./Profile";
import Sidebar from "./Sidebar";
import GlobalStyles from "../GlobalStyles";
import Spinner from "./Spinner";
import Error from "./Error";

const App = () => {
  const { status } = useContext(CurrentUserContext);
  return (
    <BrowserRouter>
      <Main>
        <GlobalStyles />
        <Sidebar />
        {status === "error" ? (
          <Error />
        ) : status === "loading" ? (
          <Div>
            <Spinner />
          </Div> //center me please
        ) : (
          <Routes>
            <Route path="/" element={<HomeFeed />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/tweet/:tweetId" element={<TweetDetails />} />
            <Route path="/:profileId" element={<Profile />} />
          </Routes>
        )}
      </Main>
    </BrowserRouter>
  );
};

const Main = styled.div`
  display: flex;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--max-content-width);
`;
export default App;
