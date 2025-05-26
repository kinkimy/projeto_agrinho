function botaoMenu() {
    const menu= document.getElementById('accessibility-menu');

    if(menu.style.display === "block"){
        menu.style.display = "none";
    }else{
        menu.style.display = "block";
    }
}

function increaseFont() {
    var element = document.querySelector("body");
    var tamanhoAtual = window.getComputedStyle(element).fontSize;
    var newSize = parseFloat(newSize) + 1 + "px";
    element.style.fontSize = newSize
}