// Command processing
function processCommand(message) {
    const lowerMessage = message.toLowerCase();
    
    // Check for special commands
    if (lowerMessage.includes("rafayadain")) {
        return specialContent.rafayadain;
    }
    
    // Process other commands
    for (const [key, response] of Object.entries(aiResponses)) {
        if (lowerMessage.includes(key)) {
            return response;
        }
    }
    
    // Default response
    return {
        arabic: "بَارَكَ اللَّهُ فِيكَ",
        content: "How may I assist you with Islamic knowledge today?",
        source: "JARVIS Islamic AI"
    };
}