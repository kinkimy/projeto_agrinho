/* BOTÃO DE MENU*/
function Menu(){
    var menu = document.getElementById("menuinicial");
    if(menu.style.display ==="none"){
        menu.style.display="block";
    }
    else{
        menu.style.display="none";
    }
}

/* BOTÃO DO TEMA */
const alternaContraste = document.getElementById('alterna-contraste')

alternaContraste.addEventListener('click', function(){
    document.body.classList.toggle('alto-contraste')
})

/* BOTÃO DO TAMANHO DA FONTE*/
