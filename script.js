function yesResponse() {
  document.getElementById('response-message').textContent = "🎉 Yayyy! I love you so much! 💖💕";
  showHearts();
}
function noResponse() {
  document.getElementById('response-message').textContent = "💕 It's okay, I'll wait forever! 💕";
}
function showHearts() {
  const container = document.getElementById('hearts-container');
  container.innerHTML = '';
  for(let i=0; i<10; i++) {
    setTimeout(() => {
      let heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = (Math.random()*80+10)+'%';
      heart.textContent = "❤️";
      heart.style.bottom = '0';
      container.appendChild(heart);
      setTimeout(()=>heart.remove(), 4000);
    }, i*300);
  }
}
