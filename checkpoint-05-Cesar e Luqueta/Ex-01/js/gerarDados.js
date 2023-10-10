const botao = document.querySelector('#gerarDados');
console.log(botao);

botao.addEventListener('click', () => {
    const tabela = document.querySelectorAll('.moto');
    console.log(tabela);

    const resultadoMaior = document.querySelector('.maiorGasto'); // c - Seleciona a célula para exibir o modelo com maior gasto
    const resultadoMenor = document.querySelector('.menorGasto'); // c - Seleciona a célula para exibir o modelo com menor gasto

    let maiorGastoMensal = 0; // Inicializa com 0 ou qualquer outro valor mínimo possível
    let menorGastoMensal = Number.MAX_VALUE; // Inicializa com o maior valor possível em JavaScript
    let modeloMaiorGasto = ''; //c
    let modeloMenorGasto = ''; //c
    let maiorPreco = 0; // Inicializa com 0 ou qualquer outro valor mínimo possível - b

    tabela.forEach(tabela => { // a
        const modelo = tabela.querySelector('.modelo').textContent;
        const preco = Number(tabela.querySelector('.preco').textContent);
        const tempo = Number(tabela.querySelector('.tempo').textContent);
        const autonomia = Number(tabela.querySelector('.autonomia').textContent);
        const kilometragem = Number(tabela.querySelector('.kilometragem').textContent);
        const numCarregamentos = kilometragem / autonomia;
        gastoMes = (numCarregamentos * tempo) * 1.304;
        tabela.querySelector('.gasto').textContent = gastoMes.toFixed(2); //fixed 2 para aparcer em reais

        if (gastoMes > maiorGastoMensal) {
            maiorGastoMensal = gastoMes; // Atualiza o maior gasto mensal
            modeloMaiorGasto = modelo; // Atualiza o modelo com maior gasto - c
        }

        if (gastoMes < menorGastoMensal) {
            menorGastoMensal = gastoMes; // Atualiza o menor gasto mensal
            modeloMenorGasto = modelo; // Atualiza o modelo com menor gasto - c
        }

        if (preco > maiorPreco) {
            maiorPreco = preco; // Atualiza o maior preço
            modeloMaiorPreco = modelo; // Atualiza o modelo com maior preço - b
        }

    });

    resultadoMaior.textContent = modeloMaiorGasto; //c
    resultadoMenor.textContent = modeloMenorGasto; //c


    //css - b 
    tabela.forEach(tabela => {  
        const preco = Number(tabela.querySelector('.preco').textContent);

         // obs: querido professor a gente tentou fazer do jeito que voce ensinou na aula pra ficar vermelho porem não funcionou, apenas aparecia no console o bg-danger em formato de borda, esse foi o """melhor""" metodo que encontramos para deixar tudo vermelho quando fosse calculado o gasto selecionamos cada 'td' e colocamos que quando ele fosse o maior cada um ficaria em vermelho...
        const elementos = tabela.querySelectorAll('.modelo, .preco, .tempo, .autonomia, .kilometragem, .gasto');

        if (preco === maiorPreco) {
            elementos.forEach(elemento => {
                elemento.classList.add('bg-danger', 'text-light', 'lead'); //adc css em tds os elementos
            });
        }
    });
});

