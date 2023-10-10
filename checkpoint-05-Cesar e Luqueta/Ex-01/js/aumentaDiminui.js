const arraySorteado = [];
let valorSorteado = parseInt(Math.random() * 1000);
for (let i = 0; i < 1; i++) {
    arraySorteado.push(valorSorteado); // 
}
document.getElementById('sorteio').textContent = arraySorteado;

const botaoMenos = document.querySelector('#bt1');
const botaoMais = document.querySelector('#bt2');

botaoMenos.addEventListener('click', () => {
    valorSorteado--;
    document.getElementById('sorteio').textContent = valorSorteado;
});

botaoMais.addEventListener('click', () => {
    valorSorteado++;
    document.getElementById('sorteio').textContent = valorSorteado; 
});