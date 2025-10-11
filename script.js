function checkCode() {
  const code = document.getElementById('code-input').value.trim();
  const result = document.getElementById('result-msg');
  if (code === 'lakshita') {
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

function yesLove() {
  document.getElementById('love-response').textContent =
    "Aww, you’re the best! My heart is all yours. 💖✨";
}

function noLove() {
  document.getElementById('love-response').textContent =
    "Haha, I’ll keep loving you till you say YES! 😘";
}
