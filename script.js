//BOTAO LETRAS MAIUSCULA
// BOTÃO LETRAS MAIÚSCULAS
document
  .getElementById("btnMaiuscula")
  .addEventListener("click", function () {
    let inputText = document.querySelector("#input-text").value;
    document.querySelector("#input-Result").value = inputText.toUpperCase();
  });

// BOTÃO LETRAS MINÚSCULAS
document
  .getElementById("btnMinuscula")
  .addEventListener("click", function () {
    let inputText = document.querySelector("#input-text").value;
    document.querySelector("#input-Result").value = inputText.toLowerCase();
  });

    //capitalizar palavras
    document
    .getElementById("btnCapitalizar")
    .addEventListener("click", function () {
        let inputText = document.querySelector("#input-text").value;
        let textoCapitalizado = inputText.replace(/\b\w+/g, palavra =>
        palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase()
        );
        document.querySelector("#input-Result").value = textoCapitalizado;
  });


//BTN LIMPAR
const botaoLimpar = document.getElementById('btnLimpar');
botaoLimpar.addEventListener('click', function() {
    //  OS CAMPOS QUE QUER LIMPAAAAAAAAARR
    document.getElementById('input-text').value = '';
    document.getElementById('input-Result').value = '';


     //chams a função p redefinir 
     contarCaracteres(); 
});


//contar caracteres
function contarCaracteres() {
    //pegaaaaaaaa o input
    const inputTexto = document.getElementById("input-text");
    
    // onde o conbtador eh exibido
    const outputContador = document.getElementById("contador-caracteres");
    
    // pega o valor do input eh mede o tamanho
    const numeroDeCaracteres = inputTexto.value.length;
    
    // mostra o resultado na tela
    outputContador.textContent = `${numeroDeCaracteres} caracteres`;
}

//toda vez que o usuário digita algo
document.getElementById("input-text").addEventListener("input", contarCaracteres);

