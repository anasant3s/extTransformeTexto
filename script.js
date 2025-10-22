//BOTAO LETRAS MAIUSCULA
window.document.addEventListener("DOMContentLoaded", function (){
    document.getElementById("btnMaiuscula").addEventListener("click", function () {
        let inputText = document.querySelector("#input-text").value 
        document.querySelector("#resultado").innerHTML = inputText.toUpperCase()

    })

 //BOTAO LETRAS MINUSCULAS
  document.getElementById("btnMinuscula").addEventListener("click", function () {
        let inputText = document.querySelector("#input-text").value 
        document.querySelector("#resultado").innerHTML = inputText.toLowerCase()

    })
})

