import React, { useState } from "react";
import axios from "axios";
import "./FloatingChat.css";

function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const sendMessage = async () => {
    if (input.trim()) {
      const newMessages = [...messages, { sender: "user", text: input }];
      setMessages(newMessages);
      setInput("");

      try {
        // Send the prompt to the backend server
        // Replace your existing axios POST request with this:
        const response = await axios.post("/api/generate-content", { prompt: input });


        // Append bot response to the chat
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

  return (
    <div className="floating-chat">
      <button className="chat-toggle" onClick={toggleChat}>
        💬
      </button>
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h5>Chat with Us</h5>
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
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Type a message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FloatingChat;
