import { useState } from "react";
function MessageBoard() {
  const [messageInput, setMessageInput] = useState("");
  const [message, setMessage] = useState([]);
  const handleSubmit = () => {
    // clone arry
    const newMessage = [...message];
    newMessage.push(messageInput);
    setMessage(newMessage);
  };
  const deleteText = (textindex) => {
    const newMessage = [...message];
    newMessage.splice(textindex, 1);
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
            value={messageInput}
            onChange={(event) => {
              setMessageInput(event.target.value);
            }}
          />
        </label>
        <button className="submit-message-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div class="board">
        {message.map((text, index) => {
          return (
            <div key={index} className="message">
              <h1>{text}</h1>
              <button
                className="delete-button"
                onClick={() => {
                  deleteText(index);
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
