const maxInp = document.getElementById("maxInp");
const minInp = document.getElementById("minInp");
const genBtn = document.getElementById("genBtn");
const resLab = document.getElementById("resLab");
let randnum;

genBtn.onclick = function () {
  const max = Number(maxInp.value);
  const min = Number(minInp.value);
  randnum = Math.random() * (max - min) + min;
  resLab.textContent = randnum;
};
