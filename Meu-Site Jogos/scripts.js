const countdown = document.getElementById("countdown");
let timeLeft = 3600; // 1 hora em segundos

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  countdown.textContent = `${minutes}m ${seconds}s`;
  if (timeLeft > 0) timeLeft--;
}

setInterval(updateTimer, 1000);
