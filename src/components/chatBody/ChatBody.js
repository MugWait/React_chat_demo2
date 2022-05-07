import React from "react";
import ChatContent from "../ChatContent/ChatContent";
import ChatList from "../chatList/ChatList";
import UserProfile from "../userProfile/UserProfile";
import "./chatbody.css";

const ChatBody = () => {
  return (
    <div className="main__chatbody">
      <ChatList />
      <ChatContent />
      <UserProfile />
    </div>
  );
};

export default ChatBody;
