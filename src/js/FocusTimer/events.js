import { controls, soundControls } from "./elements.js";
import * as actions from "./actions.js";

export function registerControls() {
  controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action;

    if (typeof actions[action] !== "function") return;

    actions[action]();
  });
}

export function registerSoundsControls() {
  soundControls.addEventListener("click", (event) => {
    const action = event.target.dataset.action;

    if (typeof actions[action] !== "function") return;

    const soundsBtn = document.querySelectorAll(".toggle-btn-sound");
    soundsBtn.forEach((btn) => {
      btn.classList.remove("select");
    });

    actions[action]();
  });
}
