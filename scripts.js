plclicked=0;
enclicked=1;

function colourFunctionpl(){      
    var x = document.getElementById("colourpickpl");
    var currentVal = x.value;
    document.documentElement.style.setProperty('--colours', currentVal);
}
function colourFunctionen(){      
    var x = document.getElementById("colourpicken");
    var currentVal = x.value;
    document.documentElement.style.setProperty('--colours', currentVal);
}
function changeLanguage(language) {
    const englishContent = document.getElementById('english-content');
    const polishContent = document.getElementById('polish-content');

    if (language === 'en') {
        englishContent.style.display = 'flex';
        polishContent.style.display = 'none';
        if(enclicked==0){
            document.getElementById("colourpicken").value=document.getElementById("colourpickpl").value;
            enclicked=1;
            plclicked=0;
        }
    } else if (language === 'pl') {
        englishContent.style.display = 'none';
        polishContent.style.display = 'flex';
        if(plclicked==0){
            document.getElementById("colourpickpl").value=document.getElementById("colourpicken").value;
            plclicked=1;
            enclicked=0;
        }
    }
}