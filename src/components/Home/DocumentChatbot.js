import React, { useState } from 'react';
import axios from 'axios';

function DocumentChatbot() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState(null);

  const handleGenerateContent = async () => {
    try {
      const res = await axios.post('http://localhost:5000/generate-content', { prompt });
      setResponse(res.data.response);
      setError(null);
    } catch (err) {
      console.error("Error generating content:", err);
      setError("Failed to generate content.");
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Document Chatbot</h2>
      <textarea
        placeholder="Enter your prompt here..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={5}
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <button onClick={handleGenerateContent}>Generate</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {response && (
        <div>
          <h4>Response:</h4>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default DocumentChatbot;
