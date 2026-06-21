let valor = 0;
const contador = document.getElementById('contador');
const botao = document.getElementById('botao');

botao.addEventListener('click', () => {
  valor++;
  contador.innerText = valor;
});
