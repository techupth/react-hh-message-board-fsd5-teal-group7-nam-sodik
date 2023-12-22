import { useState } from "react";

function MessageBoard() {
  const [inputMessage, setInputMessage] = useState("");
  const [message, setMessage] = useState([]);

  const handleInput = (event) => {
    setInputMessage(event.target.value);
  };

  const addMessage = (event) => {
    event.preventDefault();
    const newMessage = [...message];
    newMessage.push(inputMessage);
    setMessage(newMessage);
  };

  const delMessage = (messageIndex) => {
    const newMessage = [...message];
    newMessage.splice(messageIndex, 1);
    setMessage(newMessage);
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={handleInput}
            value={inputMessage}
          />
        </label>
        <button className="submit-message-button" onClick={addMessage}>
          Submit
        </button>
      </div>
      <div class="board">
        {message.map((item, index) => {
          return (
            <div className="message">
              {<h1>{item}</h1>}
              <button
                className="delete-button"
                onClick={() => {
                  delMessage(index);
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
