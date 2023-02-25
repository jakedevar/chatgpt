import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import ChatLog from './components/ChatLog';
import { Message } from './models/Message';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from './components/messages/messageSlice';
import Dropdown from 'react-bootstrap/Dropdown';


function App() {
  const messageLog = useSelector((state: any) => state.chatLog.messages);
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  const [input, setInput] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(input);
    const formatedUserObject: Message = {
      type: "user",
      body: input
    }
    dispatch(addMessage(formatedUserObject));
    const response = await axios.post('http://localhost:3002/image', { input });

    const formatedBotObject: Message = {
      type: "bot",
      body: response.data!
    }
    e.target.reset();
    setInput("");
    dispatch(addMessage(formatedBotObject));
  }
  const handleChange = (e: any) => {
    setInput(e.target.value)
  }

  useEffect(() => { }, [messageLog])
  return (
    <div className="App">
      <ChatLog />
      <form onSubmit={handleSubmit}>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <input onChange={handleChange} type="text" placeholder='Enter to Chat'/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
