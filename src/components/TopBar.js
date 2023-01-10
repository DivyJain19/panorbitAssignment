import React, { useState, useEffect } from "react";
import classes from "./TopBar.module.css";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UserListElement from "./UserListElement";
const TopBar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [showBox, setShowbox] = useState(false);
  const location = useLocation();
  const page = location.pathname.split("/").pop();
  const params = useParams();
  const userTemp = useSelector((state) => state.user.userData);

  const boxHandler = () => {
    setShowbox((prevState) => !prevState);
  };

  useEffect(() => {
    setUser(userTemp[params.userId - 1]);
  }, [userTemp, params]);
  if (user) {
    return (
      <div className={classes.bar}>
        <div className={classes.pageName}>{page}</div>
        <div>
          <div className={classes.listItem} onClick={boxHandler}>
            <img className={classes.img} src={user.profilepicture} alt="" />
            <p>{user.name}</p>
          </div>
          <div className={showBox ? "box show" : "box hide"}>
            <img className={classes.boxImg} src={user.profilepicture} alt="" />
            <p>{user.name}</p>
            <p className={classes.light}>{user.username}</p>

            <div className={classes.userList}>
              {userTemp &&
                userTemp.map((item) => (
                  <UserListElement
                    userData={item}
                    key={item.id}
                    userName={item.name}
                    userImg={item.profilepicture}
                    redirect={false}
                  />
                ))}
            </div>

            <button
              className={classes.btn}
              onClick={() => {
                navigate("/");
              }}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default TopBar;
