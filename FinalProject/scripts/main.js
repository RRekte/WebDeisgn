let y = 0; // starting at the top of the canvas

<canvas id="myCanvas" width="400" height="400"></canvas>
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d"); // our drawing “brush”
ctx.fillStyle = "rgba(255, 200, 255, 0.8)";
ctx.shadowColor = "rgba(255, 200, 255, 0.8)";
ctx.shadowBlur = 20;
ctx.beginPath();
ctx.arc(150, 150, 40, 0, Math.PI * 2);
ctx.fill();
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Add this line that erases the previous frame

  ctx.beginPath();
  ctx.arc(150, y, 40, 0, Math.PI * 2); // use y instead of 150 so it moves along the vertical axis
  ctx.fill();

  y += 1; // tiny downward movement
}
function loop() {
  draw();
  requestAnimationFrame(loop);
}

loop(); // start the animation

















