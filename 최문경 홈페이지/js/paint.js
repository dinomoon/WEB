var canvas = document.getElementById("js-canvas");
var ctx = canvas.getContext("2d");
var range = document.getElementById("js-range");
var mode = document.getElementById("js-mode");
var colors = document.getElementsByClassName("js-color");
var clear = document.getElementById("js-clear");
var save = document.getElementById("js-save");
var painting = false;
var filling = false;
var INIT_COLOR = "#2c2c2c"

canvas.width = 400;
canvas.height = 400;

ctx.strokeStyle = INIT_COLOR;
ctx.fillStyle = INIT_COLOR;
ctx.lineWidth = 2.5;

function onMouseMove(event) {
    x = event.offsetX;
    y = event.offsetY;
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function startPainting() {
    painting = true;
}

function stopPainting() {
    painting = false;
}

function handleColorClick(event) {
    var color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    if (filling === true)
        ctx.fillRect(0, 0, canvas.width, canvas.width);
}

function handleRangeChange(event) {
    var size = event.target.value;
    ctx.lineWidth = size;
}

function FillingOrPaint() {
    if (filling === true) {
        filling = false;
        mode.innerText = "채우기";
    } else {
        filling = true;
        mode.innerText = "그리기";
    }
}
function handleClear(){
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function handleCM(event) {
    event.preventDefault(); // 캔버스에서 우클릭 할 수 없게 하기
}
function handleSaveClick(){
    var image = canvas.toDataURL();
    var link = document.createElement("a");
    link.href = image;
    link.download = "내가 그린 그림";
    link.click();
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("contextmenu", handleCM);
}
Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));
if (range) {
    range.addEventListener("input", handleRangeChange);
}
if (mode) {
    mode.addEventListener("click", FillingOrPaint);
}
if (clear) {
    clear.addEventListener("click", handleClear);
}
if (save){
    save.addEventListener("click", handleSaveClick);
}