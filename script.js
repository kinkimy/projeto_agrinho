 function botaoMenu() {
     const menu= document.getElementById('accessibility-menu');

     if(menu.style.display === "block"){
         menu.style.display = "none";
     }else{
         menu.style.display = "block";
     }
 }

 window.revelar = ScrollReveal({reset:true})

 revelar.reveal('.efeito-txt',
    {
        duration: 2,
        distance: '90px'
    })