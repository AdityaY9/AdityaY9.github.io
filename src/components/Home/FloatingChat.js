// FloatingChat.js
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./FloatingChat.css";

function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Welcome to my website! Hope it helps you get to know me better." },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const sendMessage = async () => {
    if (input.trim()) {
      const newMessages = [...messages, { sender: "user", text: input }];
      setMessages(newMessages);
      setInput("");

      try {
        // Send the user's prompt to the server
        const response = await axios.post("/api/generate-content", { prompt: input });
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: response.data.response },
        ]);
      } catch (error) {
        console.error("Error getting response from server:", error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: "There was an error getting a response. Please try again." },
        ]);
      }
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="floating-chat">
      <button className="chat-toggle" onClick={toggleChat}>
        💬
      </button>
      {isOpen && (
        <div className={`chat-window ${isOpen ? "open" : ""}`}>
          <div className="chat-header">
            <h6>Chat with my virtual version!</h6>
            <button className="close-chat" onClick={toggleChat}>×</button>
          </div>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${msg.sender === "bot" ? "bot" : "user"}`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Feel free to ask me anything!"
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FloatingChat;
