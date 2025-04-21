const checkBox = document.getElementById('checkbox');
const container = document.getElementById('container');

checkBox.addEventListener("change", ()=>{
    container.classList.toggle('dark');
})