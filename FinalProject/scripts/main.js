
<canvas id="myCanvas" width="400" height="400"></canvas>
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d"); // our drawing “brush”
ctx.fillStyle = "rgba(255, 200, 255, 0.8)";
ctx.shadowColor = "rgba(255, 200, 255, 0.8)";
ctx.shadowBlur = 20;
ctx.beginPath();
ctx.arc(150, 150, 40, 0, Math.PI * 2);
ctx.fill();















