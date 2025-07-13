const display = document.getElementById("display");

window.addEventListener("load", () => {
  const valorSalvo = localStorage.getItem("visor");
  if (valorSalvo !== null) {
    display.value = valorSalvo;
  }
});
function adicionar(valor) {
  display.value += valor;
  localStorage.setItem("visor", display.value);
  console.log(`O numero é ${variavel}`);
}
function limpar() {
  display.value = "";
  localStorage.removeItem("visor");
}

function remover() {
  display.value = display.value.slice(0, -1);
}
function calcular() {
  if (display.value === "") {
    display.value = "Você precisa escrever um numero";
  }
  try {
    display.value = eval(display.value);
    localStorage.setItem("visor", display.value);
  } catch (error) {
    display.value = "Erro";
  }
}


