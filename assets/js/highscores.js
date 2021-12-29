// Assignment
var clearBtn = document.querySelector("#clearScore");

function pullScores() {
  return;
}

function clearScores() {
  localStorage.clear();
  return;
}

//Event listeners
window.onload = pullScores();
clearBtn.addEventListener("click", clearScores);