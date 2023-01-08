import React, { useState } from "react";
import classes from "./NavigationBar.module.css";
import { Link } from "react-router-dom";
const menuItems = [
  { id: 0, name: "Profile", route: "profile" },
  { id: 1, name: "Posts", route: "posts" },
  { id: 2, name: "Gallery", route: "gallery" },
  { id: 3, name: "ToDo", route: "todo" },
];
const NavigationBar = () => {
  const [page, setPage] = useState(window.location.href.split("/").pop());
  // const page = ;
  return (
    <div className={classes.navBar}>
      {menuItems.map((item) => (
        <Link
          className={`${classes.navBarItem} + " " ${
            page === item.route ? classes.active : ""
          }`}
          key={item.id}
          to={`${item.route}`}
          onClick={() => setPage(item.route)}
        >
          <span className={classes.itemTitle}>{item.name}</span>
          {page === item.route ? (
            <span className={classes.activeIcon}> </span>
          ) : null}
        </Link>
      ))}
    </div>
  );
};

export default NavigationBar;
