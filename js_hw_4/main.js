document.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;

  const limitedX = x % 100;
  const limitedY = y % 100;

  const coordinatesDiv = document.getElementById("coordinates");
  coordinatesDiv.textContent = `X: ${limitedX}, Y: ${limitedY}`;

  coordinatesDiv.style.color = x > 500 ? "#FF0000" : "#00FF00";
});
