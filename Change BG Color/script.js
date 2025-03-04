function changeColor() {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let s = Math.round(Math.random() * 255);

  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + s + ")";
}
