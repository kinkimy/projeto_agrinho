[
    {class: 'text-small', label: 'Pequeno'},
    {class: 'text-medium', label: 'Médio'},
    {class: 'text-large', label: 'Grande'},
    {class: 'text-xlarge', label: 'Extra Grande'},
    {class: 'text-xxlarge', label: 'Muito Grande'},
];

let currentFontSizeIndex = 1;

const aumentarFonte = document.getElementById('aumentarFonte');
const diminuirFonte = document.getElementById('diminuirFonte');
const currentFontSize = document.getElementById('currentFontSize');

function updateFontSize(){
    document.body.classList.remove(
        'text-small', 'text-medium', 'text-large', 'text-xlarge', 'text-xxlarge'
    );

    document.body.classList.add(fontSizeLevels[currentFontSizeIndex].class);
    currentFontSize.textContent = fontSizeLevels[currentFontSizeIndex].label;
    localStorage.setItem('fontSize', currentFontSizeIndex);
}

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