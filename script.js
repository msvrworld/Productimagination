function sendMessage() {
  const userInput = document.getElementById('user-input').value;
  if (userInput.trim() !== '') {
    displayUserMessage(userInput);
    // Implement logic to handle user input (e.g., send to backend, process response)
    // For example, you can call a function to handle AI responses
    handleBotResponse(userInput);
    document.getElementById('user-input').value = '';
  }
}

function displayUserMessage(message) {
  const chatBox = document.getElementById('chat-box');
  chatBox.innerHTML += `<div class="user-message">${message}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
}

function displayBotMessage(message) {
  const chatBox = document.getElementById('chat-box');
  chatBox.innerHTML += `<div class="bot-message">${message}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
}

function handleBotResponse(userInput) {
  // Here you simulate bot response (replace with backend call or AI logic)
  // For example purposes, it responds with a simple message
  const botResponse = `Bot: Hello! You said: "${userInput}"`;
  displayBotMessage(botResponse);
}
