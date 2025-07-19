// Voice recognition functionality
function initVoiceRecognition() {
    const voiceButton = document.getElementById('voiceSearchButton');
    
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        
        voiceButton.addEventListener('click', () => {
            recognition.start();
            // Update UI to show listening state
        });
        
        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            document.getElementById('messageInput').value = transcript;
            // Process the voice command
        };
    } else {
        console.log("Voice recognition not supported");
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initVoiceRecognition);