// BOTÃO DE MENU //
function Menu(){
    var menu = document.getElementById("menuinicial");
    if(menu.style.display ==="none"){
        menu.style.display="block";
    }
    else{
        menu.style.display="none";
    }
}

// BOTÃO DO TAMANHO DA FONTE //
        const fonteMenor = document.getElementById('fonteMenor');
        const fonteMaior = document.getElementById('fonteMaior');
        const fontSizeDisplay = document.getElementById('fontSizeDisplay');

        let fontSize = 100;