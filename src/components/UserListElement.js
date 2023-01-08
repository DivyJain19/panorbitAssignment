import React from "react";
import classes from "./UserListElement.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../store/user-slice";
const UserListElement = (props) => {
  const dispatch = useDispatch();
  const selectUserHandler = () => {
    dispatch(userActions.setUser(props.userData.id));
  };

  return (
    <Link
      style={{ textDecoration: "none", color: "black" }}
      to={`user/${props.userData.id}/profile`}
      onClick={selectUserHandler}
    >
      <div className={classes.listItem}>
        <img className={classes.img} src={props.userImg} alt="" />
        <p>{props.userName}</p>
      </div>
    </Link>
  );
};

export default UserListElement;
