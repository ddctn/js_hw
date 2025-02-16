// Задача №1

let count = 0;
const button = document.getElementById("clickButton");
const display1 = document.getElementById("clickamount");
const message = document.getElementById("message");

button.addEventListener("click", function () {
  count++;
  display1.textContent = count;

  if (count >= 20) {
    button.disabled = true;
    message.textContent = "you've reached the maximum";
  }
});

// Задача  №2
let countt = 10;
const display2 = document.getElementById("timer");
const resetbtn = document.getElementById("reset");
let interval1;

function startTimer() {
  interval = setInterval(function () {
    countt--;
    display2.textContent = countt;

    if (countt <= 0) {
      clearInterval(interval);
      display.textContent = "Your time is out!";
    }
  }, 1000);
}

resetbtn.addEventListener("click", function () {
  clearInterval(interval);
  countt = 10;
  display.textContent = countt;
  startTimer();
});

startTimer();

// Задача №3
let ccountt = 0;
let intervall;
const display = document.getElementById("timerText");
const startButton = document.getElementById("startTimerButton");
const stopButton = document.getElementById("stopTimerButton");
const resetButton2 = document.getElementById("resetTimerButton");

startButton.addEventListener("click", function () {
  if (!intervall) {
    intervall = setInterval(function () {
      ccountt++;
      display.textContent = ccountt;
    }, 1000);
  }
});

stopButton.addEventListener("click", function () {
  clearInterval(intervall);
  intervall = null;
});

resetButton2.addEventListener("click", function () {
  clearInterval(intervall);
  intervall = null;
  ccountt = 0;
  display.textContent = ccountt;
});
