"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loadingScreen");
  const instructionsScreen = document.getElementById("instructionsScreen");
  const examApp = document.getElementById("examApp");
  const resultScreen = document.getElementById("resultScreen");

  setTimeout(() => {
    loadingScreen?.classList.add("hidden");
    instructionsScreen?.classList.remove("hidden");
    examApp?.classList.add("hidden");
    resultScreen?.classList.add("hidden");
  }, 1200);
});
