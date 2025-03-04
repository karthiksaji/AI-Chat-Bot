import React, { useState } from "react";
import ChatBotStart from "./components/ChatBotStart";
import ChatBotApp from "./components/ChatBotApp";
const App = () => {
  const [isChatting, setIsChatting] = useState(false);
  const handleStartChat = () => {
    setIsChatting(true);
  };
  const handleGoBack = () => {
    setIsChatting(false);
  };
  return (
    <div className="container">
      {isChatting ? (
        <div>
          <ChatBotApp onGoBack={handleGoBack} />
          <h1>hyyyy</h1>
        </div>
      ) : (
        <ChatBotStart onStartChat={handleStartChat} />
      )}
    </div>
  );
};

export default App;
