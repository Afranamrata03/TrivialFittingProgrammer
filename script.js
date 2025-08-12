// Change the background color cycling through your palette colors
function changeBgColor() {
  const colors = ["#d0e8d0", "#ffc2d1", "#b271cf", "#ffdc5e", "#654579"];
  let currentColor = window.getComputedStyle(document.body).backgroundColor;
  let newColor = colors[Math.floor(Math.random() * colors.length)];

  // Convert RGB string to hex for comparison (simple approximation)
  function rgbToHex(rgb) {
    const result = rgb.match(/\d+/g);
    if (!result) return null;
    return "#" + result.map(x => ("0" + parseInt(x).toString(16)).slice(-2)).join('');
  }

  currentColor = rgbToHex(currentColor) || currentColor;

  while (newColor.toLowerCase() === currentColor.toLowerCase()) {
    newColor = colors[Math.floor(Math.random() * colors.length)];
  }
  document.body.style.backgroundColor = newColor;
}

// Alert on contact link click
function showAlert() {
  alert("Thanks for clicking!");
}

//  button background color between darkgreen and lightgreen
function toggleButtonColor(btn) {
  if (btn.style.backgroundColor === "darkgreen") {
    btn.style.backgroundColor = "lightgreen";
  } else {
    btn.style.backgroundColor = "darkgreen";
  }
}
