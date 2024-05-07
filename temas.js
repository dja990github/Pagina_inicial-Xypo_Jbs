'use strict'

const switcher = document.querySelector('.BtnTema');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Tema";
}
    else { 
        this.textContent = "Tema";
    }

});