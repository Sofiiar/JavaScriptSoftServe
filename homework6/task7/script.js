//TASK7================================
document.addEventListener('DOMContentLoaded', () => {
    const mainElement = document.createElement('main');
    mainElement.setAttribute('class', 'mainClass check item');
  
    const divElement = document.createElement('div');
    divElement.setAttribute('id', 'myDiv');
  
    const paragraphElement = document.createElement('p');
    paragraphElement.textContent = 'First paragraph';
  
    divElement.appendChild(paragraphElement);
    mainElement.appendChild(divElement);
    document.body.appendChild(mainElement);
  });
  