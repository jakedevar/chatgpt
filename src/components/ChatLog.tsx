import React from "react";
import { useSelector, useDispatch } from 'react-redux';

const ChatLog = ()  => {
  const messages = useSelector((state: any) => state.chatLog.messages);
  return messages.map((item: any) => {
    const classType = item.type === "user" ? "user" : "bot";
    let returnValue;
    if (item.type === "user") {
      returnValue = <p>{item.body}</p>
    } else {
      returnValue = <img src={item.body} />
    }
    return (
      <div className={classType}>
        {returnValue}
      </div>
    )
  })
}

export default ChatLog;
