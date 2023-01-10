import React, { useEffect, useState } from "react";
import classes from "./UserData.module.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserData } from "../store/user-actions";
import ChatBox from "../components/ChatBox";
const UserData = () => {
  const params = useParams();
  const [userData, setUserdata] = useState({});
  const [chatData, setChatData] = useState([]);
  const userDataList = useSelector((state) => {
    return state.user.userData;
  });
  //   console.log(userData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userDataList) {
      dispatch(fetchUserData());
    }
    setUserdata(userDataList[params.userId - 1]);
    setChatData(userDataList);
  }, [userDataList, dispatch, params.userId]);
  if (userData) {
    return (
      <div style={{ display: "flex", width: "90%" }}>
        <div className={classes.profileData}>
          <div className={classes.profileImage}>
            <img src={userData.profilepicture} alt="profile pic" />
          </div>
          <div>
            <strong>{userData.name}</strong>
          </div>
          <div className={classes.dataItem}>
            <div className={classes.label}>Username : </div>
            <div className={classes.value}> {userData.username}</div>
          </div>
          <div className={classes.dataItem}>
            <div className={classes.label}>E-mail : </div>
            <div className={classes.value}> {userData.email}</div>
          </div>
          <div className={classes.dataItem}>
            <div className={classes.label}>Phone : </div>
            <div className={classes.value}> {userData.phone}</div>
          </div>
          <div className={classes.dataItem}>
            <div className={classes.label}>Website : </div>
            <div className={classes.value}> {userData.website}</div>
          </div>

          <div className={`${classes.dataItem} ${classes.border}`}>
            <div className={classes.label}>Company </div>
          </div>

          <div className={classes.dataItem}>
            <div className={classes.label}>Name : </div>
            <div className={classes.value}>
              {userData.company && userData.company.name}
            </div>
          </div>
          <div className={classes.dataItem}>
            <div className={classes.label}>catchPhrase : </div>
            <div className={classes.value}>
              {userData.company && userData.company.catchPhrase}
            </div>
          </div>
          <div className={classes.dataItem}>
            <div className={classes.label}>bs : </div>
            <div className={classes.value}>
              {userData.company && userData.company.bs}
            </div>
          </div>
        </div>
        <div className={classes.profileMap}>
          <div className={classes.profileData}>
            <div className={classes.dataItem}>
              <div className={classes.label}>Address </div>
              <div className={classes.value}></div>
            </div>
            <div className={classes.dataItem}>
              <div className={classes.label}>Street : </div>
              <div className={classes.value}>
                {userData.address && userData.address.street}
              </div>
            </div>
            <div className={classes.dataItem}>
              <div className={classes.label}>Suite : </div>
              <div className={classes.value}>
                {userData.address && userData.address.suite}
              </div>
            </div>
            <div className={classes.dataItem}>
              <div className={classes.label}>City : </div>
              <div className={classes.value}>
                {userData.address && userData.address.city}
              </div>
            </div>
            <div className={classes.dataItem}>
              <div className={classes.label}>Zipcode:</div>
              <div className={classes.value}>
                {userData.address && userData.address.zipcode}
              </div>
            </div>
          </div>
        </div>
        <ChatBox userData={chatData} />
      </div>
    );
  } else {
    return <>No Profile Found</>;
  }
};

export default UserData;
