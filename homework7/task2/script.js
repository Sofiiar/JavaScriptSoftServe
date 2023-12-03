let isStyled = false;

function changeCSS() {
    let textElement = document.getElementById('text');
    
    if (isStyled) {
        textElement.style.color = ''; 
        textElement.style.fontSize = '';
        textElement.style.fontFamily = '';
    } else {
        textElement.style.color = 'orange';
        textElement.style.fontSize = '20px';
        textElement.style.fontFamily = 'Comic Sans MS';
    }
    
    isStyled = !isStyled;
}

let button = document.querySelector('button');
button.addEventListener('click', changeCSS);

