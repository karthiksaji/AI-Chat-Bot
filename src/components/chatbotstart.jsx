import React from "react";
import "./chatbotstart.css";

const ChatBotStart = ({ onStartChat }) => {
  return (
    <div classname="start-page">
      <button className="start-page-button" onClick={onStartChat}>
        Chat AI
      </button>
      ;
    </div>
  );
};

export default ChatBotStart;
