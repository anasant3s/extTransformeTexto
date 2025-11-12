//BOTAO LETRAS MAIUSCULA
window.document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("btnMaiuscula")
    .addEventListener("click", function () {
      let inputText = document.querySelector("#input-text").value;
      document.querySelector("#input-Result").innerHTML = inputText.toUpperCase();
    });

  //BOTAO LETRAS MINUSCULAS
  document
    .getElementById("btnMinuscula")
    .addEventListener("click", function () {
      let inputText = document.querySelector("#input-text").value;
      document.querySelector("#input-Result").innerHTML = inputText.toLowerCase();
    });
});

//capitalizar palavras
  function capitalizarTexto() {
            // 1. Obter o valor do campo de entrada (input)
            const inputElement = document.getElementById('input-text');
            const textoOriginal = inputElement.value;

            // 2. Dividir o texto em palavras
            const palavras = textoOriginal.split(' ');

            // 3. Iterar sobre cada palavra e capitalizar a primeira letra
            const palavrasCapitalizadas = palavras.map(palavra => {
                if (palavra.length > 0) {
                    // Pega a primeira letra e transforma em maiúscula
                    const primeiraLetra = palavra.charAt(0).toUpperCase();
                    // Pega o restante da palavra (da segunda letra em diante)
                    const restanteDaPalavra = palavra.slice(1);
                    return primeiraLetra + restanteDaPalavra;
                }
                return palavra; // Retorna a palavra vazia se houver espaços extras
            });

            // 4. Juntar as palavras novamente em uma única string
            const textoFinal = palavrasCapitalizadas.join(' ');

            // 5. Exibir o resultado em um elemento de saída (div)
            const outputElement = document.getElementById('input-Result');
            outputElement.textContent = textoFinal;
        }

//BTN LIMPAR

const botaoLimpar = document.getElementById('btnLimpar');
botaoLimpar.addEventListener('click', function() {
    // 3. OS CAMPOS QUE QUER LIMPAAAAAAAAARR
    document.getElementById('input-text').value = '';
    document.getElementById('input-Result').value = '';
});


