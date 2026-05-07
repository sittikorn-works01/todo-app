let darkmode = localStorage.getItem("darkmode");

const themeSwitch = document.getElementById("theme-switch");

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "enabled" ? enableDarkMode() : disableDarkMode();
});

window.addEventListener("DOMContentLoaded", () => {
  updateTheme();
});

function updateTheme() {
  darkmode = localStorage.getItem("darkmode");
  if (darkmode === "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
}

function enableDarkMode() {
  document.body.classList.add("dark-theme");
  localStorage.setItem("darkmode", "enabled");
  darkmode = "enabled";
}

function disableDarkMode() {
  document.body.classList.remove("dark-theme");
  localStorage.setItem("darkmode", "disabled");
  darkmode = "disabled";
}
