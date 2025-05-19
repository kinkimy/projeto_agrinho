 const accessibilityPanel = document.getElementById('accessibilityPanel');
const lightThemeBtn = document.getElementById('lightThemeBtn');
const darkThemeBtn = document.getElementById('darkThemeBtn');
const decreaseFontBtn = document.getElementById('decreaseFontBtn');
const increaseFontBtn = document.getElementById('increaseFontBtn');
const resetBtn = document.getElementById('resetBtn');
const fontSizeLabel = document.getElementById('fontSizeLabel');

function toggleBotaoMenu() {
    const menu= document.getElementById('accessibility-menu');

    if(menu.style.display === "block"){
        menu.style.display = "none";
    }else{
        menu.style.display = "block";
    }
}
    const currentTheme = localStorage.getItem('theme') || 'light';
    const currentFontSize = localStorage.getItem('fontSize') || 'normal';
            

    if (currentTheme === 'dark') {
        body.classList.add('dark');
}
            
    body.classList.add(`text-${currentFontSize}`);
    updateFontSizeLabel(currentFontSize);
            
    accessibilityBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        accessibilityPanel.classList.toggle('open');
    });
            
    lightThemeBtn.addEventListener('click', function() {
        body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    });
            
    darkThemeBtn.addEventListener('click', function() {
        body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    });
            
    const fontSizes = ['smaller', 'normal', 'larger', 'largest'];
    
    decreaseFontBtn.addEventListener('click', function() {
        const current = getCurrentFontSize();
        const index = fontSizes.indexOf(current);
        
        if (index > 0) {
            const newSize = fontSizes[index - 1];
            setFontSize(newSize);
        }
    });
            
    increaseFontBtn.addEventListener('click', function() {
        const current = getCurrentFontSize();
        const index = fontSizes.indexOf(current);
                
        if (index < fontSizes.length - 1) {
        const newSize = fontSizes[index + 1];
        setFontSize(newSize);
    }
});
            
    resetBtn.addEventListener('click', function() {
        body.classList.remove('dark');
        setFontSize('normal');
        localStorage.removeItem('theme');
        localStorage.removeItem('fontSize');
    });
            
    function getCurrentFontSize() {
        for (const size of fontSizes) {
            if (body.classList.contains(`text-${size}`)) {
            return size;
        }
    }
    return 'normal';
}
            
    function setFontSize(size) {
    fontSizes.forEach(s => body.classList.remove(`text-${s}`));
    body.classList.add(`text-${size}`);                
    updateFontSizeLabel(size);
    localStorage.setItem('fontSize', size);
}
            
    function updateFontSizeLabel(size) {
        const labels = {
            'smaller': 'Pequeno',
            'normal': 'Normal',
            'larger': 'Grande',
            'largest': 'Muito Grande'
    };
                
    fontSizeLabel.textContent = labels[size] || 'Normal';
}