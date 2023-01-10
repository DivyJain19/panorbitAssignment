import React, { useState } from "react";
import classes from "./ChatBox.module.css";
import { MdKeyboardArrowUp } from "react-icons/md";
import { BsChatRight } from "react-icons/bs";
const ChatBox = (props) => {
  const [showChats, setShowChats] = useState(false);
  const chatBoxHandler = () => {
    setShowChats((prevState) => !prevState);
  };
  return (
    <div className={classes.chatBox}>
      <div className={classes.chat} onClick={chatBoxHandler}>
        <div className={classes.icon}>
          <BsChatRight size={17} color="white" />
          <p style={{ color: "white" }}>Chats</p>
        </div>
        <MdKeyboardArrowUp size={23} color="white" />
      </div>
      {showChats && (
        <div className={classes.chats}>
          {props.userData.map((item) => {
            return (
              <div className={classes.chatUser} key={item.id}>
                <img
                  className={classes.userImg}
                  src={item.profilepicture}
                  alt=""
                />
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ChatBox;
