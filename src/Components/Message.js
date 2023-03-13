import React from "react";

const Messages = ({ messages, currentMember }) => {
  // console.log(messages);
  // console.log(currentMember);
  const renderMessage = (message, currentMember, id) => {
    const { member, textMessage } = message;
    const myMessage = member.id === currentMember.id;
    const className = myMessage
      ? "Messages-message mainUser"
      : "Messages-message";
    return (
      <li key={id} className={className}>
        <span
          className="avatar"
          style={{ backgroundColor: member.clientData.color }}
        />
        <div className="content">
          <div className="username">{member.clientData.username}</div>
          <div className="text">{textMessage}</div>
        </div>
      </li>
    );
  };
  return (
    <ul className="messagesList">
      {messages.map((m, i) => renderMessage(m, currentMember, i))}
    </ul>
  );
};
export default Messages;
