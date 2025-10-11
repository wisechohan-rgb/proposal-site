// Function to check the entrance code
function checkCode() {
    const input = document.getElementById('code-input').value.trim();
    const unlockMessage = document.getElementById('unlock-message');
    const unlockSection = document.getElementById('unlock-section');
    const proposalSection = document.getElementById('proposal-section');
    
    // Check if the code matches 'Lakshita' (case-insensitive)
    if (input.toLowerCase() === 'lakshita') {
        // Hide unlock section and show proposal section
        unlockSection.classList.add('hidden');
        proposalSection.classList.remove('hidden');
        unlockMessage.textContent = '';
        startHeartAnimation();
    } else {
        // Show error message
        unlockMessage.textContent = '❌ Incorrect code! Try again.';
        document.getElementById('code-input').value = '';
    }
}

// Function when user clicks Yes
function sayYes() {
    const responseMessage = document.getElementById('response-message');
    const proposalSection = document.getElementById('proposal-section');
    const envelopeSection = document.getElementById('envelope-section');
    
    responseMessage.textContent = '🎉 Yay! You made me the happiest person! 🎉';
    createConfetti();
    
    // Show envelope after 2 seconds
    setTimeout(() => {
        proposalSection.classList.add('hidden');
        envelopeSection.classList.remove('hidden');
    }, 2000);
}

// Function when user clicks Maybe
function sayNo() {
    const responseMessage = document.getElementById('response-message');
    responseMessage.textContent = '😊 Take your time! I\'ll be waiting... 💕';
}

// Open envelope and show letter
function openLetter() {
    const envelopeSection = document.getElementById('envelope-section');
    const letterSection = document.getElementById('letter-section');
    const envelope = document.getElementById('envelope');
    
    // Add open animation
    envelope.classList.add('open');
    
    // Show letter after animation
    setTimeout(() => {
        envelopeSection.classList.add('hidden');
        letterSection.classList.remove('hidden');
    }, 1000);
}

// Close letter function
function closeLetter() {
    const letterSection = document.getElementById('letter-section');
    const envelopeSection = document.getElementById('envelope-section');
    
    letterSection.classList.add('hidden');
    envelopeSection.classList.remove('hidden');
    
    // Remove open class to reset envelope
    const envelope = document.getElementById('envelope');
    envelope.classList.remove('open');
}

// Floating hearts animation
function startHeartAnimation() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.textContent = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '100vh';
        heart.style.fontSize = Math.random() * 20 + 20 + 'px';
        heart.style.animation = 'float 4s linear';
        heart.style.pointerEvents = 'none';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 4000);
    }, 300);
}

// Confetti effect
function createConfetti() {
    const colors = ['#ff1493', '#ff69b4', '#ffc0cb', '#00ff88', '#ffcc00'];
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-10px';
            confetti.style.borderRadius = '50%';
            confetti.style.animation = 'fall 3s linear';
            confetti.style.pointerEvents = 'none';
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 3000);
        }, i * 30);
    }
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        to {
            transform: translateY(-100vh);
            opacity: 0;
        }
    }
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
