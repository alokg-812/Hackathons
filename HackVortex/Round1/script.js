// Navigation function to switch between screens
function navigateTo(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Show notification
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 2000);
}

// Handle "Take Action" button on Blood Donation screen
function takeAction() {
    showNotification('Blood Donation Request Accepted!');
    setTimeout(() => navigateTo('splash-screen'), 2000);
}

// Switch tabs in Resuscitation Mode
function switchTab(tabElement) {
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    tabElement.classList.add('active');
}

// Handle Post-Emergency Report submission
function submitReport() {
    const title = document.getElementById('report-title').value;
    const location = document.getElementById('report-location').value;
    const datetime = document.getElementById('report-datetime').value;
    const description = document.getElementById('report-description').value;

    if (title && location && datetime && description) {
        showNotification('Report Submitted Successfully!');
        document.getElementById('report-form').reset();
        setTimeout(() => navigateTo('splash-screen'), 2000);
    } else {
        showNotification('Please fill all fields.');
    }
}

// Handle sending messages in AI Chat Companion
function sendMessage() {
    const input = document.getElementById('chat-input');
    const messageText = input.value.trim();

    if (messageText) {
        const messages = document.getElementById('chat-messages');
        const newMessage = document.createElement('div');
        newMessage.classList.add('message', 'right');
        newMessage.textContent = messageText;
        messages.appendChild(newMessage);

        // Simulate AI response
        setTimeout(() => {
            const aiMessage = document.createElement('div');
            aiMessage.classList.add('message');
            aiMessage.textContent = 'I’m here to help! What kind of emergency is it?';
            messages.appendChild(aiMessage);

            // Scroll to bottom
            messages.scrollTop = messages.scrollHeight;
        }, 1000);

        input.value = '';
        messages.scrollTop = messages.scrollHeight;
    }
}
