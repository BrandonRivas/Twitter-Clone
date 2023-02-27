import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeFeed from "./HomeFeed";
import Notifications from "./Notifications";
import Bookmarks from "./Bookmarks";
import TweetDetails from "./TweetDetails";
import Profile from "./Profile";
import Sidebar from "./Sidebar";
import GlobalStyles from "../GlobalStyles";

const App = () => {
  return (
    <BrowserRouter>
      <Main>
        <GlobalStyles />
        <Sidebar />
        <Right>
          <Routes>
            <Route path="/" element={<HomeFeed />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/tweet/:tweetId" element={<TweetDetails />} />
            <Route path="/:profileId" element={<Profile />} />
          </Routes>
        </Right>
      </Main>
    </BrowserRouter>
  );
};

const Main = styled.div`
  display: flex;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  float: right;
`;
export default App;
