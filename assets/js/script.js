// scrivo una funzione dove, se clicco sulla lente di ingrandimento, la lente sparisce e appare l'input box
// quando clicco altrove, riappare la lente d'ingrandimento e sparisce l'input box

const icon = document.querySelector('.bi-search');
const input = document.querySelector('#input');


icon.addEventListener('click', () => {
    icon.style.display = 'none';
    input.style.display = 'block';
    input.focus();
});

input.addEventListener('blur', () => {
    if(input.value === '') {
        icon.style.display = 'block';
        input.style.display = 'none';
    }
});