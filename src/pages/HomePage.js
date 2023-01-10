import React from "react";
import classes from "./HomePage.module.css";
import { useSelector } from "react-redux";
import UserListElement from "../components/UserListElement";
const HomePage = () => {
  const userData = useSelector((state) => state.user.userData);

  return (
    <div className={classes.mainDiv}>
      <div className={classes.contentDiv}>
        <h1 className={classes.h}>Select An Account</h1>
        <div className={classes.userList}>
          {userData &&
            userData.map((item) => (
              <UserListElement
                userData={item}
                key={item.id}
                userName={item.name}
                userImg={item.profilepicture}
                redirect={true}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
