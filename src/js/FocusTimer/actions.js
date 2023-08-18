import * as timer from "./timer.js";
import state from "./states.js";
import * as sounds from "./sounds.js";

export function play() {
  state.isRunning = true;
  timer.countdown();
  console.log("Play");
}

export function reset() {
  state.isRunning = false;
  timer.updateDisplay();
}

export function increaseTime() {
  if (state.minutes >= 60 || state.isRunning) return;

  state.minutes += 5;
  timer.updateDisplay();
}

export function decreaseTime() {
  if (state.minutes <= 5 || state.isRunning) return;

  state.minutes -= 5;
  timer.updateDisplay();
}

export function florestBackgroundSound() {
  state.isMuted = !document.documentElement.classList.toggle("music-on");

  if (state.isMuted) {
    sounds.florestBackground.pause();
    document.getElementById("florest-btn").classList.remove("select");
    return;
  }

  document.getElementById("florest-btn").classList.add("select");

  sounds.florestBackground.play();
}

export function rainBackgroundSound() {
  state.isMuted = !document.documentElement.classList.toggle("music-on");

  if (state.isMuted) {
    sounds.rainBackgroundSound.pause();
    document.getElementById("rain-btn").classList.remove("select");
    return;
  }

  document.getElementById("rain-btn").classList.add("select");

  sounds.rainBackgroundSound.play();
}

export function coffeeStoreBackgroundStore() {
  state.isMuted = !document.documentElement.classList.toggle("music-on");

  if (state.isMuted) {
    sounds.coffeeStoreBackgroundStore.pause();
    document.getElementById("coffee-btn").classList.remove("select");
    return;
  }

  document.getElementById("coffee-btn").classList.add("select");

  sounds.coffeeStoreBackgroundStore.play();
}

export function firesideBackgroundSound() {
  state.isMuted = !document.documentElement.classList.toggle("music-on");

  if (state.isMuted) {
    sounds.firesideBackgroundSound.pause();
    document.getElementById("fireside-btn").classList.remove("select");
    return;
  }

  document.getElementById("fireside-btn").classList.add("select");

  sounds.firesideBackgroundSound.play();
}
