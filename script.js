// Function to check the entrance code
function checkCode() {
    const input = document.getElementById('code-input').value.trim();
    const errorMessage = document.getElementById('error-message');
    const unlockPage = document.getElementById('unlock-page');
    const proposalPage = document.getElementById('proposal-page');
    
    // Check if the code matches 'Lakshita' (case-insensitive)
    if (input.toLowerCase() === 'lakshita') {
        // Hide unlock page and show proposal page
        unlockPage.classList.add('hidden');
        proposalPage.classList.remove('hidden');
        errorMessage.textContent = '';
    } else {
        // Show error message
        errorMessage.textContent = '❌ Incorrect code! Try again.';
        document.getElementById('code-input').value = '';
    }
}

// Function when user clicks Yes
function sayYes() {
    const responseMessage = document.getElementById('response-message');
    responseMessage.textContent = '🎉 Yay! You made me the happiest person alive! 💕';
    responseMessage.style.color = '#ff69b4';
    
    // Add celebration effect
    createConfetti();
}

// Function when user clicks Maybe
function sayNo() {
    const responseMessage = document.getElementById('response-message');
    responseMessage.textContent = '🥺 Take your time... I\'ll wait forever for you! 💖';
    responseMessage.style.color = '#d77fa1';
}

// Simple confetti effect
function createConfetti() {
    const colors = ['#ff69b4', '#ffb6c1', '#ff85c1', '#ffa0d2', '#ffc9d0'];
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.borderRadius = '50%';
            confetti.style.pointerEvents = 'none';
            confetti.style.animation = 'fall 3s linear';
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 3000);
        }, i * 30);
    }
}

// Add CSS animation for confetti
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Allow Enter key to submit the code
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('code-input').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            checkCode();
        }
    });
});
