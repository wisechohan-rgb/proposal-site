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
    const proposalPage = document.getElementById('proposal-page');
    const envelopeStage = document.getElementById('envelope-stage');
    
    // Hide proposal page and show envelope
    proposalPage.classList.add('hidden');
    envelopeStage.classList.remove('hidden');
    
    // Add celebration effect
    createConfetti();
}

// Function when user clicks Maybe
function sayNo() {
    const responseMessage = document.getElementById('response-message');
    responseMessage.textContent = '🥺 Take your time... I\'ll wait forever for you! 💖';
    responseMessage.style.color = '#d77fa1';
}

// Function to open the envelope
function openEnvelope() {
    const envelope = document.getElementById('envelope');
    const loveLetter = document.getElementById('love-letter');
    
    // Add opening animation to envelope
    envelope.classList.add('opening');
    
    // Show love letter after a short delay
    setTimeout(() => {
        loveLetter.classList.remove('hidden');
        createFloatingHearts();
    }, 600);
}

// Function to close the love letter
function closeLetter() {
    const loveLetter = document.getElementById('love-letter');
    loveLetter.classList.add('hidden');
}

// Create confetti effect
function createConfetti() {
    const colors = ['#ff69b4', '#ff1493', '#ffc0cb', '#ffb6c1', '#ff85c1'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
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
            confetti.style.zIndex = '9999';
            confetti.style.animation = `fall ${2 + Math.random() * 3}s linear forwards`;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 30);
    }
}

// Create floating hearts effect
function createFloatingHearts() {
    const hearts = ['💕', '💖', '💗', '💓', '💝', '💞'];
    const heartCount = 20;
    
    for (let i = 0; i < heartCount; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.position = 'fixed';
            heart.style.fontSize = '2em';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.bottom = '-50px';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '999';
            heart.style.animation = `floatUp ${3 + Math.random() * 2}s linear forwards`;
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 6000);
        }, i * 100);
    }
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            top: 100vh;
            transform: rotate(360deg);
        }
    }
    
    @keyframes floatUp {
        to {
            bottom: 120vh;
            transform: translateX(${Math.random() * 200 - 100}px) rotate(${Math.random() * 360}deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add enter key support for code input
document.addEventListener('DOMContentLoaded', () => {
    const codeInput = document.getElementById('code-input');
    if (codeInput) {
        codeInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                checkCode();
            }
        });
    }
});
