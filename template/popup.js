// A minimal popup script for a manifest v3 Chrome extension.
// Add your popup logic here.

document.addEventListener("DOMContentLoaded", function () {
  const alertButton = document.getElementById("alertButton");

  alertButton.addEventListener("click", function () {
    alert("Button clicked!");
  });
});
