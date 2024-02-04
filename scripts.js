
function colourFunction(){      
    var x = document.getElementById("colourpick");
    var currentVal = x.value;
    document.documentElement.style.setProperty('--colours', currentVal);
}
function changeLanguage(language) {
    const englishContent = document.getElementById('english-content');
    const polishContent = document.getElementById('polish-content');

    if (language === 'en') {
        englishContent.style.display = 'flex';
        polishContent.style.display = 'none';
    } else if (language === 'pl') {
        englishContent.style.display = 'none';
        polishContent.style.display = 'flex';
    }
}