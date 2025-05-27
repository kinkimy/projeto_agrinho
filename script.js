

('text-small', 'text-medium', 'text-large', 'text-xlarge', 'text-xxlarge'
);

aumentarFonte.addEventListener('click', () => {
    if(currentFontSizeIndex < fontSizeLevels.length - 1){
        currentFontSizeIndex ++;
        uptadeFontSize();
    }
})

diminuirFonte.addEventListener('click', () => {
    if(currentFontSizeIndex > 0){
        currentFontSizeIndex--;
        uptadeFontSize();
    }
});

const savedFontSize = localStorage.getItem('fontSize');
if(savedFontSize) {
    currentFontSizeIndex = parseInt(savedFontSize);
    updateFontSize();
}

// function botaoMenu() {
//     const menu= document.getElementById('accessibility-menu');

//     if(menu.style.display === "block"){
//         menu.style.display = "none";
//     }else{
//         menu.style.display = "block";
//     }
// }