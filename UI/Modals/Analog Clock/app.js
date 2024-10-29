var numberHours = document.querySelector(".number_hours");
var secondsBar = document.querySelector(".seconds_bar");

var numberElement = [];
var barElement = [];

for (let i = 1; i <= 12; i++) {
  numberElement.push(`<span style="--index:${i}"><p>${i}</p></span>`);

  // console.log(numberElement);
}
numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""));
console.log(numberHours);

for (let i = 1; i <= 60; i++) {
  barElement.push(`<span style="--index:${i}"><p></p></span>`);
}
secondsBar.insertAdjacentHTML("afterbegin", barElement.join(""));
console.log(numberHours);

// Time
const handHours = document.querySelector(".hand.hour");
const handMinutes = document.querySelector(".hand.minute");
const handSeconds = document.querySelector(".hand.second");

function getCurrentTime() {
  let date = new Date();
  let currentHours = date.getHours();
  let currntMinutes = date.getMinutes();
  let currentSeconds = date.getSeconds();

  // 12 hours = 360deg so 1 hour = 360 / 12 = 30deg
  // 1 hour = 30deg that means 60 min = 30deg so 1 min = 30 / 60 = 0.5 or 1/2 deg
  // so formula for hours is (hours * 30 + minutes / 2)

  handHours.style.transform = `rotate(${
    currentHours * 30 + currntMinutes / 2
  }deg)`;

  // 60 minutes = 360deg so 1min = 360 / 60 = 6deg
  handMinutes.style.transform = `rotate(${currntMinutes * 6}deg)`;

  // 60 seconds -= 360deg so 1 sec = 360 / 60 = 6deg
  handSeconds.style.transform = `rotate(${currentSeconds * 6}deg)`;

  // Sound effect for second hand

  let sound = new Audio("./audio/sound.wav");
  sound.play();
}

getCurrentTime();

// call getCurrentTime to set clock hands every second
setInterval(getCurrentTime, 1000); // 1000ms = 1s
