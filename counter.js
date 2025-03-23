let counter = 0;
let interval;

function startCounter() {
  if (!interval) {
    interval = setInterval(() => {
      counter++;
      document.getElementById("counter").innerText = counter;
    }, 1000);
  }
}

function stopCounter() {
  clearInterval(interval);
  interval = null;
}

document.querySelector("#play").addEventListener("click", startCounter);
document.querySelector("#stop").addEventListener("click", stopCounter);
