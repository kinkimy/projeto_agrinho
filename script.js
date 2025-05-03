function Menu(){
    var menu = document.getElementById("menuinicial");
    if(menu.style.display ==="none"){
        menu.style.display="block";
    }
    else{
        menu.style.display="none";
    }
}

const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})