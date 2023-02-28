const chatMessages = document.getElementById("chat-messages");
const sendButton = document.getElementById("send-button");
const messageInput = document.getElementById("message-input");
const data = prompt("Write your name and surname!")
const sendMessage = () => {
  const message = messageInput.value.trim();
  if (!message) {
    return alert("Error");
  } 
  const h1 = document.createElement("div");  
  const messageEl = document.createElement("div"); 
  const time1 = document.createElement("div");
  const time = new Date();
const newTime = time.toLocaleString();

time1.textContent = newTime;
  h1.textContent = data;
  h1.classList.add("data");
 h1.appendChild(time1);
  messageEl.classList.add("chat-message");
  messageEl.textContent = message;
  chatMessages.appendChild(messageEl);
 
 messageEl.appendChild(h1);
  messageInput.value = "";
  chatMessages.scrollTop = chatMessages.scrollHeight;
};
sendButton.addEventListener("click", sendMessage);
messageInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});