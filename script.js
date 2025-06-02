 let currentFontSize = 16;
 
 function botaoMenu() {
     const menu= document.getElementById('accessibility-menu');

     if(menu.style.display === "block"){
         menu.style.display = "none";
     }else{
         menu.style.display = "block";
     }
 };

 const increaseFont = () => {
    currentFontSize += 2;
    document.documentElement.style.fontSize = `${currentFontSize}px`;
 };

 const decreaseFont = () => {
    currentFontSize = Math.max(12, currentFontSize - 2);
    document.documentElement.style.fontSize = `${currentFontSize}px`;
 };

 const toggleContrast = () => {
    document.body.classList.toggle('high-contrast');
 };