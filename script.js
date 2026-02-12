// Code Unlock Functionality
function checkCode() {
  const code = document.getElementById('code-input').value.trim().toLowerCase();
  const result = document.getElementById('result-msg');
  
  if (code === 'Riyanshi') {
    result.textContent = "Unlocked! 🎉";
    result.style.color = "#ff68b0";
    
    setTimeout(() => {
      document.getElementById('home-screen').style.display = 'none';
      document.getElementById('love-question').style.display = 'block';
    }, 800);
  } else {
    result.textContent = "Incorrect code. Try again!";
    result.style.color = "#d7639d";
  }
}

document.getElementById('unlock-btn').addEventListener('click', checkCode);

// Love Question Responses
function yesLove() {
  document.getElementById('love-response').textContent = "You just made me the happiest person ever! 💕✨";
  document.getElementById('love-response').style.color = "#ff68b0";
  
  setTimeout(() => {
    document.getElementById('love-question').style.display = 'none';
    document.getElementById('love-letter-container').style.display = 'block';
  }, 1100);
}

function noLove() {
  document.getElementById('love-response').textContent = "No worries! I'll keep loving you anyway! 😊🌸";
  document.getElementById('love-response').style.color = "#ff68b0";
}

// Modal Functionality
function openModal() {
  document.getElementById('modal-overlay').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal-overlay').style.display = 'none';
}

// Event Listeners for Modal
document.getElementById('openModal').addEventListener('click', openModal);
document.getElementById('closeModal').addEventListener('click', closeModal);

// Close modal when clicking outside the modal content
document.getElementById('modal-overlay').addEventListener('click', function(e) {
  if (e.target === this) {
    closeModal();
  }
});

// Modal buttons functionality (you can customize these)
const modalButtons = document.querySelectorAll('.modal-btn');
modalButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    alert(`You clicked: ${btn.textContent}`);
    // You can add more specific functionality for each button here
  });
});

// Playlist card click functionality (optional)
const playlistCards = document.querySelectorAll('.playlist-card');
playlistCards.forEach((card, index) => {
  card.addEventListener('click', () => {
    const songName = card.querySelector('.song-name').textContent;
    alert(`Now playing: ${songName}`);
    // You can add more specific functionality like playing actual songs
  });
});
