document.addEventListener("DOMContentLoaded", () => {
  const socket = io();

  // Get DOM elements
  const messageInput = document.getElementById("message-input");
  const sendBtn = document.getElementById("send-btn");
  const chatBox = document.getElementById("chat-box");

  // Send message when button is clicked
  sendBtn.addEventListener("click", () => {
    const message = messageInput.value;
    socket.send(message); // Send message to the server
    messageInput.value = ""; // Clear input field
  });

  // Receive message from the server
  socket.on("message", (msg) => {
    const newMessage = document.createElement("div");
    newMessage.innerText = msg;
    chatBox.appendChild(newMessage);
  });
});
