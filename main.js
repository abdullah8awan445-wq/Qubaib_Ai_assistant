// DOM elements
const chatContainer = document.getElementById('chatContainer');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

// Initialize chat
function initChat() {
    addMessage("JARVIS Islamic AI activated. How may I assist you today?", false);
}

// Send message function
function sendMessage() {
    const message = messageInput.value.trim();
    if (!message) return;
    
    addMessage(message, true);
    messageInput.value = '';
    
    // Process response
    setTimeout(() => {
        const response = processCommand(message);
        addMessage(response.content, false, true, response.arabic, response.source);
    }, 1000);
}

// Event listeners
sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

// Initialize
initChat();