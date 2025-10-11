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
        startHeartAnimation();
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
    responseMessage.textContent = '💕 Take your time, I\'ll wait forever! 💕';
    
    // Button runs away
    const noBtn = document.querySelector('.no-btn');
    const randomX = Math.random() * 100 - 50;
    const randomY = Math.random() * 100 - 50;
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Function to open envelope
function openEnvelope() {
    const envelope = document.getElementById('envelope');
    const letterPopup = document.getElementById('letter-popup');
    
    envelope.classList.add('open');
    
    // Show letter after animation
    setTimeout(() => {
        letterPopup.classList.remove('hidden');
    }, 600);
}

// Function to close letter
function closeLetter() {
    const letterPopup = document.getElementById('letter-popup');
    letterPopup.classList.add('hidden');
}

// Create floating hearts animation
function startHeartAnimation() {
    const heartsContainer = document.getElementById('hearts-container');
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = ['💕', '💖', '💗', '💝', '💞'][Math.floor(Math.random() * 5)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
        
        heartsContainer.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}

// Create confetti effect
function createConfetti() {
    const heartsContainer = document.getElementById('hearts-container');
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.classList.add('heart');
            confetti.textContent = ['💕', '💖', '💗', '💝', '💞', '🌸', '🌺', '🌹'][Math.floor(Math.random() * 8)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            
            heartsContainer.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 4000);
        }, i * 100);
    }
}

// Allow Enter key to submit code
document.addEventListener('DOMContentLoaded', function() {
    const codeInput = document.getElementById('code-input');
    if (codeInput) {
        codeInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                checkCode();
            }
        });
    }
});
