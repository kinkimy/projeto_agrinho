 function botaoMenu() {
     const menu= document.getElementById('accessibility-menu');

     if(menu.style.display === "block"){
         menu.style.display = "none";
     }else{
         menu.style.display = "block";
     }
 }

 const botaoDiminuir = document.getElementById("diminuir-fonte");

 botaoDiminuir .addEventListener("click", () => {
    const textElement = document.body;
    let tamanhoAtual = parseFloat(window.getComputedStyle(textElement).fontSize);
    tamanhoAtual -= 1;
    textElement.style.fontSize = tamanhoAtual + "px";
 })