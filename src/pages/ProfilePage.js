import React from "react";
// import { useSelector } from "react-redux";
import NavigationBar from "../components/NavigationBar";
import { Route, Routes } from "react-router-dom";
import UserData from "../userpages/UserData";
import classes from "./ProfilePage.module.css";
import TopBar from "../components/TopBar";
import CommingSoon from "../components/CommingSoon";
import ChatBox from "../components/ChatBox";
const ProfilePage = () => {
  // const userName = useSelector((state) => state);
  return (
    <div className={classes.pro}>
      <NavigationBar />
      <div className={classes.content}>
        <TopBar />
        <Routes>
          <Route path="/profile" element={<UserData />} />
          <Route path="/posts" element={<CommingSoon />} />
          <Route path="/gallery" element={<CommingSoon />} />
          <Route path="/todo" element={<CommingSoon />} />
        </Routes>
      </div>
    </div>
  );
};

export default ProfilePage;
