import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MobileNavbar from "./components/MobileNavbar";

import Home from "./pages/Home";
import WatchVideo from "./pages/WatchVideo";
import Channel from "./pages/Channel";
import SearchResults from "./pages/SearchResults";
import Trending from "./pages/Trending";
import Subscriptions from "./pages/Subscriptions";
import Library from "./pages/Library";
import History from "./pages/History";
import MyVideos from "./pages/MyVideos";
import LikedVideos from "./pages/LikedVideos";
import NotFound from "./pages/NotFound";

import Container from "./styles/Container";

import useLocationChange from "./hooks/useLocationChange";

function App() {
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);
  useLocationChange(handleCloseSidebar);

  function handleCloseSidebar() {
    setSidebarOpen(false);
  }

  function handleToggleSidebar() {
    setSidebarOpen(!isSidebarOpen);
  }

  return (
    <>
      <Navbar handleToggleSidebar={handleToggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <MobileNavbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch/:videoId" element={<WatchVideo />} />
          <Route path="/channel/:channelId" element={<Channel />} />
          <Route path="/results/:searchQuery" element={<SearchResults />} />
          <Route path="/feed/trending" element={<Trending />} />
          <Route path="/feed/subscriptions" element={<Subscriptions />} />
          <Route path="/feed/library" element={<Library />} />
          <Route path="/feed/history" element={<History />} />
          <Route path="/feed/my_videos" element={<MyVideos />} />
          <Route path="/feed/liked_videos" element={<LikedVideos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
