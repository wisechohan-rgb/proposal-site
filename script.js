function checkCode() {
  const code = document.getElementById('code-input').value.trim();
  const result = document.getElementById('result-msg');
  if (code === 'bhakti') {
    result.textContent = "Unlocked! 🎉";
    result.style.color = "#ff68b0";
    document.getElementById('love-question').style.display = '';
    document.getElementById('code-input').style.display = 'none';
    document.getElementById('unlock-btn').style.display = 'none';
  } else {
    result.textContent = "Incorrect code. Try again!";
    result.style.color = "#d7639d";
    document.getElementById('love-question').style.display = 'none';
  }
}
document.getElementById('unlock-btn').addEventListener('click', checkCode);

function yesLove() {
  document.getElementById('love-response').textContent =
    "You just made me the happiest person ever! 💕✨";
  setTimeout(() => {
    document.getElementById('love-letter-container').style.display = '';
    addGlitterHeart();
  }, 1100);
}
function noLove() {
  document.getElementById('love-response').textContent =
    "No worries! I'll keep loving you anyway! 😊🌸";
  document.getElementById('love-letter-container').style.display = 'none';
}
function addGlitterHeart() {
  const glitterDiv = document.getElementById('glitter-heart');
  glitterDiv.innerHTML = '💖';

  // Make glitter heart clickable to open modal
  glitterDiv.addEventListener('click', openModal);
}

// Open modal when cross is clicked in letter
document.getElementById('openModal').addEventListener('click', openModal);

// Modal functions
function openModal() {
  const modal = document.getElementById('modal-overlay');
  if (modal) {
    modal.style.display = 'flex';
  }
}
function closeModal() {
  const modal = document.getElementById('modal-overlay');
  if (modal) {
    modal.style.display = 'none';
  }
}

document.getElementById('closeModal').addEventListener('click', closeModal);

// Optional: close modal by clicking outside content
document.addEventListener('DOMContentLoaded', function() {
  const modalOverlay = document.getElementById('modal-overlay');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', function(e) {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }
});
