let isDarkTheme = false;
let fontSize = 16;

function toggleBotaoMenu() {
    const menu= document.getElementById('accessibility-menu');

    if(menu.style.display === "block"){
        menu.style.display = "none";
    }else{
        menu.style.display = "block";
    }
}

function toggleTheme() {
    const body = document.body;

    if(isDarkTheme){
        body.style.backgroundColor = "#f9f9f9";
        body.style.color = "#333";
        isDarkTheme = false;
    }else{
        body.style.backgroundColor = "#333";
        body.style.color = "#f9f9f9";
        isDarkTheme = true;
    }
}

function increaseFontSize() {
    fontSize +=2;
    document.body.style.fontSize = fontSize + 'px';
}