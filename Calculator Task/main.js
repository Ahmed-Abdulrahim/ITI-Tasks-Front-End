const addres = document.querySelector("#addres");
const multRes = document.querySelector("#multres");
const numOneAdd = document.querySelector("#firstnumadd");
const numTwoAdd = document.querySelector("#secnumadd");
const numOneMult = document.querySelector("#firstnummult");
const numTwoMutl = document.querySelector("#secnummult");

function add() {
  const num1 = Number(numOneAdd.value);
  const num2 = Number(numTwoAdd.value);

  addres.textContent = num1 + num2;
}

numOneAdd.addEventListener("input", add);
numTwoAdd.addEventListener("input", add);

function mult() {
  const num1 = Number(numOneMult.value);
  const num2 = Number(numTwoMutl.value);
  multRes.textContent = num1 * num2;
}
numOneMult.addEventListener("input", mult);
numTwoMutl.addEventListener("input", mult);
