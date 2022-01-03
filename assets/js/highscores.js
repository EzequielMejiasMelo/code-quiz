// Assignment
var clearBtn = document.querySelector("#clearScore");
var listEl = document.querySelector("#scoreList");

function pullScores() {
  var archive = [],
    keys = Object.keys(localStorage),
    i = 0, key;
  
  for (; key = keys[i]; i++){
    archive.push(key + "=" + localStorage.getItem(key));

    var listItem = document.createElement("li");
    listItem.textContent = key + " - " + localStorage.getItem(key);
    listEl.appendChild(listItem);
  }

  console.log(archive);
  return;
}

function clearScores() {
  localStorage.clear();
  listEl.classList.add("hide");
  while(listEl.hasChildNodes()){
    listEl.removeChild(list.firstChild);
  }
  return;
}

function goBack() {
  location.href = "./index.html";
}

//Event listeners
window.addEventListener("load", pullScores);
clearBtn.addEventListener("click", clearScores);
backBtn.addEventListener("click", goBack);