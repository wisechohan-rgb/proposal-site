body {
  background: linear-gradient(135deg, #ffe9f5, #ffddee 100%);
  min-height: 100vh;
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
}
.centered-card {
  background: #fff8fa;
  border-radius: 24px;
  box-shadow: 0 8px 32px #deb5e788;
  padding: 2.5em 2em 2.2em;
  text-align: center;
  min-width: 340px;
  position: relative;
  overflow: visible;
}
h1 {
  color: #ff68b0;
  font-size: 2em;
  margin-bottom: 13px;
}
.desc {
  color: #d7639d;
  font-size: 1.09em;
  margin-bottom: 24px;
}
input[type="text"] {
  width: 90%;
  padding: .9em;
  border: 2px solid #ffb7df;
  border-radius: 12px;
  font-size: 1.09em;
  margin-bottom: 20px;
  outline: none;
}
#unlock-btn {
  background: linear-gradient(90deg, #ff71c8 0%, #ffb0e0 100%);
  color: #fff;
  font-size: 1.07em;
  border: none;
  border-radius: 12px;
  padding: .9em;
  width: 90%;
  font-weight: bold;
  transition: background 0.15s;
  cursor: pointer;
}
#unlock-btn:hover {
  background: linear-gradient(90deg, #ff509b 0%, #ffb0e0 100%);
}
#result-msg {
  margin-top: 18px;
  font-size: 1.1em;
  color: #d7639d;
}
.button-row {
  display: flex;
  gap: 28px;
  justify-content: center;
  margin-bottom: 22px;
}
.button-row button {
  flex: 0 0 auto;
  padding: .7em 1.8em;
  border-radius: .7em;
  background: #ea7fcc;
  color: #fff;
  border: none;
  font-size: 1.08em;
  cursor: pointer;
  font-weight: bold;
  margin: 0;
  transition: background 0.16s;
}
.button-row button:hover {
  background: #de91ce;
}
#love-response {
  font-size: 1.18em;
  color: #ff68b0;
  margin-top: 17px;
}

/* LETTER EFFECTS */
#love-letter-container {
  animation: letterOpen 1.4s cubic-bezier(.17,.67,.62,1.23) 0.2s both;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background: rgba(255,238,252,0.97);
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.love-letter {
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 0 45px #ea7fcc66, 0 2px 12px #db6caebb;
  padding: 2em 1.5em 1em 1.5em;
  max-width: 350px;
  margin: 35px auto 10px;
  position: relative;
  opacity: 0;
  animation: letterFadeIn 1.6s cubic-bezier(.23,.84,.6,1.29) 1s forwards;
}
.letter-heading {
  font-size: 1.23em;
  font-weight: bold;
  color: #ff68b0;
  margin-bottom: 10px;
  text-align: left;
}
.letter-body {
  white-space: pre-line;
  font-size: 1.09em;
  color: #d7639d;
  margin-bottom: 16px;
  text-align: left;
}
.letter-signature {
  font-size: 1.12em;
  color: #ea7fcc;
  margin-top: 12px;
  text-align: right;
  font-family: 'Segoe UI', cursive, sans-serif;
}
@keyframes letterOpen {
  0% { opacity: 0; transform: scale(0.7); }
  85% { opacity: 1; transform: scale(1.024);}
  100% { opacity: 1; transform: scale(1);}
}
@keyframes letterFadeIn {
  0% { opacity: 0; transform: translateY(40px);}
  100% { opacity: 1; transform: none;}
}
/* Glitter Heart Effect */
#glitter-heart {
  position: absolute;
  left: 50%;
  top: 13%;
  transform: translateX(-50%);
  z-index: 22;
  pointer-events: none;
}
.glitter-heart {
  font-size: 2.2em;
  animation: glitterPulse 1.8s infinite;
  color: #ff68b0;
  filter: drop-shadow(0 0 10px #ffbadc);
}
@keyframes glitterPulse {
  0%, 100% { filter: drop-shadow(0 0 10px #ee91d4);}
  40% { filter: drop-shadow(0 0 18px #f95eaa);}
  70% { filter: drop-shadow(0 0 32px #ffd0ec);}
}
