//TASK6================================
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('h1');
    header.style.backgroundColor = 'lightgreen'; 
    header.style.padding = '10px';
    header.style.display = 'inline-block'; 

    const paragraphs = document.querySelectorAll('#myDiv p');
    paragraphs[0].style.fontWeight = 'bold';
    paragraphs[1].style.color = 'red';
    paragraphs[2].style.textDecoration = 'underline';
    paragraphs[3].style.fontStyle = 'italic';

    const myList = document.getElementById('myList');
    const listItems = myList.getElementsByTagName('li');
    const listItemTexts = Array.from(listItems).map(li => li.textContent.trim());
    while(listItems.length > 1) {
        listItems[1].parentNode.removeChild(listItems[1]);
    }
    listItems[0].textContent = listItemTexts.join('');
    listItems[0].style.listStyleType = 'none';

    const span = document.querySelector('span');
    span.style.display = 'none';
  });