import "./App.css";
import React, { useState } from "react";
import Message from "./Components/Message";
import Header from "./Components/Header";
import Inputs from "./Components/Inputs";

const randomName = () => {
  const names = [
    "Ante Anić",
    "Anica Anković",
    "Tedy Bear",
    "Mickey Mouse",
    "Minnie Mouse",
    "Mara Marić",
    "Ivo Ivić",
    "Dolly Parton",
  ];
  const namesRandom = names[Math.floor(Math.random() * names.length)];
  return namesRandom;
};

const randomColor = () => {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
};

const App = () => {
  const [appData, setAppData] = useState({
    member: {
      username: randomName(),
      color: randomColor(),
    },
  });
  const [messages, setMessages] = useState([]);
  const drone = new window.Scaledrone("yJ7dWBpcyutbBfPj", {
    data: appData.member,
  });
  drone.on("open", (error) => {
    if (error) {
      return console.error(error);
    }
    appData.member.id = drone.clientId;
  });
  const room = drone.subscribe("observable-room");
  room.on("data", (data, member) => {
    setMessages([...messages, { member, textMessage: data }]);
  });
  const onSendMessage = (message) => {
    drone.publish({
      room: "observable-room",
      message,
    });
  };
  return (
    <div className="chatContainer">
      <Header />
      <Message messages={messages} currentMember={appData.member} />
      <Inputs onSendMessage={onSendMessage} />
    </div>
  );
};
export default App;
