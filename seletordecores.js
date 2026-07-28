let hue = document.getElementById("hue")
let sat = document.getElementById("sat")
let light = document.getElementById("light")

let hueVal = document.getElementById("hue-val")
let satVal = document.getElementById("sat-val")
let lightVal = document.getElementById("light-val")

let colorBox = document.getElementById("color-box")
let cssCode = document.getElementById("css-code")

function updateColor() {
  let h = hue.value
  let s = sat.value
  let l = light.value

  hueVal.textContent = h;
  satVal.textContent = s;
  lightVal.textContent = l;

  let hslString = `hsl(${h}, ${s}%, ${l}%)`;

  colorBox.style.backgroundColor = hslString
  cssCode.textContent = hslString
}
hue.addEventListener("input", updateColor)
sat.addEventListener("input", updateColor)
light.addEventListener("input", updateColor)