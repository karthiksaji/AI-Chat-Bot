import React, { useState } from "react";
// import ChatBotStart from "./Components/ChatBotStart";
// import ChatBotApp from "./Components/ChatBotApp";
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
        // <ChatBotApp onGoBack={handleGoBack} />
        <p>hhyyy</p>
      ) : (
        // <ChatBotStart onStartChat={handleStartChat} />
        <p>hhyyy</p>
      )}
    </div>
  );
};

export default App;
